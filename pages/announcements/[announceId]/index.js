import React, { useEffect, useState } from 'react'
import ArrowGoBack from '../../../components/ArrowGoBack/ArrowGoBack'
import Layout from '../../../components/Layout'
import PostAnnouncement from '../../../components/PostAnnouncement'
import { useRouter } from 'next/router';
import CommentBox from '../../../components/CommentBox';
import AllComments from '../../../components/AllComments';


export default function AnnouncementId() {
    const router = useRouter()
    const announceId = router.query.announceId
    const [announceInfo, setAnnounceInfo] = useState({})
    const [commentsInfo, setCommentsInfo] = useState([])

    //petición a la api para setear anuncios
    useEffect(() => {
        const token = localStorage.getItem("token");

        fetch(`https://api.toknow.online/announcement/${announceId}`, {
            mode: "cors",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
            .then(response => response.json())
            .then(data => {
                // console.log("la data", data)
                if (data.data) {
                    const announcement = data.data.announcementById
                    console.log("anuncio details", announcement)
                    setAnnounceInfo(announcement)
                    console.log('comenntssss', announcement.replies)
                    setCommentsInfo(announcement.replies)
                }
            })

    }, [router.query]);
    return (
        <Layout>
            <div>
                <div>
                    <ArrowGoBack
                        //agregar botón para ir al formulario de creación
                        btnTxtModal={<h4>Anuncio</h4>}
                        route={"/announcements"} />

                    {!!announceInfo.user &&
                        <PostAnnouncement
                            coverimg={"/img/kid&parent.jpeg"}
                            userName={announceInfo.user.name}
                            role={announceInfo.user.role}
                            date={"17 de noviembre"}
                            announcementTitle={announceInfo.announcementTitle}
                            textInfo={announceInfo.announcementText}
                            component={<CommentBox/>}
                            component2={commentsInfo.length > 0 &&
                                commentsInfo.map((comment, index) => (
                                    <AllComments key={index} comment={comment} />
                                ))}
                        />}
                </div>
            </div>
        </Layout>
    )
}
