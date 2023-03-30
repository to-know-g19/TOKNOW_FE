import React, { useEffect, useState } from 'react'
import GroupCard from '../GroupCard/GroupCard'
import ModalExample from '../GroupModal/GroupModal'
import ArrowGoBack from '../ArrowGoBack/ArrowGoBack';
import { useRouter } from 'next/router';
//toastify imports
import { ToastContainer } from 'react-toastify'
import useToastify from '../useToastify'

export default function GroupCardDisplay() {
  const [grupos, setGrupos] = useState([]);
  const router = useRouter()
  const notifySuccess = useToastify("success", "Registro de grupo exitoso")
  const notifySuccessGroupDelete = useToastify("success", "Grupo eliminado con éxito")

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userData = JSON.parse(atob(token.split(".")[1]));
      const userId = userData.id;
      // console.log('user id', userId)

      fetch(`https://api.toknow.online/school`, {
        mode: "cors",
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => {

          const schools = data.data.schools

          schools.forEach(school => {
            if (school.user !== null && school.user._id === userId) {
              setGrupos(school.groups);
            }
          });
        })
    }
  }, []);

  const handleEyeClick = (id) => {
    router.push('/grouplist/' + id)
  };

  const handleTrashClick = (id) => {
    const token = localStorage.getItem("token");
    fetch(`https://api.toknow.online/group/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(response => {
        // console.log('response en delete group', response)
        if (response.ok === true) {
          localStorage.setItem('notifGroupDeletion', 'true')
          window.location.reload();

        }
      })
  }

  useEffect(() => {
    const notifGroupCreation = localStorage.getItem('notifGroupCreation')
    const notifGroupDeletion = localStorage.getItem('notifGroupDeletion')
    if (notifGroupCreation === 'true') {
      notifySuccess()
      localStorage.setItem('notifGroupCreation', 'false')
    }
    if (notifGroupDeletion === 'true') {
      notifySuccessGroupDelete()
      localStorage.setItem('notifGroupDeletion', 'false')
    }
  }, [])




  return (
    <>

      <div className='d-flex flex-column align-items-center'>

        <ArrowGoBack
          btnTxtModal={<ModalExample />}
          route={'/registergroup'} />

        <div className='d-flex col-12 col-lg-10 flex-wrap justify-content-around'>
          {(grupos.length > 0) ?
            grupos.map(grupo => (
              //removí el return reemplazando las llaves despues de la flecha con parentesis
              // <Link className='col-lg-5' href={'/grouplist/' + grupo._id} key={grupo._id} style={{ textDecoration: 'none' }} >
              <div className='col-9 col-lg-5' key={grupo._id}>
                <GroupCard

                  grade={grupo.grade}
                  group={grupo.name}
                  onEyeClick={() => handleEyeClick(grupo._id)}
                  onTrashClick={() => handleTrashClick(grupo._id)} 
                  teacherCounter={(grupo.teachers.length > 3) ? "3" : grupo.teachers.length}
                  studentCounter={grupo.students.length}
                  />
              </div>
            )) : <div className="d-flex justify-content-center pt-4" >
              <h6 className='col-lg-12 col-11 alert alert-primary' role="alert">
                Presiona el botón de Grupo+ para comenzar a crear grupos en tu escuela
              </h6>
            </div>
          }

        </div>
      </div>
      <ToastContainer />
    </>
  )
}
