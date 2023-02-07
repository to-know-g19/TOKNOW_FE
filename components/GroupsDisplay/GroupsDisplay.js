import React, { useEffect, useState } from 'react'
import GroupCircle from '../GroupCircle/GroupCircle'

export default function GroupsDisplay() {

    const [grupos, setGrupos] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
    
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

            });
    }, []);
    

    return (
        <>

                <div className='group-Wrapper d-flex'>
                    <div className='groups-container d-flex justify-content-center'>
                        {grupos.map(grupo => {
                            return <GroupCircle key={grupo._id} grade={grupo.grade} group={grupo.name} />
                        })}


                    </div>
                </div>
        </>
    )
}