import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Layout from '../../../../components/Layout'
import TeacherInfo from '../../../../components/TeacherInfo/TeacherInfo'

export default function Teacher() {
    const router = useRouter()
    const { groupId, studentId } = router.query
    const [student, setStudent] = useState({})

    useEffect(() => {

        const token = localStorage.getItem('token')
        fetch(`https://api.2know.today/student/${studentId}`, {
            mode: 'cors',
            headers: {
                'Content-type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
        })
            .then((response) => response.json())
            .then(data => {
                if (data.data) {
                    setStudent(data.data.studentById)
                }

                console.log("soy la data.data", data.data)
                // console.log("soy la data.data.groupById.teachers", data.data.groupById.teachers)

            })
    }, [router.query])
    console.log("soy la info en el student", student)

    return (
        <>
            {/* <h5>El maestro con id {teacherId} del grupo {groupId} </h5> */}
            <Layout>
                <div className='d-flex'>
                    <div className='d-flex flex-column col-lg-12 align-items-center'>
                        <div className='d-flex col-lg-8'>
                            <h4>Datos del alumno</h4>
                        </div>

                        {!!student &&
                            <TeacherInfo
                            key={student._id}
                            teacher={student}
                            />
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}
