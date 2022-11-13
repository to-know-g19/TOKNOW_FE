/* default */
import React from 'react'
import { useForm } from "react-hook-form"
import { useRouter } from 'next/router'

/* components */
import Layout from '../components/Layout'

/* styles */
import 'bootstrap/dist/css/bootstrap.css'

/**
 * RegisterStudent
 * @param
 * @param
 * @param
 * @returns Register
 */

export default function RegisterStudent() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()

    const onSubmit = async data => {
        const token = localStorage.getItem('token')
        let result = await fetch('', {
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

        router.push("/registerstudent")
    }



    return (
        <Layout>
            <div className='d-flex col-12 '>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex col-12 flex-column align-items-center justify-content-center'>
                    <h4>Registra los datos de tu escuela</h4>
                    <div className='col-12 d-flex flex-wrap justify-content-center'>
                        <div className='col-6 d-flex flex-column'>
                            <label>Nombre de la escuela</label>
                            <input name='nameSchool' {...register("school")} placeholder='Escuela'></input>
                        </div>

                        <div className='col-6 d-flex flex-row'>
                            <div className='d-flex col-12 flex-column'>
                                <label>CCT</label>
                                <input name='cct' {...register("cct")} placeholder='CCT'></input>
                            </div>
                        </div>

                        <div className='col-6 d-flex flex-row'>
                            <div className='d-flex col-12 flex-column'>
                                <label>Correo electrónico de la escuela</label>
                                <input type='email' name='emailSchool' {...register("emailSchool")} placeholder='Email'></input>

                            </div>
                        </div>
                        <div className='col-6 d-flex flex-row'>
                            <div className='d-flex col-12 flex-column'>
                                <label>Teléfono</label>
                                <input type='number' name='phoneSchool' {...register("phoneSchool")} placeholder='Tel. escolar'></input>
                            </div>
                        </div>
                        <div className='col-6 d-flex flex-row'>
                            <div className='d-flex col-12 flex-column'>
                                <label>Calle</label>
                                <input name='addressStreet' {...register("addressStreet")} placeholder='Calle'></input>
                            </div>
                        </div>
                        <div className='col-3 d-flex flex-row'>
                            <div className='d-flex col-12 flex-column'>
                                <label>Número</label>
                                <input type='number' name='addressNumber' {...register("addressNumber")} placeholder='Número'></input>
                            </div>
                        </div>
                        <div className='col-3 d-flex flex-row'>
                            <div className='d-flex col-12 flex-column'>
                                <label>Código postal</label>
                                <input type='number' name='postalCode' {...register("postalCode")} placeholder='Código Postal'></input>
                            </div>
                        </div>
                        <div className='col-6 d-flex flex-row'>
                            <div className='d-flex col-12 flex-column'>
                                <label>Ciudad</label>
                                <input name='city' {...register("city")} placeholder='Ciudad'></input>
                            </div>
                        </div>
                        <div className='col-6 d-flex flex-row'>
                            <div className='d-flex col-12 flex-column'>
                                <label>Región/Provincia/Estado</label>
                                <input name='state' {...register("state")} placeholder='Región/Provincia/Estado'></input>
                            </div>
                        </div>

                    </div>
                    <div className='d-flex col-lg-4 justify-content-around'>
                        <input className='col-12' type='submit'></input>
                    </div>
                </form>
            </div>
        </Layout>
    )
}