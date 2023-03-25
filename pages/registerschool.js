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
        console.log('school info resultado del registro de escuela', schoolInfo.data.newToken)
        localStorage.setItem('token', schoolInfo.data.newToken)
        //log de success:true/false de parte del back
        // agregar estado de success o fail de peticion
        if (schoolInfo.success === true) {
            router.push("/announcements")
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
                                    {...register("cct", { required: true })} ></input>
                                {errors.cct && errors.cct.type === "required" && <span className='text-danger'>*Este campo es requerido.</span>}
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
                                    {...register("phoneSchool", {required: true})} ></input>
                                {errors.phoneSchool && errors.phoneSchool.type === "required" && <span className='text-danger'>*Este campo es requerido.</span>}
                                <label>Teléfono</label>
                            </div>
                        </div>


                        <div className='d-flex col-10 col-lg-5 flex-column'>
                            <div className="form-floating mb-3">
                                <input
                                    type='text'
                                    name='addressStreet'
                                    className="form-control"
                                    placeholder='Calle'
                                    {...register("addressStreet", {required: true})}></input>
                                {errors.addressStreet && errors.addressStreet.type === "required" && <span className='text-danger'>*Este campo es requerido</span>}
                                <label>Calle</label>
                            </div>
                        </div>

                        <div className='d-flex col-10 col-lg-5 justify-content-between  '>
                            <div className='d-flex col-5 col-lg-5 flex-column'>
                                <div className="form-floating mb-3">
                                    <input
                                        type='number'
                                        name='addressNumber'
                                        className="form-control"
                                        placeholder='Número'
                                        {...register("addressNumber", { required: true})} ></input>
                                    {errors.addressNumber && errors.addressNumber.type === 'required' && <span className='text-danger'>*Este campo es requerido</span>}
                                    <label>Número</label>
                                </div>
                            </div>


                            <div className='d-flex col-6 col-lg-6 flex-column'>
                                <div className="form-floating mb-3">
                                    <input
                                        type='number'
                                        name='postalCode'
                                        className="form-control"
                                        placeholder='Código Postal'
                                        {...register("postalCode", { required: true})} ></input>
                                    {errors.postalCode && errors.postalCode.type === "required" && <span className='text-danger'>*Este campo es requerido</span>}
                                    <label>Código postal</label>
                                </div>
                            </div>
                        </div>


                        <div className='d-flex col-10 col-lg-5 flex-column'>
                            <div className="form-floating mb-3">
                                <input
                                    name='city'
                                    className="form-control"
                                    placeholder='Ciudad'
                                    {...register("city", { required: true})} ></input>
                                {errors.city && errors.city.type === "required" && <span className='text-danger'>*Este campo es requerido</span>}
                                <label>Ciudad</label>
                            </div>
                        </div>


                        <div className='d-flex col-10 col-lg-5 flex-column'>
                            <div className="form-floating mb-3">
                                <input
                                    name='state'
                                    className="form-control"
                                    placeholder='Región/Provincia/Estado'
                                    {...register("state", { required: true})} ></input>
                                {errors.state && errors.state.type === "required" && <span className='text-danger'>*Este campo es requerido</span>}
                                <label>Región/Provincia/Estado</label>
                            </div>
                        </div>


                    </div>
                    <div className='d-flex justify-content-around'>
                        <button className='btn-form col-12' type='submit'>Registrar escuela</button>

                    </div>
                </form>
            </div>

        </Layout>
    )
}