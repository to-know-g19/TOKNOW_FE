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

  useEffect(() => {
    const token = localStorage.getItem("token");
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
            // console.log("Grupos: ", school.groups)
          }
        });
      });
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
          window.location.reload();
        }
      })
  }

  useEffect(() => {
    const notifGroupCreation = localStorage.getItem('notifGroupCreation')
    if (notifGroupCreation === 'true') {
      notifySuccess()
      localStorage.setItem('notifGroupCreation', 'false')
    }
  }, [])




  return (
    <>

      <div className='d-flex flex-column align-items-center'>

        <ArrowGoBack
          btnTxtModal={<ModalExample />}
          route={'/registergroup'} />

        <div className='d-flex col-lg-10 flex-wrap justify-content-around'>
          {grupos.map(grupo => (
            //removí el return reemplazando las llaves despues de la flecha con parentesis
            // <Link className='col-lg-5' href={'/grouplist/' + grupo._id} key={grupo._id} style={{ textDecoration: 'none' }} >
            <div className='col-9 col-lg-5' key={grupo._id}>
              <GroupCard

                grade={grupo.grade}
                group={grupo.name}
                onEyeClick={() => handleEyeClick(grupo._id)}
                onTrashClick={() => handleTrashClick(grupo._id)} />
            </div>
          ))}

        </div>
      </div>
      <ToastContainer />
    </>
  )
}
