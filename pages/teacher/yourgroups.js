import React, { useEffect, useState } from 'react'
import GroupCard from '../../components/GroupCard/GroupCard';
import ModalExample from '../../components/GroupModal/GroupModal';
import ArrowGoBack from '../../components/ArrowGoBack/ArrowGoBack';
import { useRouter } from 'next/router';

export default function yourgroups() {
  const [grupos, setGrupos] = useState([]);
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = JSON.parse(atob(token.split(".")[1]));
    const userId = userData.id;
    const userRole = userData.role;
    console.log('user id', userId)
    console.log('user role', userRole)

    fetch(`https://api.toknow.online/group`, {
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.data) {
          setGrupos(data.data)
          console.log(data.data)
        }
      }
      );
  }, [router.query]);

  // const handleEyeClick = (id) => {
  //   router.push('/grouplist/' + id)
  // };

  // const handleTrashClick = (id) => {
  //   const token = localStorage.getItem("token");
  //   fetch(`https://api.toknow.online/group/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-type": "application/json",
  //       "Authorization": `Bearer ${token}`
  //     }
  //   })
  //     .then(response => {
  //       console.log('response en delete group', response)
  //       if (response.ok === true) {
  //         window.location.reload();
  //       }
  //     })
  // };




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
            <div className='col-lg-5'>
              <GroupCard
                key={grupo._id}
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
