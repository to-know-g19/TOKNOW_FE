import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ArrowGoBack from '../../../components/ArrowGoBack/ArrowGoBack';

import TeacherRectangle from '../../../components/teacherRectangle/TeacherRectangle';

export default function index() {
    const [teachers, setTeachers] = useState([]);

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
                        const groups = school.groups
                        console.log("grupos :", groups)

                        groups.forEach(group => {
                            if (group.school === school._id)
                                setTeachers(group.teachers)
                            console.log('los teachers', group.teachers)
                            //trabajar en modales de eliminar si esto no jala
                        })
                    }
                });
            });
    }, []);
    // console.log('hola teach', teachers)
    return (
        <>
    
          <div className='d-flex flex-column align-items-center'>
    
            <div className='d-flex col-lg-12 justify-content-around'>
    
              <ArrowGoBack
                
                route={'/registergroup'} />
    
            </div>
    
    
            <div className='d-flex col-lg-10 flex-wrap justify-content-around'>
              {teachers.map(teacher => (
                //removí el return reemplazando las llaves despues de la flecha con parentesis
                // <Link className='col-lg-5' href={'/grouplist/' + teacher._id} key={teacher._id} style={{ textDecoration: 'none' }} >
                <div className='col-lg-5'>
                  <TeacherRectangle
                    key={teacher._id}
                    grade={teacher.grade}
                    group={teacher.name}
                    onEyeClick={() => handleEyeClick(teacher._id)}
                    onTrashClick={() => handleTrashClick(teacher._id)} />
                </div>
              ))}
    
            </div>
          </div>
        </>
      )
    }
