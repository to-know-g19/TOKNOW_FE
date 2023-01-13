import React, { useEffect, useState } from 'react'
import GroupCard from '../GroupCard/GroupCard'
import Link from 'next/link'
import ModalExample from '../GroupModal/GroupModal'
import { BsArrowLeftCircle } from 'react-icons/bs';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { HiOutlineArrowCircleLeft } from 'react-icons/hi';
import ArrowGoBack from '../ArrowGoBack/ArrowGoBack';

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

          <ArrowGoBack
          btnTxtModal={<ModalExample/>}
          route={'/registergroup'}/>

        </div>


        <div className='d-flex col-lg-10 flex-wrap justify-content-around'>
          {grupos.map(grupo => (
            //removí el return reemplazando las llaves despues de la flecha con parentesis
            <Link className='col-lg-5' href={'/grouplist/' + grupo._id} key={grupo._id} >
              <GroupCard grade={grupo.grade} group={grupo.name} />
            </Link>
          ))}

        </div>
      </div>
    </>
  )
}
