import React, { useEffect, useState } from 'react'
import { BsPencilSquare } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { FaChalkboardTeacher } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';

export default function GroupCard(props) {
  const [userRole, setUserRole] = useState("")
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = JSON.parse(atob(token.split(".")[1]));
    setUserRole(userData.role)

  }, [])


  return (

    <div className='groupCard mt-4 mb-3 col-lg-12'>
      <div className='d-flex m-4 justify-content-around'>

        <div className='col-6 d-flex justify-content-center'>
          {/* CAMBIAR NOMBRE DE CLASE Y agregar estilo para crecer en card sin afectar ventana registergrupos*/}
          <div className='groupInfo groupCard__circle'>
            <p>{props.grade}</p>
            <p>{props.group}</p>
          </div>
        </div>

        <div className='col-6 d-flex flex-column align-items-center justify-content-around'>

          <div className='d-flex col-lg-9 col-12 align-items-center'>
            <div className='d-flex col-5'>
              <div className='groupCard__counter d-flex justify-content-end' >
                <p className='groupCard__counter__number d-flex justify-content-center align-items-center'>
                  {props.teacherCounter}
                </p>
              </div>
              <FaChalkboardTeacher className='groupCard__user groupCard__user__teacher' />
            </div>
            <div className='col-7'>
              Profesores
            </div>
          </div>
          <div className='d-flex col-lg-9 col-12 align-items-center'>
            <div className='d-flex col-5'>
              <div className='groupCard__counter d-flex justify-content-end' >
                <p className='groupCard__counter__number d-flex justify-content-center align-items-center'>
                  {props.studentCounter}
                </p>
              </div>
              <MdGroups className='groupCard__user groupCard__user__student' />
            </div>
            <div className='col-7'>
              Alumnos
            </div>
          </div>
        </div>

      </div>
      <div className='groupCard__footer d-flex justify-content-center'>
        <div className='groupCard__footer__icons d-flex col-11 col-lg-11 p-3 justify-content-between'>

          {(userRole == "admin") ?
            <button onClick={props.onTrashClick} className='btn btn-outline-danger'>
              <BsFillTrashFill />
            </button> : <p></p>
          }

          <button onClick={props.onEyeClick} className='btn btn-outline-primary'>
            <BsPencilSquare />
          </button>

        </div>
      </div>
    </div>
  )
}
