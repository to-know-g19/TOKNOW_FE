import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
//components
import Layout from '../../../components/Layout'
import TeacherRectangle from '../../../components/teacherRectangle/TeacherRectangle'
import ArrowGoBack from '../../../components/ArrowGoBack/ArrowGoBack'
/* icon imports*/
import { FaUserCircle } from 'react-icons/fa';
import { AiFillPlusCircle } from 'react-icons/ai';
//toastify imports
import { ToastContainer } from 'react-toastify'
import useToastify from '../../../components/useToastify'
import GroupCircle from '../../../components/GroupCircle/GroupCircle'
import GroupInfoCircle from '../../../components/GroupInfoCircle'

export default function GroupDetail() {
    const router = useRouter()
    const groupId = router.query.groupId
    const [teachers, setTeachers] = useState([])
    const [students, setStudents] = useState([])
    const [groupInfo, setGroupInfo] = useState({})
    const [route, setRoute] = useState("")
    const [userRole, setUserRole] = useState("")
    const notifySuccessTeach = useToastify("success", "Profesor eliminado con exito")
    const notifySuccessStud = useToastify("success", "Estudiante eliminado con exito")
    const notifySuccessAnnouncement = useToastify("success", "¡Anuncio creado con éxito!")

    useEffect(() => {

        const token = localStorage.getItem('token')
        const userData = JSON.parse(atob(token.split(".")[1]));
        const userRole = userData.role;
        const userId = userData.id;
        fetch(`https://api.toknow.online/group/${groupId}`, {
            mode: 'cors',
            headers: {
                'Content-type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
        })
            .then((response) => response.json())
            .then(data => {
                if (data.data) {
                    setTeachers(data.data.groupById.teachers)
                    if (userRole === "parent") {
                        const parentStudents = data.data.groupById.students.filter(student =>
                            student.parents.includes(userId)
                        )
                        setStudents(parentStudents)
                    } else {
                        setStudents(data.data.groupById.students)
                    }
                    setGroupInfo(data.data.groupById)
                }

            })
    }, [router.query])

    //handler para accerder a la info -con parametros a definir
    const handleEyeClick = (groupId, userId, strRutaExtra) => {
        router.push(`/grouplist/${groupId}/${strRutaExtra}${userId}`)
    };

    //handler para borrar -con parametros a definir
    const handleTrashClick = (strRoute, userId) => {
        const token = localStorage.getItem("token");
        fetch(`https://api.toknow.online/${strRoute}/${userId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.ok === true) {
                    //se toma el argumento que reciba el handler en la card
                    //y se usa para la lógica de setear un item para las notificaciones
                    if (strRoute === "teacher") {
                        localStorage.setItem("notifTeachDeletion", "true")
                    } else {
                        if (strRoute === "student") {
                            localStorage.setItem("notifStudDeletion", "true")
                        }
                    }
                    window.location.reload();
                }
            })
    };

    //estado de notificaciones toastify
    useEffect(() => {
        const notifTeachDeletion = localStorage.getItem('notifTeachDeletion')
        const notifStudDeletion = localStorage.getItem('notifStudDeletion')
        const notifAnnounceCreation = localStorage.getItem('notifAnnounceCreation')
        if (notifTeachDeletion === 'true') {
            notifySuccessTeach()
            localStorage.setItem('notifTeachDeletion', 'false')
        }
        if (notifStudDeletion === 'true') {
            notifySuccessStud()
            localStorage.setItem('notifStudDeletion', 'false')
        }
        if (notifAnnounceCreation === "true") {
            notifySuccessAnnouncement()
            localStorage.setItem('notifAnnounceCreation', 'false')
        }

        const token = localStorage.getItem('token')
        if (token) {
            const userData = JSON.parse(atob(token.split(".")[1]));
            const userRole = userData.role;
            setUserRole(userData.role)
            //condición para rutas de componente ArrowGoBack
            let route = ("")
            if (userRole == "admin") {
                route = "/grouplist"
            } else {
                if (userRole == "parent") {
                    route = "/parent/yourgroups"
                } else {
                    route = "/teacher/yourgroups"
                }
            }
            setRoute(route)
        }
    }, [])

    return (
        <>
            <Layout>
                <div>
                    <ArrowGoBack
                        btnTxtModal2nd={
                            userRole !== "parent" ? (
                                <Link href={'/grouplist/[groupId]/newgroupannouncement'} as={`/grouplist/${groupId}/newgroupannouncement`} >
                                    <button className='btn-form bg-success'>Crear Anuncio</button>
                                </Link>) : null
                        }
                        btnTxtModal3={
                            <Link href={'/grouplist/[groupId]/groupannouncements'} as={`/grouplist/${groupId}/groupannouncements`} >
                                <button className='btn-form'>Anuncios grupales</button>
                            </Link>}
                        route={`${route}`} />

                    <div className='d-flex flex-column flex-lg-row justify-content-lg-around'>
                        <div className='d-flex flex-column col-lg-5 align-items-center'>
                            <div className='d-flex col-lg-8' >
                                <div className='d-flex col-lg-6 justify-content-between'>
                                    <div className='d-flex col-8 col-lg-9 justify-content-around'>
                                        <h4><FaUserCircle className='user-circle user-circle__teacher' /></h4>
                                        <h4>Profesores</h4>
                                    </div>
                                    {(userRole == "admin") && (teachers.length < 3) &&
                                        <Link href="/grouplist/[groupId]/addteacher"
                                            as={`/grouplist/${groupId}/addteacher`} style={{ textDecoration: 'none' }}><h4><AiFillPlusCircle /></h4>
                                        </Link>
                                    }
                                </div>
                            </div>
                            {(Array.isArray(teachers) && teachers.length > 0) ?
                                teachers.map((teacher) => {
                                    return (
                                        // <Link href="/grouplist/[groupId]/teacher/[teacherId]"
                                        //     as={`/grouplist/${groupId}/teacher/${teacher._id}`} key={teacher._id} style={{ textDecoration: 'none' }} >
                                        <TeacherRectangle
                                            key={teacher._id}
                                            name={teacher.name}
                                            lastNameA={teacher.lastNameA}
                                            lastNameB={teacher.lastNameB}
                                            tipoProfesor={teacher.tipoProfesor}
                                            onEyeClick={() => handleEyeClick(groupId, teacher._id, "teacher/")}
                                            onTrashClick={() => handleTrashClick("teacher", teacher._id)}
                                        />
                                        // </Link>
                                    )
                                }) : <p>No hay profesores asignados</p>
                            }
                        </div>
                        <div className='d-flex flex-column col-lg-5 align-items-center'>
                            <div className='d-flex col-lg-8' >
                                <div className='d-flex col-lg-6 justify-content-between'>
                                    <div className='d-flex col-8 col-lg-9 justify-content-around'>
                                        <h4><FaUserCircle className='user-circle user-circle__student' /></h4>
                                        <h4>Alumnos</h4>
                                    </div>
                                    {(userRole == "admin") ?
                                        <Link href="/grouplist/[groupId]/addstudent"
                                            as={`/grouplist/${groupId}/addstudent`} style={{ textDecoration: 'none' }}><h4><AiFillPlusCircle /></h4>
                                        </Link> : <p></p>
                                    }
                                </div>
                            </div>
                            {(Array.isArray(students) && students.length > 0) ?
                                students.map(student => {
                                    return (
                                        <TeacherRectangle
                                            key={student._id}
                                            name={student.name}
                                            lastNameA={student.lastNameA}
                                            lastNameB={student.lastNameB}
                                            tipoProfesor={student.tipoProfesor}
                                            onEyeClick={() => handleEyeClick(groupId, student._id, "")}
                                            onTrashClick={() => handleTrashClick("student", student._id)}
                                        />
                                    )
                                }) : <p>No hay alumnos asignados</p>
                            }
                        </div>
                    </div>
                </div>

                <ToastContainer />
            </Layout>
        </>
    )
}
