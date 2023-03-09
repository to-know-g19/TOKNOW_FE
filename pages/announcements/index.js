import React from 'react'
import Layout from '../../components/Layout'
import CardAnnouncement from '../../components/CardAnnouncement'
export default function Announcements() {
    return (
        <Layout>
            <div>
                <div>announcements</div>
                <CardAnnouncement/>
                <CardAnnouncement/>
                <CardAnnouncement/>
            </div>
        </Layout>
    )
}
