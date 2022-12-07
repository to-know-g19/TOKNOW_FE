/* default */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'
import TeacherRectangle from '../../../components/teacherRectangle/TeacherRectangle'
import Link from 'next/link'

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
                setTeachers(data.data.groupById.teachers), setStudents(data.data.groupById.students)

                console.log("soy la data", data)
                console.log("soy la data.data.groupById.teachers", data.data.groupById.teachers)

            })
    }, [])
    console.log("info en el groups", teachers)

    return (
        <>
            <Layout>
                {/* <Link> Detalle del grupo {groupId} </Link> */}
                <div className='d-flex'>
                    <div className='d-flex flex-column col-lg-6 align-items-center'>
                        <div className='d-flex col-lg-8'>
                            <h4>Profesores</h4>
                        </div>
                        {teachers.map(teacher => (
                            <Link href={'/grouplist/' + groupId + "/" + teacher._id} key={teacher._id} >
                                <TeacherRectangle
                                    key={teacher._id}
                                    teacherName={teacher.name}
                                    lastNameA={teacher.lastNameA}
                                    lastNameB={teacher.lastNameB}
                                    teacherType={teacher.tipoProfesor} />
                            </Link>
                        ))}
                    </div>
                    <div className='d-flex flex-column col-lg-6 align-items-center'>
                        <div className='d-flex col-lg-8'>
                            <h4>Alumnos</h4>
                        </div>
                        {students.map(student => {
                            return <TeacherRectangle
                                key={student._id}
                                teacherName={student.name}
                                lastNameA={student.lastNameA}
                                lastNameB={student.lastNameB}
                                teacherType={student.tipoProfesor} />
                        })}
                    </div>
                </div>

                <ul>
                    <li>materias 1</li>
                    <li>materias 2</li>
                    <li>materias 3</li>
                    <li>materias 4</li>
                    <li>materias 5</li>
                </ul>

            </Layout>
        </>
    )
}
