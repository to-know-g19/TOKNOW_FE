/* default */
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

/* package */
import { useForm } from "react-hook-form"

/* components */
import Layout from '../components/Layout'
import FormStudent from '../components/FormStudent'
import FormParent from '../components/FormParent'
import SearchParent from '../components/SearchParent'

/* styles */
import 'bootstrap/dist/css/bootstrap.css'


/**
 * RegisterStudent
 * @param
 * @param
 * @param
 * @returns Register
 */

export default function RegisterStudent( ) {

    const [haveParent, setHaveParent] = useState(2)
    const handleChecked = e => {
        setHaveParent(e.target.value)
    }
    console.log('haveParent', haveParent)

    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()

    const onSubmit = async data => {
        const token = localStorage.getItem('token')
        let result = await fetch('https://api.2know.today/user', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(
                data
            )
        })
        const studentInfo = result.json()
        console.log(studentInfo)

        router.push("/registerstudent")
    }

    
    return (
        <Layout>
            <div>
                <div><a href="">agregar usuario</a></div>
                <div><a href="">return</a></div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="row g-3 needs-validation" >
         
            <FormStudent onChange={ haveParent } />
            { haveParent == true ? <SearchParent/> : <FormParent/>}
            
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Guardar</button>
            </div>
        </form>
        </Layout >
    )
}


