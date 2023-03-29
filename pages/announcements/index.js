import React, { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
//components
import Layout from '../../components/Layout'
import CardAnnouncement from '../../components/CardAnnouncement'
import ArrowGoBack from '../../components/ArrowGoBack/ArrowGoBack'
//toastify imports
import { ToastContainer } from 'react-toastify'
import useToastify from '../../components/useToastify'
//icons
import { BsArrowRightCircle } from 'react-icons/bs';
import { BsPlusCircle } from 'react-icons/bs';
import { format } from 'date-fns';

export default function Announcements() {
    const [announceInfo, setAnnounceInfo] = useState([])
    const [userSchoolId, setUserSchoolId] = useState("")
    const [userDataRole, setUserDataRole] = useState("")
    const notifySuccess = useToastify("success", "¡Anuncio creado con éxito!")

    //check de item que viene desde newAnnouncement para notificación de anuncio creado
    useEffect(() => {
        const notifAnnounceCreation = localStorage.getItem('notifAnnounceCreation')
        if (notifAnnounceCreation === "true") {
            notifySuccess()
            localStorage.setItem('notifAnnounceCreation', 'false')
        }

    }, [])

    //petición a la api para setear anuncios
    const fetchAnnouncements = useCallback(() => {
        const token = localStorage.getItem("token");
        fetch(`https://api.toknow.online/announcement/school/${userSchoolId}`, {
            mode: "cors",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                
                const allAnnouncements = data.data.announcementsFound;
                setAnnounceInfo(allAnnouncements.reverse());
            });
    }, [userSchoolId]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userData = JSON.parse(atob(token.split(".")[1]));
        setUserDataRole(userData.role)
        
        const userRole = () => {
            if (userData.role === "admin") {
                return "user";
            } else {
                if (userData.role === "parent") {
                    return "parent";
                } else {
                    if (userData.role === "teacher") {
                        return "teacher";
                    }
                }
            }
        };
        const userId = userData.id;

        if (token) {
            fetch(`https://api.toknow.online/${userRole()}/${userId}`, {
                mode: "cors",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                   
                    let schoolId = ''
                    if (data.data) {
                        const userFetchedInfo = data.data
                        
                        if (userFetchedInfo.userById) {
                            schoolId = userFetchedInfo.userById.school._id
                        } else {
                            if (userFetchedInfo.teacherById) {
                                schoolId = userFetchedInfo.teacherById.school
                            } else {
                                if(userFetchedInfo.parentById) {
                                    schoolId = userFetchedInfo.parentById.school
                                }
                            }
                        } 
                    }
                    setUserSchoolId(schoolId);
                });
        }
    }, []);

    useEffect(() => {
        if (userSchoolId) {
            fetchAnnouncements();
        }
    }, [fetchAnnouncements, userSchoolId]);

    const routeBtnGroups = () => {
        if(userDataRole === "admin"){
            return "/grouplist"
        } else {
            if(userDataRole === "teacher"){
                return "/teacher/yourgroups"
            } else {
                if(userDataRole === "parent") {
                    return "/parent/yourgroups"
                }
            }
        }
    }
    //useEffect para conseguir el nombre del usuario dependiendo de rol e insertar en localstorage
    useEffect(() => {
        const token = localStorage.getItem("token")
        const userData = JSON.parse(atob(token.split(".")[1]))
        const userRole = userData.role
        const userId = userData.id
        if (token && token !== "undefined") {
            let url = `https://api.toknow.online/user/${userId}`
            if (userRole === "teacher") {
                url = `https://api.toknow.online/teacher/${userId}`
            } else if (userRole === "parent") {
                url = `https://api.toknow.online/parent/${userId}`
            }
            fetch(url, {
                mode: "cors",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            })
                .then(response => response.json())
                .then(data => {
                    if (data.data) {
                        const userData = data.data.parentById || data.data.userById || data.data.teacherById
                        if (userData) {
                            let name = ""
                            if (userData && userData.name) {
                                name = userData.name
                            }
                            if (userData && userData.lastNameA) {
                                name = `${name} ${userData.lastNameA}`
                            }
                            if (userData && userData.lastNameB) {
                                name = `${name} ${userData.lastNameB}`
                            }
                            if (name.length > 0) {
                                localStorage.setItem("usrnm", name)
                                
                            }
                        }
                    }
                })
        }
    }, [])
    
    return (
        <Layout>
            <div>
                <div className="d-flex mt-3 justify-content-center col-12 col-lg-12" >
                    <div className='d-flex col-11 col-lg-8 justify-content-between align-items-center'>
                        <div className='d-flex col-8 col-lg-10 align-items-center'>
                            <h4>Anuncios escolares </h4>
                            {(userDataRole !== "parent") &&
                            <Link href={"/announcements/newannouncement"}>
                                <button className='btn-form bg-success'>Anuncio <BsPlusCircle /></button>
                            </Link>}
                        </div>
                        <div className='col-4'>
                            <Link href={`${routeBtnGroups()}`} className="d-flex align-items-center" style={{textDecoration:"none"}}>
                                <button className='btn-form'>Grupos <BsArrowRightCircle /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                {(announceInfo.length > 0) ?
                    announceInfo.map(announce => (
                        <Link href="/announcements/[announceId]"
                            as={`/announcements/${announce._id}`} key={announce.key} style={{ textDecoration: 'none' }} >
                            <CardAnnouncement
                                // coverimg={"/img/kid&parent.jpeg"}
                                userId={announce.user || announce.teacher}
                                role={(!!announce.user) ? "Administrador" : "Profesor"}
                                date={format(new Date(announce.createdAt), 'dd/MM/yyyy')}
                                announcementTitle={announce.announcementTitle} />
                        </Link>
                    )) : <div className="d-flex justify-content-center " >
                        <h6 className='col-10 alert alert-primary' role="alert">
                            Aún no hay anuncios escolares publicados
                        </h6>
                    </div>
                }

            </div>
            <ToastContainer />
        </Layout>
    )
}
