import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'
import TeacherRectangle from '../../../components/teacherRectangle/TeacherRectangle'
import Link from 'next/link'
/* icon imports*/
import { FaUserCircle } from 'react-icons/fa';
import { AiFillPlusCircle } from 'react-icons/ai';

export default function GroupDetail() {
    const router = useRouter()
    const groupId = router.query.groupId
    const [teachers, setTeachers] = useState([])
    const [students, setStudents] = useState([])

    useEffect(() => {

        const token = localStorage.getItem('token')
        fetch(`https://api.2know.today/group/${groupId}`, {
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
                    setStudents(data.data.groupById.students)

                }


                console.log("soy la data", data)

                // console.log("soy la data.data.groupById.teachers", data.data.groupById.teachers)

            })
    }, [router.query])
    console.log("info en el teachers", teachers)

    return (
        <>
            <Layout>
                {/* <Link> Detalle del grupo {groupId} </Link> */}
                <div className='d-flex'>
                    <div className='d-flex flex-column col-lg-6 align-items-center'>
                        <div className='d-flex col-lg-8' >
                            <div className='d-flex col-lg-6 justify-content-between'>
                                <div className='d-flex col-lg-9 justify-content-between'>
                                    <h4><FaUserCircle /></h4>
                                    <h4>Profesores</h4>
                                </div>
                                <Link href="/registerteacher"><h4><AiFillPlusCircle /></h4></Link>
                            </div>
                        </div>
                        {(Array.isArray(teachers) && teachers.length > 0) ?
                            teachers.map((teacher) => {
                                return (
                                    <Link href="/grouplist/[groupId]/teacher/[teacherId]"
                                        as={`/grouplist/${groupId}/teacher/${teacher._id}`} key={teacher._id} >
                                        <TeacherRectangle
                                            key={teacher._id}
                                            teacher={teacher}
                                        />
                                    </Link>
                                )
                            }) : <p>No hay profesores asignados</p>
                        }
                    </div>
                    <div className='d-flex flex-column col-lg-6 align-items-center'>
                        <div className='d-flex col-lg-8'>
                            <h4>Alumnos</h4>
                        </div>
                        {(Array.isArray(students) && students.length > 0) ?
                            students.map(student => {
                                return (
                                    <Link href="/grouplist/[groupId]/student/[studentId]"
                                        as={`/grouplist/${groupId}/student/${student._id}`} key={student._id} >
                                        <TeacherRectangle
                                            key={student._id}
                                            teacher={student} />
                                    </Link>
                                )
                            }) : <p>No hay alumnos asignados</p>
                        }
                    </div>
                </div>

                <ul>
                    <li>materia 1</li>
                    <li>materia 2</li>
                    <li>materia 3</li>
                    <li>materia 4</li>
                    <li>materia 5</li>
                </ul>

            </Layout>
        </>
    )
}
