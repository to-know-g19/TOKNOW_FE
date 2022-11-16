import React from 'react'

export default function TeacherRectangle(props) {
  return (
    <div className='teacherInfo'>
      <div className='teacherInfo__wrapper'>
        <div className='d-flex flex-wrap'>
          <span>{` ${props.teacherName} ${props.lastNameA} ${props.lastNameB} `}</span>
        </div>
        <span>{props.teacherType}</span>
      </div>
    </div>
  )
}
