import React, { useEffect, useState } from 'react'
import GroupCard from '../GroupCard/GroupCard'
import Link from 'next/link'
import ModalExample from '../GroupModal/GroupModal'
import { BsArrowLeftCircle } from 'react-icons/bs';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { HiOutlineArrowCircleLeft } from 'react-icons/hi';
import ArrowGoBack from '../ArrowGoBack/ArrowGoBack';

export default function GroupCardDisplay() {
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
      const token = localStorage.getItem("token");
      const userData = JSON.parse(atob(token.split(".")[1]));
      const userId = userData.id;
      console.log('user id', userId)
  
      fetch(`https://api.toknow.online/school`, {
          mode: "cors",
          headers: {
              "Content-type": "application/json",
              "Authorization": `Bearer ${token}`
          }
      })
          .then(response => response.json())
          .then(data => {
              console.log("soy data", data);
              const schools = data.data.schools;
              console.log("soy schools", schools);
              schools.forEach(school => {
                  if (school.user._id === userId) {
                      setGrupos(school.groups);
                      console.log("Grupos: ", school.groups);
                  }
              });
          });
  }, []);


  return (
    <>

      <div className='d-flex flex-column align-items-center'>

        <div className='d-flex col-lg-12 justify-content-around'>

          <ArrowGoBack
          btnTxtModal={<ModalExample/>}
          route={'/registergroup'}/>

        </div>


        <div className='d-flex col-lg-10 flex-wrap justify-content-around'>
          {grupos.map(grupo => (
            //removí el return reemplazando las llaves despues de la flecha con parentesis
            <Link className='col-lg-5' href={'/grouplist/' + grupo._id} key={grupo._id} style={{ textDecoration: 'none' }} >
              <GroupCard grade={grupo.grade} group={grupo.name} />
            </Link>
          ))}

        </div>
      </div>
    </>
  )
}
