import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../../components/Layout'
import StudentInfo from '../../../../components/StudentInfo/StudentInfo'
import ArrowGoBack from '../../../../components/ArrowGoBack/ArrowGoBack'

export default function Teacher() {
    const router = useRouter()
    const { groupId, studentId } = router.query
    const [student, setStudent] = useState({})

    useEffect(() => {

        const token = localStorage.getItem('token')
        fetch(`https://api.toknow.online/student/${studentId}`, {
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

                // console.log("soy la data.data", data.data)
               

            })
    }, [router.query])
    // console.log("soy la info en el student", student)

    return (
        <>
            {/* <h5>El maestro con id {teacherId} del grupo {groupId} </h5> */}
            <Layout>
                <div className='d-flex'>
                    <div className='d-flex flex-column col-12 col-lg-12 align-items-center'>
                        <ArrowGoBack
                        btnTxtModal={<h4>Datos del alumno</h4>}
                        route={`/grouplist/${groupId}`}
                        />

                        {!!student &&
                            <StudentInfo
                            key={student._id}
                            student={student}
                            />
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}
