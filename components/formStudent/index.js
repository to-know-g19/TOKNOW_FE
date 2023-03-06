import React from 'react'
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'
import ArrowGoBack from '../ArrowGoBack/ArrowGoBack'
//toastify imports
import { ToastContainer } from 'react-toastify'
import useToastify from '../useToastify'

export default function FormStudent() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()
    const groupId = router.query.groupId
    const notifyError = useToastify("error", "Hubo un problema al envíar la información")

    const onSubmit = async data => {

        const token = localStorage.getItem('token')
        let result = await fetch('https://api.toknow.online/student', {
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
        const teacherInfo = await result.json()

        if (teacherInfo.success === true) {
            router.push(`/grouplist/${groupId}`)
        } else {
            notifyError()
        }
    }


    return (
        <div className='d-flex flex-column align-items-center col-lg-12 justify-content-center'>
            <ArrowGoBack
            btnTxtModal={<h4>Datos del alumno</h4>}
            route={`/grouplist/${groupId}`}/>
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex mt-3 col-lg-10 flex-column align-items-center justify-content-center'>
                <div className='col-lg-10 d-flex flex-wrap justify-content-around'>

                    <div className='d-flex col-8 col-lg-5 flex-column'>
                        <div className="form-floating mb-3">
                            <input
                                name='name'
                                className="form-control"
                                placeholder='Nombre'
                                {...register("name", { required: true, minLength: 2, maxLength: 20 })} ></input>
                            {errors.name && errors.name.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                            {errors.name && errors.name.type === "minLength" && <span className='text-danger'>*El campo requiere al menos 2 caracteres</span>}
                            {errors.name && errors.name.type === "maxLength" && <span className='text-danger'>*El campo requiere menos de 21 caracteres</span>}
                            <label>Nombre</label>
                        </div>
                    </div>

                    <div className='d-flex col-8 col-lg-5 flex-column'>
                        <div className="form-floating mb-3">
                            <input
                                name='matricula'
                                className="form-control"
                                placeholder='Matrícula'
                                {...register("matricula")} ></input>
                            <label>Matrícula</label>
                        </div>
                    </div>

                    <div className='d-flex col-8 col-lg-5 flex-column'>
                        <div className="form-floating mb-3">
                            <input
                                name='lastNameA'
                                className="form-control"
                                placeholder='Apellido Paterno'
                                {...register("lastNameA", { required: true, minLength: 2, maxLength: 20 })} ></input>
                            {errors.lastNameA && errors.lastNameA.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                            {errors.lastNameA && errors.lastNameA.type === "minLength" && <span className='text-danger'>*El campo requiere al menos 2 caracteres</span>}
                            {errors.lastNameA && errors.lastNameA.type === "maxLength" && <span className='text-danger'>*El campo requiere menos de 21 caracteres</span>}
                            <label>Apellido Paterno</label>
                        </div>
                    </div>


                    <div className='d-flex col-8 col-lg-5 flex-column'>
                        <div className="form-floating mb-3">
                            <input
                                name='lastNameB'
                                className="form-control"
                                placeholder='Apellido Materno'
                                {...register("lastNameB", { required: true, minLength: 2, maxLength: 20 })} ></input>
                            {errors.lastNameB && errors.lastNameB.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                            {errors.lastNameB && errors.lastNameB.type === "minLength" && <span className='text-danger'>*El campo requiere al menos 2 caracteres</span>}
                            {errors.lastNameB && errors.lastNameB.type === "maxLength" && <span className='text-danger'>*El campo requiere menos de 21 caracteres</span>}
                            <label>Apellido Materno</label>
                        </div>
                    </div>

                    {/* <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <input
                                type='Date'
                                name='dateOfBirth'
                                className="form-control"
                                {...register("dateOfBirth")} ></input>
                            <label>Fecha nacimiento</label>
                        </div>
                    </div> */}

                    <div className='d-none d-flex col-8 col-lg-5 flex-column'>
                        <div className="form-floating mb-3">
                            <select
                                name='groups'
                                className="form-control form-select"
                                {...register("groups")} >
                                <option value={groupId}></option>

                            </select>
                            {errors.grade && errors.grade.type === "required" && <span className='text-danger'>*Selecciona un grado</span>}
                            <label>aqui va el group ID</label>
                        </div>
                    </div>

                </div>

                <div className='d-flex col-lg-4 justify-content-around'>
                    <button className='btn-form' type='submit'> Registrar </button>
                </div>

            </form>
            <ToastContainer/>
        </div>
    )
}
