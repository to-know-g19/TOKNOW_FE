import React, { useEffect, useState } from 'react'
import GroupCircle from '../GroupCircle/GroupCircle'

export default function GroupsDisplay() {

    const [grupos, setGrupos] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userData = JSON.parse(atob(token.split(".")[1]));
        const userId = userData.id;
        
    
        fetch(`https://api.toknow.online/school`, {
            mode: "cors",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                
                const schools = data.data.schools;
                
                schools.forEach(school => {
                    if (school.user !== null && school.user._id === userId) {
                        setGrupos(school.groups);
                        
                    }
                });
            });
    }, []);
    

    return (
        <>

                <div className='group-Wrapper d-flex justify-content-center flex-wrap'>
                    <div className='groups-container d-flex col-lg-6 flex-wrap justify-content-center'>
                        {grupos.map(grupo => {
                            return <GroupCircle key={grupo._id} grade={grupo.grade} group={grupo.name} />
                        })}


                    </div>
                </div>
        </>
    )
}