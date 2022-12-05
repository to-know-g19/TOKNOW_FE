/* default */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'

export default function GroupDetail() {
    const router = useRouter()
    const groupId = router.query.groupId
    const [group, setGroups] = useState([])

    useEffect(() => {
       
        const token = localStorage.getItem('token')
        fetch(`https://api.2know.today/group/${groupId}`, {
            mode: 'cors',
            headers: {
                'Content-type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
        }
        )
            .then((response) => response.json())
            .then(data => {
                console.log("soy data", data)
          
                setGroups(data.data)
                // console.log(pathName)
                //  console.log("GRUPOS: ", group)
            })
    }, [router.query])

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
                <ul>
                    <li>materias 1</li>
                </ul>

            </Layout>
        </>
    )
}
