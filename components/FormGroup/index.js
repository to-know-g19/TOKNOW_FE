import React from 'react'
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'


export default function FormGroup() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()

    const onSubmit = async data => {
        const token = localStorage.getItem('token')
        let result = await fetch('https://api.2know.today/group', {
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
        const groupInfo = result.json()

        // router.push("/")
    }

    return (
        <div className='d-flex col-12 '>
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex col-12 flex-column align-items-center'>

                <div className='col-6 d-flex  justify-content-around'>

                    <div className='d-flex col-3  flex-column'>
                        <label>Grado</label>
                        <input name='grade' {...register("grade")} placeholder='Ej. 1'></input>
                    </div>

                    <div className='d-flex col-3 flex-column'>
                        <label>Nombre</label>
                        <input name='name' {...register("name")} placeholder='Ej. A'></input>
                    </div>

                    <div className='d-flex col-3 flex-column'>
                        <label>Año</label>
                        <input name='year' {...register("year")} placeholder='Ej. 2002-2003'></input>
                    </div>
                </div>
                <div className='d-flex col-lg-2'>
                    <input className='col-12' type='submit'></input>
                </div>
            </form>
        </div>
    )
}

