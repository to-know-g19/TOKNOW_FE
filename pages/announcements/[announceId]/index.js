import React, { useEffect, useState } from 'react'
import ArrowGoBack from '../../../components/ArrowGoBack/ArrowGoBack'
import Layout from '../../../components/Layout'
import PostAnnouncement from '../../../components/PostAnnouncement'
import { useRouter } from 'next/router';
import CommentBox from '../../../components/CommentBox';
import AllComments from '../../../components/AllComments';
import { ToastContainer } from 'react-toastify';
import useToastify from '../../../components/useToastify';
import { format } from 'date-fns';


export default function AnnouncementId() {
    const router = useRouter()
    const announceId = router.query.announceId
    const [announceInfo, setAnnounceInfo] = useState({})
    const [commentsInfo, setCommentsInfo] = useState([])
    const [posterInfo, setPosterInfo] = useState((""))
    const notifySuccess = useToastify("success", "Comentario publicado")

    //petición a la api para setear anuncios
    useEffect(() => {
        const token = localStorage.getItem("token")

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
                    // console.log("soy info dentro del anuncio", announcement)
                    setAnnounceInfo(announcement)
                    if(announcement.user){
                        setPosterInfo(announcement.user.name)
                    } else {
                        if(announcement.teacher){
                            setPosterInfo(`${announcement.teacher.name} ${announcement.teacher.lastNameA} ${announcement.teacher.lastNameB}`)
                        } else {
                            if(announcement.parent){
                                setPosterInfo(`${announcement.parent.name} ${announcement.parent.lastNameA} ${announcement.parent.lastNameB}`)
                            }
                        }
                    }
                    
                    setCommentsInfo(announcement.replies.reverse())
                }
            })

    }, [router.query])

    useEffect(()=> {
        const notifCommentCreation = localStorage.getItem("notifCommentCreation")
        if (notifCommentCreation === "true") {
            notifySuccess() 
            localStorage.setItem('notifCommentCreation', 'false')
        }
    })

    return (
        <Layout>
            <div>
                <div>
                    <ArrowGoBack
                        //agregar botón para ir al formulario de creación
                        btnTxtModal={<h4>Anuncio</h4>}
                        route={"/announcements"} />

                    {(!!posterInfo) &&
                        <PostAnnouncement
                            coverimg={"/img/kid&parent.jpeg"}
                            userName={posterInfo}
                            role={(!!announceInfo.user) ? "Administrador" : "Profesor"}
                            date={format(new Date(announceInfo.createdAt), 'dd/MM/yyyy')}
                            announcementTitle={announceInfo.announcementTitle}
                            textInfo={announceInfo.announcementText}
                            component={<CommentBox/>}
                            component2={commentsInfo.length > 0 &&
                                commentsInfo.map(comment => (
                                    <AllComments 
                                    key={comment.id} 
                                    // comment={comment}
                                    userName={comment.user}
                                    // role
                                    textInfo={comment.message} 
                                     />
                                ))}
                        />}
                </div>
            </div>
            <ToastContainer />
        </Layout>
    )
}
