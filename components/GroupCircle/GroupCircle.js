import React from 'react'

export default function GroupCircle({ grade, group }) {
    return (
        <div className='groupInfo'>
            <p>{grade}</p>
            <p>{group}</p>
        </div>
    )
}