import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../../components/Layout'
import TeacherInfo from '../../../../components/TeacherInfo/TeacherInfo'

export default function Teacher() {
    const router = useRouter()
    const { groupId, teacherId } = router.query
    const [teacher, setTeacher] = useState({})

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
                if (data.data) {
                    setTeacher(data.data.teacherById)
                }

                console.log("soy la data.data", data.data)
                // console.log("soy la data.data.groupById.teachers", data.data.groupById.teachers)

            })
    }, [router.query])
    console.log("soy info en teachers dentro del groups", teacher)

    return (
        <>
            {/* <h5>El maestro con id {teacherId} del grupo {groupId} </h5> */}
            <Layout>
                <div className='d-flex'>
                    <div className='d-flex flex-column col-lg-12 align-items-center'>
                        <div className='d-flex col-lg-8'>
                            <h4>Datos del profesor</h4>
                        </div>

                        {!!teacher &&
                            <TeacherInfo
                            key={teacher._id}
                            teacher={teacher}
                            />
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}
