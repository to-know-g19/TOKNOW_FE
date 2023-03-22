import React, { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
// import { useRouter } from 'next/router';

export default function AllComments(props) {
    const [userName, setUserName] = useState("")
    useEffect(() => {
        const token = localStorage.getItem("token")

        let url = `https://api.toknow.online/user/${props.userId}`
        if (props.role === "Profesor") {
            url = `https://api.toknow.online/teacher/${props.userId}`
        } else if (props.role === "Tutor") {
            url = `https://api.toknow.online/parent/${props.userId}`
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
                const userData = data.data.parentById || data.data.userById || data.data.teacherById
                console.log("rol:", props.role, "data:", userData)
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
            <div className='d-flex flex-column justify-content-center  align-items-center mb-4 w-100 text-break'>

                <div className='post-announce d-flex col-11 col-lg-11 bg-light'>
                    <div className='d-flex flex-column flex-lg-column col-12 col-lg-12'>

                        <div className='d-flex '>
                            {/* removí p-2 */}
                            <div className='p-2 pt-lg-2 d-flex justify-content-center align-items-center '>
                                {/* <FaUserCircle className='post-announce__user-img' /> */}
                                <img width={25} height={25}
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
                        <div className='d-flex justify-content-center'>
                            <p className='col-11 '>
                                {/* removí padding */}
                                {props.textInfo}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
