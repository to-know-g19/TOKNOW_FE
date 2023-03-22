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
    const notifySuccess = useToastify("success", "¡Anuncio creado con éxito!")
    console.log('userSchoolId', userSchoolId)

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
                console.log("anuncios de schoolId", data)
                const allAnnouncements = data.data.announcementsFound;
                setAnnounceInfo(allAnnouncements.reverse());
            });
    }, [userSchoolId]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userData = JSON.parse(atob(token.split(".")[1]));
        console.log("user data del token", userData)
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
                    console.log("soy data del fetch al usuario", data)
                    let schoolId = ''
                    if (data.data) {
                        const userFetchedInfo = data.data
                        console.log('fetchedInfo', userFetchedInfo)
                        if (userFetchedInfo.userById) {
                            schoolId = userFetchedInfo.userById.school._id;
                        } else {
                            if (userFetchedInfo.teacherById) {
                                schoolId = userFetchedInfo.teacherById.school
                            }
                        }
                    } else {
                        if (userData.role === "parent") {
                            schoolId = userData.schoolId
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
    return (
        <Layout>
            <div>
                <div className="d-flex mt-3 justify-content-center col-12 col-lg-12" >
                    <div className='d-flex col-11 col-lg-8 justify-content-between align-items-center'>
                        <div className='d-flex col-8 col-lg-10 align-items-center'>
                            <h4>Anuncios escolares </h4>
                            <Link href={"/announcements/newannouncement"}>
                                <button className='btn-form bg-success'>Anuncio <BsPlusCircle /></button>
                            </Link>
                        </div>
                        <div className='col-4'>
                            <Link href={"/grouplist"} className="d-flex align-items-center">
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
                                userName={"id de usuario para traer info"}
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
