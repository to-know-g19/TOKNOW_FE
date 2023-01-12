import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import FormStudent from '../../../../components/formStudent2'
import Layout from '../../../../components/Layout'
import { useRouter } from 'next/router'

export default function addStudent() {

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
            <FormStudent />

        </Layout>
    )
}
