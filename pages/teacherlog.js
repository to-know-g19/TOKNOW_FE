
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// import Layout from '../../../components/Layout'
// import TeacherRectangle from '../../../components/teacherRectangle/TeacherRectangle'
// import Link from 'next/link'
// id teacher 63e9417fe46924ade7590497
export default function teacherlog() {
    const router = useRouter()
    // const groupId = router.query.groupId
    // const [teachers, setTeachers] = useState([])
    // const [students, setStudents] = useState([])

    useEffect(() => {
    
    const token = localStorage.getItem('token')
                                                // ${idTeach}
    fetch(`https://api.toknow.online/teacher/63e9417fe46924ade7590497`, {
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
    })
        .then((response) => response.json())
        .then(data => {
            if (data.data) { 
                console.log('soy data:', data)
                // setTeachers(data.data.groupById.teachers)
                // setStudents(data.data.groupById.students)
    
            }
            // console.log("soy data en pag group", data)
            // console.log("soy la data.data.groupById.teachers", data.data.groupById.teachers)
    
        })
    }, [router.query])

    return (
        <div>

        </div>
  )
}
