import React, { useEffect, useState } from 'react'
import TeacherRectangle from '../teacherRectangle/TeacherRectangle'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'

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
        console.log("Profesores:data ", data)
        console.log("Profesores:data.data ", data.data)
        console.log("Profesores:data.data.teachers ", data.data.teachers)
      })
  }, [])



  return (
    <>
      <div>
        <div className='d-flex col-lg-12 justify-content-around'>
          <div className='col-lg-2 '>
            <Link className='col-lg-12' href='/groups'><button className='col-12'>Ver grupos</button></Link>
          </div>
          <div className='col-lg-2'>
            <Link className='col-lg-12' href='/registerteacher'><button className='col-12'>Registrar profesor</button></Link>
          </div>
        </div>
        <div className='d-flex justify-content-center flex-wrap'>
          {teachers.map(teacher => {
            return <TeacherRectangle
              key={teacher._id}
              teacherName={teacher.name}
              lastNameA={teacher.lastNameA}
              lastNameB={teacher.lastNameB}
              teacherType={teacher.tipoProfesor} />
          })}
        </div>
      </div>
    </>

  )
}
