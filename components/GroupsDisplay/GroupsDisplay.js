import React, { useEffect, useState } from 'react'
import GroupCircle from '../GroupCircle/GroupCircle'



// const grupos = [
//     {
//         grade:"1",
//         group:"Z"
//     },
//     {
//         grade:"1",
//         group:"Z"
//     },
// ]

export default function GroupsDisplay() {
    const [grupos, setGrupos] = useState([])
    // const token = localStorage.getItem('token')
    useEffect(() => {
        fetch('https://api.2know.today/group',{
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',
            // "Authorization": `Bearer ${token}`
        },
        // body: JSON.stringify(group)
        
        }
            )
         .then((response) => response.json())
         .then(data => {
            setGrupos(data.data.groups)
            console.log("Grupos: ", data)
         })
    }, [])

    // const grupos = fetch('https://api.2know.today/group',{
    // })


    return (
        <>

                <div className='group-Wrapper d-flex'>
                    <div className='groups-container d-flex'>
                        {grupos.map(grupo => {
                            return <GroupCircle grade={grupo.grade} group={grupo.name} />
                        })}


                    </div>
                </div>
        </>
    )
}