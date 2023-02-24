import React, { useEffect, useState } from 'react'
import GroupCard from '../GroupCard/GroupCard'
import ModalExample from '../GroupModal/GroupModal'
import ArrowGoBack from '../ArrowGoBack/ArrowGoBack';
import { useRouter } from 'next/router';

export default function GroupCardDisplay() {
  const [grupos, setGrupos] = useState([]);
  const router = useRouter()

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
        // console.log("soy data", data)
        const schools = data.data.schools
        // console.log("soy schools", schools)
        schools.forEach(school => {
          if (school.user._id === userId) {
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
  };




  return (
    <>

      <div className='d-flex flex-column align-items-center'>

        <div className='d-flex col-lg-12 justify-content-around'>

          <ArrowGoBack
            btnTxtModal={<ModalExample />}
            route={'/registergroup'} />

        </div>


        <div className='d-flex col-lg-10 flex-wrap justify-content-around'>
          {grupos.map(grupo => (
            //removí el return reemplazando las llaves despues de la flecha con parentesis
            // <Link className='col-lg-5' href={'/grouplist/' + grupo._id} key={grupo._id} style={{ textDecoration: 'none' }} >
            <div className='col-lg-5' key={grupo._id}>
              <GroupCard

                grade={grupo.grade}
                group={grupo.name}
                onEyeClick={() => handleEyeClick(grupo._id)}
                onTrashClick={() => handleTrashClick(grupo._id)} />
            </div>
          ))}

        </div>
      </div>
    </>
  )
}
