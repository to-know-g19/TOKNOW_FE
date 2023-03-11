import React from 'react'
import Layout from '../../components/Layout'
import CardAnnouncement from '../../components/CardAnnouncement'
export default function Announcements() {
    return (
        <Layout>
            <div>
                <div>announcements</div>
                <CardAnnouncement
                userName={"carlos Francisco Arteaga"}
                role={"admin"}
                date={"17 de noviembre"}
                announcementTitle={"Suspensión de labores el día 20 de noviembre"}/>

            </div>
        </Layout>
    )
}
