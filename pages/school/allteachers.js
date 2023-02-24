import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

export default function Allteachers() {
    const router = useRouter()
    const [schoolId, setSchoolId] = useState("")
    useEffect(() => {
        const token = localStorage.getItem("token");
        const userData = JSON.parse(atob(token.split(".")[1]));
        const userId = userData.id;
        fetch(`https://api.toknow.online/user/${userId}`, {
            mode: "cors",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('soy la skulId del user', data.data.userById.school._id)
                setSchoolId(data.data.userById.school._id)
            })

        
    }, [])

    useEffect(() =>{
        const token = localStorage.getItem("token");
        fetch(`https://api.toknow.online/school/${schoolId}`, {
            mode: "cors",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                const schoolGroups = data.data.school.groups
                console.log('soy grupos de schul', schoolGroups)
                // schoolGroups.forEach(group => {
                //     console.log(group)
                    
                // });
            })
    },[router.query])

    return (
        <div>All</div>
    )
}
