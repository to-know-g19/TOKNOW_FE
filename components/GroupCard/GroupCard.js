import React from 'react'
import { FaRegEye } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import { FaUserCircle } from 'react-icons/fa';

export default function GroupCard(props) {
  return (

    <div className='groupCard mt-4 mb-3 col-lg-12'>
      <div className='d-flex m-4'>

        <div className='col-lg-6 d-flex justify-content-center'>
          {/* CAMBIAR NOMBRE DE CLASE Y agregar estilo para crecer en card sin afectar ventana registergrupos*/}
          <div className='groupInfo groupCard__circle'>
            <p>{props.grade}</p>
            <p>{props.group}</p>
          </div>
        </div>

        <div className='col-lg-6 d-flex flex-column align-items-center justify-content-around'>
          <div className='d-flex col-lg-8 justify-content-around align-items-center'>
            <FaUserCircle className='groupCard__user groupCard__user__teacher' />
            Profesor
          </div>
          <div className='d-flex col-lg-8 justify-content-around align-items-center'>
            <FaUserCircle className='groupCard__user groupCard__user__student' />
            Alumnos
          </div>
        </div>

      </div>
      <div className='groupCard__footer d-flex justify-content-center'>
        <div className='groupCard__footer__icons d-flex col-lg-11 p-3 justify-content-between'>
          <button onClick={props.onEyeClick} className='btn btn-outline-primary'>
            <FaRegEye />
          </button>
          <button onClick={props.onTrashClick} className='btn btn-outline-danger'>
            <BsFillTrashFill />
          </button>
        </div>
      </div>
    </div>
  )
}
