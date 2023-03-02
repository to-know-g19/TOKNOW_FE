import React from 'react'
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Layout from '../components/Layout'


export default function Registerschool() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()

    const onSubmit = async data => {
        const token = localStorage.getItem('token')
        let result = await fetch('https://api.toknow.online/school', {
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
        const schoolInfo = await result.json()
        //log de success:true/false de parte del back
        console.log(schoolInfo)
        // agregar estado de success o fail de peticion
        if (schoolInfo.success === true) {
            router.push("/registergroup")
        } else {
            (window.alert("Hubo un problema al envíar la información"))
        }
        // router.push("/registergroup")
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
            <div className='fullscreen'>
            <div className='d-flex col-12 '>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex col-12 flex-column align-items-center justify-content-center'>
                    <h4 className='m-4'>Registra los datos de tu escuela</h4>
                    <div className='col-10 d-flex flex-column flex-lg-row flex-wrap justify-content-lg-around align-items-center'>
                        
                        <div className='d-flex col-10 col-lg-5 flex-column'>
                            <div className="form-floating mb-3">
                                <input
                                    name='nameSchool'
                                    className="form-control"
                                    placeholder='Escuela'
                                    {...register("nameSchool", { required: true, minLength: 3, maxLength: 45 })} ></input>
                                {errors.nameSchool && errors.nameSchool.type === "required" && <span className='text-danger'>*Este campo es requerido.</span>}
                                {errors.nameSchool && errors.nameSchool.type === "minLength" && <span className='text-danger'>*El campo requiere más de 2 caracteres</span>}
                                {errors.nameSchool && errors.nameSchool.type === "maxLength" && <span className='text-danger'>*El campo requiere menos de 46 caracteres</span>}
                                <label>Nombre de la escuela</label>
                            </div>
                        </div>


                        <div className='d-flex col-10 col-lg-5 flex-column'>
                            <div className="form-floating mb-3">
                                <input
                                    name='cct'
                                    className="form-control"
                                    placeholder='CCT'
                                    {...register("cct")} ></input>
                                <label>CCT</label>
                            </div>
                        </div>



                        <div className='d-flex col-10 col-lg-5 flex-column'>
                            <div className="form-floating mb-3">
                                <input
                                    type='email'
                                    name='emailSchool'
                                    className="form-control"
                                    placeholder='Email'
                                    {...register("emailSchool", { required: true })}></input>
                                {errors.emailSchool && errors.emailSchool.type === "required" && <span className='text-danger'>*Este campo es requerido.</span>}
                                <label>Correo electrónico de la escuela</label>
                            </div>
                        </div>


                        <div className='d-flex col-10 col-lg-5 flex-column'>
                            <div className="form-floating mb-3">
                                <input
                                    type='number'
                                    name='phoneSchool'
                                    className="form-control"
                                    placeholder='Tel. escolar'
                                    {...register("phoneSchool")} ></input>
                                <label>Teléfono</label>
                            </div>
                        </div>


                        <div className='d-flex col-10 col-lg-5 flex-column'>
                            <div className="form-floating mb-3">
                                <input
                                    name='addressStreet'
                                    className="form-control"
                                    placeholder='Calle'
                                    {...register("addressStreet")}></input>
                                <label>Calle</label>
                            </div>
                        </div>


                        <div className='d-flex col-4 col-lg-2 flex-column'>
                            <div className="form-floating mb-3">
                                <input
                                    type='number'
                                    name='addressNumber'
                                    className="form-control"
                                    placeholder='Número'
                                    {...register("addressNumber")} ></input>
                                <label>Número</label>
                            </div>
                        </div>


                        <div className='d-flex col-4 col-lg-2 flex-column'>
                            <div className="form-floating mb-3">
                                <input
                                    type='number'
                                    name='postalCode'
                                    className="form-control"
                                    placeholder='Código Postal'
                                    {...register("postalCode")} ></input>
                                <label>Código postal</label>
                            </div>
                        </div>


                        <div className='d-flex col-10 col-lg-5 flex-column'>
                            <div className="form-floating mb-3">
                                <input
                                    name='city'
                                    className="form-control"
                                    placeholder='Ciudad'
                                    {...register("city")} ></input>
                                <label>Ciudad</label>
                            </div>
                        </div>


                        <div className='d-flex col-10 col-lg-5 flex-column'>
                            <div className="form-floating mb-3">
                                <input
                                    name='state'
                                    className="form-control"
                                    placeholder='Región/Provincia/Estado'
                                    {...register("state")} ></input>
                                <label>Región/Provincia/Estado</label>
                            </div>
                        </div>


                    </div>
                    <div className='d-flex col-lg-4 justify-content-around'>
                        <button className='btn-form col-5' type='submit'>Registrar escuela</button>

                    </div>
                </form>
            </div>
            </div>
        </Layout>
    )
}