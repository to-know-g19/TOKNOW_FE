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

    fetch(`https://api.toknow.online/group`, {
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('data-t/yougroups', data)
        const userGroups = [];
        if (data.data) {
          const allGroups = data.data.groups
          console.log('allGroups-t/yourgroups', allGroups)
          allGroups.forEach(group => {
            group.teachers.forEach(teacher => {
              if (teacher._id === userId) {
                userGroups.push(group)
                console.log('grupo t/yourgroups', group)
              }
            })
          })
          setGrupos(userGroups)

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

          <div className='d-flex col-lg-12 justify-content-around'>
            <ArrowGoBack
              btnTxtModal={<h4>TUS GRUPOS</h4>}
              route={''} />
          </div>

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
