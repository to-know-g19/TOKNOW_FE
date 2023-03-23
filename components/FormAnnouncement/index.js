import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useRouter } from 'next/router'
import ArrowGoBack from '../ArrowGoBack/ArrowGoBack'
import Layout from '../Layout/index'
//toastify imports
import { ToastContainer } from 'react-toastify'
import useToastify from '../useToastify'
//uppy
import Uppy from "@uppy/core";
import Transloadit from "@uppy/transloadit";
import Webcam from "@uppy/webcam";
import { Dashboard } from "@uppy/react";

export default function FormAnnouncement() {
    //uppy
    const [uppy, setUppy] = useState();
    const [imageUrl, setImageUrl] = useState(

    );

    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()
    const groupId = router.query.groupId

    // //función para checar si se accede al formulario desde un grupo checando el router.query
    // //si hay groupId se accedió desde el grupo, si no, desde la página de anuncios
    const route = () => {
        let routeForArrowGoBack
        if (!!groupId) {
            routeForArrowGoBack = `/grouplist/${groupId}`
        } else {
            routeForArrowGoBack = "/announcements"
        } return routeForArrowGoBack
    }

    // Esta funcion se ejecuta al terminar de subir el archivo
    const onCompleteUploadFiles = (assembly) => {
        // aqui pueden tomar la url de la imagen para ponerla en un estado y mandarla al API
        const image = assembly.results?.compress_image[0].ssl_url;
        setImageUrl(image);
    };

    useEffect(() => {
        /**
         * Usamos este useEffect para solo cargar el dashboard de lado del cliente
         * Asi evitamos errores por intentar cargar de lado del server
         */
        const uppyInstance = new Uppy({
            restrictions: {
                maxNumberOfFiles: 1, // para que solo pueda subir una imagen
            },
        })
            .use(Transloadit, {
                params: {
                    auth: { key: process.env.NEXT_PUBLIC_TRANSLOADIT_AUTH_KEY },
                    template_id: process.env.NEXT_PUBLIC_TRANSLOADIT_TEMPLATE_ID,
                },
                waitForEncoding: true,
            })
            .use(Webcam, {
                modes: ["picture"], // para que solo tome fotos
            })
            .on("transloadit:complete", onCompleteUploadFiles); // callback
        setUppy(uppyInstance);
    }, []);

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
                {...data, image:imageUrl}
            )
        })
        const announcementResult = await result.json()
        console.log("resultado del posteo", announcementResult)

        // lógica para mandar notificación a /announcements donde se revisa el item
        if (announcementResult.success === true) {
            localStorage.setItem('notifAnnounceCreation', 'true')
            // si existe un groupId en el router entonces se hace push al grupo con ese groupId
            if (!!groupId) {
                router.push(`/grouplist/${groupId}`)
            } else {
                router.push(`/announcements`)
            }
        } else {
            notifyError()
        }

    }


    return (
        <>
            <Layout>
                <div className='d-flex flex-column align-items-center col-12 justify-content-center '>
                    <ArrowGoBack
                        btnTxtModal={(!!groupId) ? <h4>Crear anuncio grupal</h4> : <h4>Crear anuncio escolar</h4>}
                        route={route()} />
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
                                {imageUrl && <img className='' src={imageUrl}/>}
                                
                                <button id={"uppy"}>Subir archivo</button>
                             {uppy && (
                                 <Dashboard
                                     uppy={uppy}
                                     //limitar a que solo sea una imagen (propiedad limit maybe)
                                     plugins={["Webcam"]}
                                     theme="auto"
                                     width={"100%"}
                                     inline={false}
                                     trigger={"#uppy"}
                                 />
                             )}

                                {/* Solo se usa cuando se llama a este componente en la ruta dentro de un anuncio
                                campo escondido con d-none pero necesario para tomar id de grupo y enviarlo
                                    en formulario del anuncio */}
                                {!!groupId &&
                                    <div className='d-none d-flex col-12 col-lg-5 flex-column'>
                                        <div className="form-floating mb-3">
                                            <select
                                                name='group'
                                                className="form-control form-select"
                                                {...register("group")} >
                                                <option value={groupId}></option>

                                            </select>
                                            <label>aqui va el group ID</label>
                                        </div>
                                    </div>}

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
