import React, { useEffect, useState } from 'react'
import GroupCircle from '../GroupCircle/GroupCircle'
import { useRouter } from 'next/router'

export default function GroupInfoCircle() {
    const [groupInfo, setGroupInfo] = useState({})
    const router = useRouter()
    useEffect(() => {

        const groupId = router.query.groupId
        if (!!groupId) {
            const token = localStorage.getItem('token')
            fetch(`https://api.toknow.online/group/${groupId}`, {
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
            })
                .then((response) => response.json())
                .then(data => {
                    if (data.data) {
                        setGroupInfo(data.data.groupById)
                    }

                })
        }
    }, [router.query.groupId])
    return (
        <div>
            <GroupCircle
                grade={groupInfo.grade}
                group={groupInfo.name}
            />
        </div>
    )
}
