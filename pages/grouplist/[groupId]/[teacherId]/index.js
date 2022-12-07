/* default */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import TeacherRectangle from '../../../../components/teacherRectangle/TeacherRectangle'
import Layout from '../../../../components/Layout'

export default function Teacher() {
    const router = useRouter()
    const { groupId, teacherId } = router.query
    const [teachers, setTeachers] = useState([])

    useEffect(() => {

        const token = localStorage.getItem('token')
        fetch(`https://api.2know.today/teacher/${teacherId}`, {
            mode: 'cors',
            headers: {
                'Content-type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
        })
            .then((response) => response.json())
            .then(data => {
                setTeachers(data.data.teacherById)

                console.log("soy la data", data.data.teacherById)
                // console.log("soy la data.data.groupById.teachers", data.data.groupById.teachers)

            })
    }, [])
    console.log("soy la info en el teachers", teachers)

    return (
        <>
            {/* <h5>El maestro con id {teacherId} del grupo {groupId} </h5> */}
        <Layout>
            <div className='d-flex'>
                <div className='d-flex flex-column col-lg-12 align-items-center'>
                    <div className='d-flex col-lg-8'>
                        <h4>Datos del profesor</h4>
                    </div>
                    {teachers.map(teacher => (
                         <TeacherRectangle
                            key={teacher._id}
                            teacherName={teacher.name}
                            lastNameA={teacher.lastNameA}
                            lastNameB={teacher.lastNameB}
                            teacherType={teacher.tipoProfesor} />

                    ))}
                </div>
            </div>
            </Layout>
        </>
    )
}
