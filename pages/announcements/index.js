import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import CardAnnouncement from '../../components/CardAnnouncement'
import ArrowGoBack from '../../components/ArrowGoBack/ArrowGoBack'
//toastify imports
import { ToastContainer } from 'react-toastify'
import useToastify from '../../components/useToastify'

export default function Announcements() {
    
    const [announceInfo, setAnnounceInfo] = useState([])
    const notifySuccess = useToastify("success", "¡Anuncio creado con éxito!")
    
    useEffect(() => {
        const notifAnnounceCreation = localStorage.getItem('notifAnnounceCreation')

        if (notifAnnounceCreation === "true") {
            notifySuccess()
            localStorage.setItem('notifAnnounceCreation', 'false')
        }

    }, [])

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {

            fetch(`https://api.toknow.online/announcement`, {
                mode: "cors",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    const allAnnouncements = data.data.announcement
                    console.log("anuncios", allAnnouncements)
                    setAnnounceInfo(allAnnouncements)
                })
        }
    }, []);
    return (
        <Layout>
            <div>
                <ArrowGoBack
                    btnTxtModal={<h4>Tablero de anuncios</h4>}
                    route={""} />

                {announceInfo.map(announce => {
                    return (
                        <CardAnnouncement
                            key={announce.key}
                            coverimg={"/img/kid&parent.jpeg"}
                            userName={announce.user.name}
                            role={announce.user.role}
                            date={"--fecha--"}
                            announcementTitle={announce.announcementTitle} />)
                })}


            </div>
            <ToastContainer />
        </Layout>
    )
}
