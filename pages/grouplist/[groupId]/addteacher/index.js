import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import FormTeacher from '../../../../components/FormTeacher/FormTeacher'
import Layout from '../../../../components/Layout'
import { useRouter } from 'next/router'

export default function Registerteacher() {

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
            <FormTeacher />
            </div>
        </Layout>
    )
}
