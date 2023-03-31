import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import {useRouter} from 'next/router'
import useToastify from '../useToastify';

export default function CommentBox(props) {
    const { register, handleSubmit, formState: { errors }, formState } = useForm()
    const router = useRouter()
    const routesQuery = router.query
    const notifyError = useToastify("error", "hubo un problema al enviar la información")

    //función para identificar si al form se le pasa el id de un anucio
    //en /announcements o en /groupannouncements
    const announcementId = () => {
        if (routesQuery.announceId) {
            return routesQuery.announceId
        } else {
            if (routesQuery.groupAnnouncementId) {
                return routesQuery.groupAnnouncementId
            }
        }
    }
    // console.log('the id of the announcement', announcementId())
 

    const onSubmit = async data => {
        const token = localStorage.getItem('token')

        let result = await fetch('https://api.toknow.online/reply', {
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
        const replyResult = await result.json()
        if (replyResult.success === true){
            localStorage.setItem("notifCommentCreation", "true")
            window.location.reload()
        } else {
            notifyError()
        }      
    }

    // useEffect(()=> {
    //     const notifCommentCreation = localStorage.getItem("notifCommentCreation")
    //     if (notifCommentCreation === "true") {
    //         notifySuccess() 
    //         localStorage.setItem('notifCommentCreation', 'false')
    //     }
    // })

    return (
        <div className='d-flex justify-content-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex col-11 flex-column align-items-end'>
                <textarea
                    name='message'
                    className='post-announce d-flex col-12 col-lg-12 bg-white'
                    placeholder='Agrega un comentario'
                    {...register("message", {required: true, maxLength: 600 })}>
                </textarea>
                {errors.message && errors.message.type === "required" && <span className='text-danger'>*Escribe tu comentario</span>}
                {errors.message && errors.message.type === "maxLength" && <span className='text-danger'>*El campo requiere menos de 600 caracteres</span>}
               
                {/* campo escondido con d-none pero necesario para tomar id de anuncio y enviarlo
                    en formulario del reply */}
                <div className='d-none d-flex col-12 col-lg-5 flex-column'>
                    <div className="form-floating mb-3">
                        <select
                            name='announcement'
                            className="form-control form-select"
                            {...register("announcement")} >
                            <option value={announcementId()}></option>

                        </select>
                        <label>aqui va el group ID</label>
                    </div>
                </div>

                <div className='d-flex col-12 justify-content-end'>
                    <button className='btn-form' type='submit' disabled={formState.isSubmitting} > Comentar </button>
                </div>

            </form>
            
        </div>
    )
}
