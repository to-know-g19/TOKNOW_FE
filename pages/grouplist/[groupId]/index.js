/* default */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'
import TeacherRectangle from '../../../components/teacherRectangle/TeacherRectangle'

export default function GroupDetail() {
    const router = useRouter()
    const groupId = router.query.groupId
    const [groups, setGroups] = useState([])
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
                setGroups(data.data.groupById.teachers), setStudents(data.data.groupById.students)

                console.log("soy la data", data)
                console.log("soy la data.data.groupById.teachers", data.data.groupById.teachers)

            })
    }, [])
    console.log("info en el groups", groups)

    return (
        <>
            <Layout>
                {/* <Link> Detalle del grupo {groupId} </Link> */}


                <h2>materias</h2>
                <ul>
                    <li>materias 1</li>
                </ul>

                <ul>
                    <li>materias 1</li>
                </ul>
                <div className='d-flex'>
                    <div className='d-flex flex-column col-lg-6 align-items-center'>
                        <h4>Profesores</h4>
                        {groups.map(group => {
                            return <TeacherRectangle
                                key={group._id}
                                teacherName={group.name}
                                lastNameA={group.lastNameA}
                                lastNameB={group.lastNameB}
                                teacherType={group.tipoProfesor} />
                        })}
                    </div>
                    <div className='d-flex flex-column col-lg-6 align-items-center'>
                        <h4>Alumnos</h4>
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
                </ul>

            </Layout>
        </>
    )
}
