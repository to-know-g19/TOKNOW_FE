import React from 'react'
import { useForm } from "react-hook-form"
import { useRouter } from 'next/router'
import ArrowGoBack from '../ArrowGoBack/ArrowGoBack'
//toastify imports
import { ToastContainer } from 'react-toastify'
import useToastify from '../useToastify'

export default function FormAnnouncement() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()

    const notifyError = useToastify("error", "Hubo un problema al envíar la información")


    const onSubmit = async data => {
        const token = localStorage.getItem('token')

        let result = await fetch('https://api.toknow.online/announcement', {
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
        const announcementResult = await result.json()

        if (announcementResult.success === true) {
            router.push(`/announcements`)
        } else {
            notifyError()
        }

    }


    return (

        <div className='d-flex flex-column align-items-center col-12 justify-content-center '>
            <ArrowGoBack
                btnTxtModal={<h4>Crear nuevo anuncio</h4>}
                route={`/announcements`} />
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex mt-3 col-lg-12 flex-column align-items-center justify-content-center'>
                <div className='col-10 bg-light d-flex flex-wrap justify-content-around'>

                    <div className='d-flex col-12 col-lg-5 flex-column justify-content-center align-items-center'>


                        <div className='d-flex col-10 col-lg-12 flex-column'>
                            <div className="form-floating mb-3">
                                <input
                                    name='announcementTitle'
                                    className="form-control"
                                    placeholder='Titulo'
                                    {...register("announcementTitle", { required: true, minLength: 2, maxLength: 20 })} ></input>
                                {errors.announcementTitle && errors.announcementTitle.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                                {errors.announcementTitle && errors.announcementTitle.type === "minLength" && <span className='text-danger'>*El campo requiere al menos 2 caracteres</span>}
                                {errors.announcementTitle && errors.announcementTitle.type === "maxLength" && <span className='text-danger'>*El campo requiere menos de 21 caracteres</span>}
                                <label>Titulo</label>
                            </div>
                        </div>

                        <div className='d-flex col-10 col-lg-12 flex-column'>
                            <div className="form-floating mb-3">
                                <input
                                    name='announcementText'
                                    className="form-control"
                                    placeholder='Información'
                                    {...register("announcementText", { required: true, minLength: 2, maxLength: 20 })} ></input>
                                {errors.announcementText && errors.announcementText.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                                {errors.announcementText && errors.announcementText.type === "minLength" && <span className='text-danger'>*El campo requiere al menos 2 caracteres</span>}
                                {errors.announcementText && errors.announcementText.type === "maxLength" && <span className='text-danger'>*El campo requiere menos de 21 caracteres</span>}
                                <label>Información sobre tu anuncia</label>
                            </div>
                        </div>
                    </div>



                    <div className='d-none d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <select
                                name='role'
                                className="form-control form-select"
                                {...register("role", { required: true })} >
                                <option value="parent">Madre/Padre/Tutor</option>
                            </select>
                            {errors.grade && errors.grade.type === "required" && <span className='text-danger'>*Selecciona un rol</span>}
                            <label>Rol</label>
                        </div>
                    </div>

                    {/* campo escondido con d-none pero necesario para tomar id de grupo y enviarlo
                    en formulario del teacher */}
                    {/* <div className='d-none d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <select
                                name=''
                                className="form-control form-select"
                                {...register("")} >
                                <option value={""}></option>

                            </select>
                            {errors.students && errors.students.type === "required" && <span className='text-danger'>*Selecciona un grado</span>}
                            <label>aqui va el student ID</label>
                        </div>
                    </div> */}

                </div>

                <div className='d-flex col-lg-4 justify-content-around'>
                    <button className='btn-form' type='submit'> Publicar </button>
                </div>

            </form>
            <ToastContainer />
        </div>
    )
}
