/* default */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'
import TeacherRectangle from '../../../components/teacherRectangle/TeacherRectangle'

export default function GroupDetail() {
    const router = useRouter()
    const groupId = router.query.groupId
    const [groups, setGroups] = useState([])

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
                setGroups(data.data)

                console.log("soy la data.data", data.data)
                console.log("soy la data.data.groupById.teachers", data.data.groupById.teachers)

            })
        }, [router.query])
        console.log("info en el groups", groups)

    return (
        <>
            <Layout>
                {/* <Link> Detalle del grupo {groupId} </Link> */}


                <h2>materias</h2>
                <ul>
                    <li>materias 1</li>
                </ul>
                <h2>students</h2>

                <ul>
                    <li>materias 1</li>
                </ul>
                <h2>Teacher</h2>
                {/* <div className='d-flex justify-content-center flex-wrap'>
                    {groups.map(group => {
                        return <TeacherRectangle
                            key={group.groupById.teachers._id}
                            teacherName={group.groupById.teachers.name}
                            lastNameA={group.groupById.teachers.lastNameA}
                            lastNameB={group.groupById.teachers.lastNameB}
                            teacherType={group.groupById.teachers.tipoProfesor} />
                    })}
                </div> */}


                <ul>
                    <li>materias 1</li>
                </ul>

            </Layout>
        </>
    )
}
