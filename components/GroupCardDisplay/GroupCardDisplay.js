import React, { useEffect, useState } from 'react'
import GroupCard from '../GroupCard/GroupCard'

export default function GroupCardDisplay() {
  const [grupos, setGrupos] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch('https://api.2know.today/group', {
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
    }
    )
      .then((response) => response.json())
      .then(data => {
        setGrupos(data.data.groups)
        //da error cuando se trata de entrar y no hay token en localStorage
        console.log("Grupos: ", data.data.groups)
      })
  }, [])


  return (
    <>
    <div className='d-flex justify-content-center'>
      <div className='d-flex col-lg-10 flex-wrap justify-content-around '>
      {grupos.map(grupo => {
        return <GroupCard grade={grupo.grade} group={grupo.name} id={grupo._id}/>
      })}
      </div>
      </div>
    </>
  )
}
