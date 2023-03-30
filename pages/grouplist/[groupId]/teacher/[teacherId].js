import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../../components/Layout'
import TeacherInfo from '../../../../components/TeacherInfo/TeacherInfo'
import ArrowGoBack from '../../../../components/ArrowGoBack/ArrowGoBack'

export default function Teacher() {
    const router = useRouter()
    const { groupId, teacherId } = router.query
    const [teacher, setTeacher] = useState({})

    useEffect(() => {

        const token = localStorage.getItem('token')
        fetch(`https://api.toknow.online/teacher/${teacherId}`, {
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

            })
    }, [router.query])


    return (
        <>
            {/* <h5>El maestro con id {teacherId} del grupo {groupId} </h5> */}
            <Layout>
                <div className='d-flex'>
                    <div className='d-flex flex-column col-12 col-lg-12 align-items-center'>
                        <ArrowGoBack
                        btnTxtModal={<h4>Datos del profesor</h4>}
                        route={`/grouplist/${groupId}`}/>

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
