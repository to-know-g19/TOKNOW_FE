import React from 'react'

export default function TeacherRectangle(props) {
  return (
    <div className='groupInfo'>
    <p>{props.teacherName}</p>
    <p>{props.teacheType}</p>
</div>
  )
}
