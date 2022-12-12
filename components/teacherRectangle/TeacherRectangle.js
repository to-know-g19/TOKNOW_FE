import React from 'react'

export default function TeacherRectangle({teacher}){

  const {name, lastNameA, lastNameB, teacherType} = teacher 
  console.log("tipo de teacher", teacherType)
  return (
    <div className='teacherInfo'>
      <div className='teacherInfo__wrapper d-flex'>
        
        <div>
          <span>{` ${name} ${lastNameA} ${lastNameB} `}</span>
        </div>
        <span>{tipoProfesor}</span>

      </div>
    </div>
  )
}
