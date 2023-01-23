import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../../../../components/Layout'
import ParentInfo from '../../../../../../components/ParentInfo/ParentInfo'
import ArrowGoBack from '../../../../../../components/ArrowGoBack/ArrowGoBack'

export default function Parent() {
    const router = useRouter()
    const { groupId, studentId, parentId } = router.query
    const [parent, setParent] = useState({})

    useEffect(() => {

        const token = localStorage.getItem('token')
        fetch(`https://api.2know.today/parent/${parentId}`, {
            mode: 'cors',
            headers: {
                'Content-type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
        })
        
            .then((response) => response.json())
            .then(data => {
                if (data.data) {
                    setParent(data.data.parentById)
                }

                console.log("soy la data.data", data.data)
                // console.log("soy la data.data.groupById.teachers", data.data.groupById.teachers)

            })
    }, [router.query])
    console.log("soy info en parents dentro del groups", parent)
    console.log("soy el routerquery groupId", groupId)

    return (
        <>
            {/* <h5>El maestro con id {teacherId} del grupo {groupId} </h5> */}
            <Layout>
                <div className='d-flex'>
                    <div className='d-flex flex-column col-lg-12 align-items-center'>
                        <ArrowGoBack
                        btnTxtModal={<h4>Datos del padre</h4>}
                        route={`/grouplist/${groupId}/${studentId}`}/>

                        {!!parent &&
                            <ParentInfo
                            key={parent._id}
                            teacher={parent}
                            />
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}
