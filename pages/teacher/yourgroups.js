import React, { useEffect, useState } from 'react'
import GroupCard from '../../components/GroupCard/GroupCard';
import Layout from '../../components/Layout';
import ArrowGoBack from '../../components/ArrowGoBack/ArrowGoBack';
import { useRouter } from 'next/router';

export default function Yourgroups() {
  const [grupos, setGrupos] = useState([]);
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = JSON.parse(atob(token.split(".")[1]));
    const userId = userData.id;
    // console.log('user id', userId)

    fetch(`https://api.toknow.online/teacher/${userId}`, {
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.data) {
          const teacherGroups = data.data.teacherById.groups
          console.log("this is it", teacherGroups)
          setGrupos(teacherGroups)
        }
      }
      );
  }, [router.query]);


  const handleEyeClick = (id) => {
    router.push('/grouplist/' + id)
  };


  return (
    <>
      <Layout>
        <div className='d-flex flex-column align-items-center'>

          <ArrowGoBack
            btnTxtModal={<h4>TUS GRUPOS</h4>}
            route={''} />

          <div className='d-flex col-12 col-lg-10 flex-wrap justify-content-around'>
            <div className='col-9 col-lg-5'>
              {grupos.map(grupo => (
                //removí el return reemplazando las llaves despues de la flecha con parentesis
                // <Link className='col-lg-5' href={'/grouplist/' + grupo._id} key={grupo._id} style={{ textDecoration: 'none' }} >
                <GroupCard
                  key={grupo._id}
                  grade={grupo.grade}
                  group={grupo.name}
                  onEyeClick={() => handleEyeClick(grupo._id)}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>

  )
}
