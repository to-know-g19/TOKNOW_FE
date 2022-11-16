import React from 'react'

export default function TeacherRectangle(props) {
  return (
    <div className='teacherInfo'>
      <div className='teacherInfo__wrapper'>
      <span>{props.teacherName}</span>
      <span>{props.teacheType}</span>
      </div>
    </div>
  )
}
