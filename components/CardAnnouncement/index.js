import React, {useEffect, useState} from 'react'
import { FaUserCircle } from 'react-icons/fa';

export default function Index(props) {
    const [userName, setUserName] = useState("")
    useEffect(() => {
        const token = localStorage.getItem("token")

        let url = `https://api.toknow.online/user/${props.userId}`
        if (props.role === "Profesor") {
            url = `https://api.toknow.online/teacher/${props.userId}`
        }

        fetch(url, {
            mode: "cors",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
            .then(response => response.json())
            .then(data => {
                data.data
                // console.log("SOY LA DATA:", data)
                const userData = data.data.userById || data.data.teacherById
                // console.log("rol:", props.role, "data:", userData)
                let name = userData.name
                if (userData.lastNameA) {
                    name = `${name} ${userData.lastNameA}`
                }
                if (userData.lastNameB) {
                    name = `${name} ${userData.lastNameB}`
                }
                setUserName(name)

            })
    },)
    return (
        <div>
            <div className='d-flex flex-column mb-4 mt-3 align-items-center justify-content-center'>

                <div className='card-announce d-flex col-11 col-lg-7 bg-light'>
                    <div className='d-flex flex-column flex-lg-column col-12 col-lg-12'>
                        {/* <div className='card-announce__img-wrapper'>
                            <img
                                className='card-announce__img-wrapper__cover-img bg-white'
                                src={props.coverimg}
                            />
                        </div> */}
                        <div className='d-flex'>
                            <div className='p-2 pt-lg-4 d-flex justify-content-center align-items-center '>
                            <img className='card-announce__user-img'
                                    src={`https://api.dicebear.com/5.x/fun-emoji/svg?seed=${props.userId}`}
                                    alt="avatar"
                                />
                                
                            </div>

                            <div className='d-flex flex-column '>
                                <div className='pt-3'>
                                    {userName}
                                </div>
                                <div>
                                    {props.date}
                                </div>
                            </div>

                            <div className='d-flex pt-3 p-2 p-lg-3 '>
                                {props.role}
                            </div>
                        </div>

                        <h4 className='p-3 p-lg-4'>
                            {props.announcementTitle}
                        </h4>
                    </div>
                </div>

            </div>
        </div>
    )
}
