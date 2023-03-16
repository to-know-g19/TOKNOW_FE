import React from 'react'
import { useForm } from "react-hook-form"
import { FaUserCircle } from 'react-icons/fa';

export default function CommentBox(props) {
    const { register, handleSubmit, formState: { errors } } = useForm()

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
        console.log(replyResult)

        // // lógica para mandar notificación a /announcements donde se revisa el item
        // if (announcementResult.success === true) {
        //     localStorage.setItem('notifAnnounceCreation', 'true')
        //     // si existe un groupId en el router entonces se hace push al grupo con ese groupId
        //     if (!!groupId) {
        //         router.push(`/grouplist/${groupId}`)
        //     } else {
        //         router.push(`/announcements`)
        //     }
        // } else {
        //     notifyError()
        // }

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column m-4 m-lg-5 '>
                <textarea
                    name='message'
                    className='post-announce d-flex col-12 col-lg-11 bg-white'
                    placeholder='Agrega un comentario'
                    {...register("message", { maxLength: 600 })}></textarea>
                    {errors.message && errors.message.type === "maxLength" && <span className='text-danger'>*El campo requiere menos de 600 caracteres</span>}

                
                <div className='d-flex col-5'>
                    <button className='btn-form' type='submit'> Publicar </button>
                </div>

            </form>
        </div>
    )
}
