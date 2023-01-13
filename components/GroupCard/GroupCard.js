import React from 'react'
import GroupCircle from '../GroupCircle/GroupCircle'
import { FaRegEye } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import { FaUserCircle } from 'react-icons/fa';

export default function GroupCard(props) {
  return (

    <div className='groupCard m-4 col-lg-12'>
      <div className='d-flex m-4'>

        <div className='col-lg-6 d-flex justify-content-center'>
        {/* CAMBIAR NOMBRE DE CLASE Y agregar estilo para crecer en card sin afectar ventana registergrupos*/}
          <div className='groupInfo groupCard__circle'> 
            <p>{props.grade}</p>
            <p>{props.group}</p>
          </div>
        </div>

        <div className='col-lg-6 d-flex flex-column align-items-center justify-content-around'>
          <div>
            <FaUserCircle />
            Profesor
          </div>
          <div>
            <FaUserCircle />
            Alumnos
          </div>
        </div>

      </div>
      <div className='groupCard__footer d-flex justify-content-center'>
        <div className='groupCard__footer__icons d-flex col-lg-11 p-3 justify-content-between'>
          <FaRegEye />
          <BsFillTrashFill />
        </div>
      </div>
    </div>
  )
}
