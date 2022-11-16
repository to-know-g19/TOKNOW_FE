import React, { useEffect, useState } from 'react'
import GroupCircle from '../GroupCircle/GroupCircle'
import TeacherRectangle from '../teacherRectangle/TeacherRectangle'


export default function TeachersDisplay() {
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch('https://api.2know.today/teacher', {
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
    }
    )
      .then((response) => response.json())
      .then(data => {
        setTeachers(data.data.teachers)
        console.log("Profesores: ", data.data.teachers)
      })
  }, [])



  return (
    <>
      <div>
        {teachers.map(teacher => {
          return <TeacherRectangle 
          teacherName={teacher.name + " "} 
          lastNameA={teacher.lastNameA} 
          lastNameB={teacher.lastNameB} 
          teacherType={teacher.tipoProfesor} />
        })}
      </div>
    </>

  )
}
