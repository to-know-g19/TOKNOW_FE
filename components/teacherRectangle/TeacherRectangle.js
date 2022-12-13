import React from 'react'

export default function TeacherRectangle({teacher}){

  const {name, lastNameA, lastNameB, tipoProfesor} = teacher 
  console.log("tipo de teacher", tipoProfesor)
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
