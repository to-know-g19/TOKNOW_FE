import React from 'react'
import Layout from '../../components/Layout'
import CardAnnouncement from '../../components/CardAnnouncement'
import ArrowGoBack from '../../components/ArrowGoBack/ArrowGoBack'
export default function Announcements() {
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
        </Layout>
    )
}
