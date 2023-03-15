import React from 'react'
import { useForm } from "react-hook-form"
import { useRouter } from 'next/router'
import ArrowGoBack from '../ArrowGoBack/ArrowGoBack'
import Layout from '../Layout/index'
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
        // console.log("soy res de anuncios", announcementResult)
        // lógica para mandar notificación a /announcements donde se revisa el item
        if (announcementResult.success === true) {
            localStorage.setItem('notifAnnounceCreation', 'true')
            router.push(`/announcements`)
        } else {
            notifyError()
        }

    }


    return (
        <>
            <Layout>
                <div className='d-flex flex-column align-items-center col-12 justify-content-center '>
                    <ArrowGoBack
                        btnTxtModal={<h4>Crear nuevo anuncio</h4>}
                        route={`/announcements`} />
                    <form onSubmit={handleSubmit(onSubmit)} className='d-flex mt-3  col-11 col-lg-10 flex-column'>

                        <div className='d-flex bg-light border border-dark rounded col-12 col-lg-12 flex-column justify-content-center align-items-center'>
                            <div className='col-11 col-lg-10 mt-2 mb-5'>
                                {/* <button className=''>
                                    Agregar imagen
                                </button> */}

                                <div className="form-floating">
                                    <input
                                        name='announcementTitle'
                                        className="mt-4 form-control "
                                        placeholder='Titulo'
                                        {...register("announcementTitle", { required: true, minLength: 2, maxLength: 80 })} ></input>
                                    {errors.announcementTitle && errors.announcementTitle.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                                    {errors.announcementTitle && errors.announcementTitle.type === "minLength" && <span className='text-danger'>*El campo requiere al menos 2 caracteres</span>}
                                    {errors.announcementTitle && errors.announcementTitle.type === "maxLength" && <span className='text-danger'>*El campo requiere menos de 80 caracteres</span>}
                                    <label>Titulo</label>
                                </div>

                                <div>
                                    <textarea
                                        name='announcementText'
                                        className="announcement-text mt-4 form-control"
                                        placeholder='Información sobre tu anuncio'
                                        {...register("announcementText", { maxLength: 600 })} ></textarea>
                                    {errors.announcementText && errors.announcementText.type === "maxLength" && <span className='text-danger'>*El campo requiere menos de 600 caracteres</span>}
                                </div>

                            </div>
                        </div>
                        <div className='d-flex col-lg-4'>
                            <button className='btn-form' type='submit'> Publicar </button>
                        </div>

                    </form>
                    <ToastContainer />
                </div>
            </Layout >
        </>
    )
}
