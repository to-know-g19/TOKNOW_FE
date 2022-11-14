import React, { useEffect, useState } from 'react'
import GroupCircle from '../GroupCircle/GroupCircle'

export default function GroupsDisplay() {

    const [grupos, setGrupos] = useState([])
    // useEffect(() =>{
    //     const token = localStorage.getItem('token')
    // }, [])
    

    useEffect(() => {
        const token = localStorage.getItem('token')
        fetch('https://api.2know.today/group',{
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',
            "Authorization": `Bearer ${token}`
        }, }
            )
         .then((response) => response.json())
         .then(data => {
            setGrupos(data.data.groups)
            //da error cuando se trata de entrar y no hay token en localStorage
            console.log("Grupos: ", data.data.groups)
         })
    }, [])

    // useEffect(async() =>{
    //     const groups = await fetch ('https://api.2know.today/group',{

    //     })
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