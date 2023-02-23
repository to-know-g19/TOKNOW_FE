import React, { useEffect } from 'react'
// import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.css'
// import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import FormGroup from '../components/FormGroup'
import GroupsDisplay from '../components/GroupsDisplay/GroupsDisplay'
import { useRouter } from 'next/router'


export default function registergroup() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            router.replace("/")
            return
        }
    })
    return (

        <Layout>
            <div className='fullscreen'>
                <GroupsDisplay />
                <FormGroup />
            </div>
        </Layout>


    )
}
