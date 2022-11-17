import React from 'react'
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Layout from '../components/Layout'


export default function registerschool() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()

    const onSubmit = async data => {
        const token = localStorage.getItem('token')
        let result = await fetch('https://api.2know.today/school', {
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
        const schoolInfo = result.json()

        router.push("/registergroup")
    }



    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            router.replace("/")
            return
        }
    })

    return (
        <Layout>
            <div className='d-flex col-12 '>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex col-12 flex-column align-items-center justify-content-center'>
                    <h4>Registra los datos de tu escuela</h4>
                    <div className='col-10 d-flex flex-wrap justify-content-around'>
                        <div className='d-flex col-5 flex-column'>
                            <label>Nombre de la escuela</label>
                            <input name='nameSchool' {...register("school", { required: true, minLength: 3, maxLength: 45 })} placeholder='Escuela'></input>
                            {errors.school && errors.school.type === "required" && <span className='text-danger'>*Este campo es requerido.</span>}
                            {errors.grade && errors.grade.type === "min" && <span className='text-danger'>*El campo requiere más de 2 caracteres</span>}
                            {errors.grade && errors.grade.type === "max" && <span className='text-danger'>*El campo requiere menos de 46 caracteres</span>}
                        </div>


                        <div className='d-flex col-5 flex-column'>
                            <label>CCT</label>
                            <input name='cct' {...register("cct")} placeholder='CCT'></input>
                        </div>



                        <div className='d-flex col-5 flex-column'>
                            <label>Correo electrónico de la escuela</label>
                            <input type='email' name='emailSchool' {...register("emailSchool")} placeholder='Email'></input>
                        </div>


                        <div className='d-flex col-5 flex-column'>
                            <label>Teléfono</label>
                            <input type='number' name='phoneSchool' {...register("phoneSchool")} placeholder='Tel. escolar'></input>
                        </div>


                        <div className='d-flex col-5 flex-column'>
                            <label>Calle</label>
                            <input name='addressStreet' {...register("addressStreet")} placeholder='Calle'></input>
                        </div>


                        <div className='d-flex col-2 flex-column'>
                            <label>Número</label>
                            <input type='number' name='addressNumber' {...register("addressNumber")} placeholder='Número'></input>
                        </div>


                        <div className='d-flex col-2 flex-column'>
                            <label>Código postal</label>
                            <input type='number' name='postalCode' {...register("postalCode")} placeholder='Código Postal'></input>
                        </div>


                        <div className='d-flex col-5 flex-column'>
                            <label>Ciudad</label>
                            <input name='city' {...register("city")} placeholder='Ciudad'></input>
                        </div>


                        <div className='d-flex col-5 flex-column'>
                            <label>Región/Provincia/Estado</label>
                            <input name='state' {...register("state")} placeholder='Región/Provincia/Estado'></input>
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