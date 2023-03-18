import React from 'react'
import { useForm } from "react-hook-form"
import { FaUserCircle } from 'react-icons/fa';
import {useRouter} from 'next/router'

export default function CommentBox(props) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()
    const routesQuery = router.query
    // console.log("rutas en router.query", routesQuery)

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
 
    
    // const notifyError = useToastify("error", "Hubo un problema al envíar la información")

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
        //AGREGAR NOTIFICACIÓN Y REFRESH DE PAGINA CUANDO SEA SUCCESS O FAILED

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column m-4 m-lg-5 '>
                <textarea
                    name='message'
                    className='post-announce d-flex col-12 col-lg-11 bg-white'
                    placeholder='Agrega un comentario'
                    {...register("message", { maxLength: 600 })}>
                </textarea>
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

                <div className='d-flex col-5'>
                    <button className='btn-form' type='submit'> Publicar </button>
                </div>

            </form>
        </div>
    )
}
