import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

export default function DeleteRequest() {
  const [grupos, setGrupos] = useState([]);
  const router = useRouter()

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
        console.log('response en delete group', response)
        if (response.ok === true) {
          window.location.reload();
        }
      })
  };
  return(
    <div>hola
        {grupos.forEach(grupo=> (
            <button onClick={handleTrashClick(grupo._id)}>borrar </button>


        ))}
        <button>non wei</button>

    </div>
  )
}