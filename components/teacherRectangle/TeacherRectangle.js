import React, {useState, useEffect} from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import { BsFillTrashFill } from 'react-icons/bs';

export default function TeacherRectangle( props ) {
// lo envíaba como ({teacher})
  // const { name, lastNameA, lastNameB, tipoProfesor, onEyeClick } = teacher
  // console.log("tipo de teacher", tipoProfesor)
  const [userRole, setUserRole] = useState("")
  useEffect(() =>{
    const token = localStorage.getItem("token");
    const userData = JSON.parse(atob(token.split(".")[1]));
    const userId = userData.id;
    setUserRole (userData.role)
  }, [])
  
  return (
    <div className='teacherInfo d-flex col-11 col-lg-12'>
      <div className='teacherInfo__wrapper d-flex col-12 col-lg-12'>

        <div className='d-flex col-2  col-lg-2 justify-content-center align-items-center'>
          <FaUserCircle className='teacherInfo__userCircle' />
        </div>

        <div className='d-flex flex-column col-6 col-lg-7'>
          <div>
            <span>{` ${props.name} ${props.lastNameA} ${props.lastNameB} `}</span>
          </div>
          <span>{props.tipoProfesor}</span>
        </div>

        <div className='teacherInfo__icons d-flex col-4 col-lg-3 align-items-center justify-content-around justify-content-lg-around'>
          {(userRole == "admin") ?
          <button onClick={props.onTrashClick}className='btn btn-outline-danger'>
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
