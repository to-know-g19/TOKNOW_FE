import React, {useEffect} from 'react'
import Layout from '../../components/Layout'
import CardAnnouncement from '../../components/CardAnnouncement'
import ArrowGoBack from '../../components/ArrowGoBack/ArrowGoBack'
//toastify imports
import { ToastContainer } from 'react-toastify'
import useToastify from '../../components/useToastify'

export default function Announcements() {

    const notifySuccess = useToastify("success", "¡Anuncio creado con éxito!")
    useEffect(() => {
        const notifAnnounceCreation = localStorage.getItem('notifAnnounceCreation')

        if (notifAnnounceCreation === "true") {
            notifySuccess()
            localStorage.setItem('notifAnnounceCreation', 'false')
        }

    }, [])
    return (
        <Layout>
            <div>
                <ArrowGoBack
                    btnTxtModal={<h4>Tablero de anuncios</h4>}
                    route={""} />

                <CardAnnouncement
                    coverimg={"../img/Frame1.png"}
                    userName={"carlos Francisco Arteaga"}
                    role={"admin"}
                    date={"17 de noviembre"}
                    announcementTitle={"Suspensión de labores el día 20 de noviembre"} />

                <CardAnnouncement
                    coverimg={"../img/Frame1.png"}
                    userName={"carlos Francisco Arteaga"}
                    role={"admin"}
                    date={"17 de noviembre"}
                    announcementTitle={"Suspensión de labores el día 20 de noviembre"} />

                <CardAnnouncement
                    coverimg={"../img/Frame1.png"}
                    userName={"carlos Francisco Arteaga"}
                    role={"admin"}
                    date={"17 de noviembre"}
                    announcementTitle={"Suspensión de labores el día 20 de noviembre"} />
                    
                <CardAnnouncement
                    coverimg={"../img/Frame1.png"}
                    userName={"carlos Francisco Arteaga"}
                    role={"admin"}
                    date={"17 de noviembre"}
                    announcementTitle={"Suspensión de labores el día 20 de noviembre"} />

            </div>
            <ToastContainer/>
        </Layout>
    )
}
