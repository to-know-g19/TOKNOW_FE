import React, {useEffect, useState} from 'react'
import { FaUserCircle } from 'react-icons/fa';
// import { useRouter } from 'next/router';

export default function AllComments(props) {

    // const router = useRouter()
    // const announceId = router.query.announceId
    // const [commentInfo, setCommentInfo] = useState({})

    // //petición a la api
    // useEffect(() => {
    //     const token = localStorage.getItem("token");

    //     fetch(`https://api.toknow.online/announcement/${announceId}`, {
    //         mode: "cors",
    //         headers: {
    //             "Content-type": "application/json",
    //             "Authorization": `Bearer ${token}`
    //         },
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             if (data.data) {
    //                 console.log("info para comentarios", data.data.announcementById.replies)
    //                 const comments = data.data.announcementById.replies
    //                 setCommentInfo(comments)
    //             }
    //         })

    // }, [router.query]);


    return (
        <div>
            <div className='d-flex flex-column m-4 m-lg-5 '>

                <div className='post-announce d-flex col-11 col-lg-7 bg-light'>
                    <div className='d-flex flex-column flex-lg-column col-12 col-lg-12'>

                        <div className='d-flex p-2'>
                            <div className='p-2 pt-lg-4 d-flex justify-content-center align-items-center '>
                                <FaUserCircle className='post-announce__user-img' />
                            </div>

                            <div className='d-flex flex-column '>
                                <div className='pt-3'>
                                    {props.userName}
                                </div>
                                <div>
                                    {props.date}
                                </div>
                            </div>

                            <div className='d-flex pt-3 p-2 p-lg-3 '>
                                {props.role}
                            </div>
                        </div>

                        <p className='p-2'>
                            {props.textInfo}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
