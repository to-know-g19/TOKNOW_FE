import React, { useEffect, useState } from 'react'
import GroupCard from '../GroupCard/GroupCard'
import Link from 'next/link'
import ModalExample from '../GroupModal/GroupModal'

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
      <div className='d-flex flex-column align-items-center'>

        <div className='d-flex col-lg-12 justify-content-around'>
          <div className='col-lg-2 '>
            <Link className='col-lg-12' href='/registergroup'><button className='col-12'>Crear grupo</button></Link>
          <ModalExample/>
          </div>
          <div className='col-lg-2'>
            <Link className='col-lg-12' href='/teachers'><button className='col-12'>Profesores</button></Link>
          </div>
        </div>

        <div className='d-flex col-lg-10 flex-wrap justify-content-center '>
          {grupos.map(grupo => {
            return <GroupCard grade={grupo.grade} group={grupo.name} />
          })}
        </div>
      </div>
    </>
  )
}
