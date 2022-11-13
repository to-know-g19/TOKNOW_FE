import React from 'react'
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'


export default function FormTeacher() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()

    const onSubmit = async data => {


        const token = localStorage.getItem('token')
        let result = await fetch('https://api.2know.today/teacher', {
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

        console.log('info', teacherInfo)

        router.push("/registerteacher")
    }


    return (
        <div className='d-flex col-12 '>
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex col-12 flex-column align-items-center justify-content-center'>
                <div className='col-12 d-flex flex-wrap justify-content-center'>

                    <div className=' d-flex col-6 flex-column'>
                        <label>Nombre</label>
                        <input name='name' {...register("name", { required: true, minLength: 3, maxLength:30 })} placeholder='Nombre'></input>
                        {errors.name && errors.name.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                        {errors.name && errors.name.type === "minLength" && <span className='text-danger'>*El campo requiere más de 2 caracteres</span>}
                        {errors.name && errors.name.type === "maxLength" && <span className='text-danger'>*El campo requiere menos de 30 caracteres</span>}
                    </div>

                    <div className='d-flex col-6 flex-column'>
                        <label>Correo</label>
                        <input name='email' {...register("email")} placeholder='Correo'></input>
                    </div>

                    <div className='d-flex col-6 flex-column'>
                        <label>Apellido Paterno</label>
                        <input name='lastNameA' {...register("lastNameA", { required: true, minLength: 3, maxLength:30 })} placeholder='Apellido Paterno'></input>
                        {errors.lastNameA && errors.lastNameA.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                        {errors.lastNameA && errors.lastNameA.type === "minLength" && <span className='text-danger'>*El campo requiere más de 2 caracteres</span>}
                        {errors.lastNameA && errors.lastNameA.type === "maxLength" && <span className='text-danger'>*El campo requiere menos de 30 caracteres</span>}
                    </div>

                    <div className='d-flex col-6 flex-column'>
                        <label>Teléfono</label>
                        <input type='number' name='phone' {...register("phone", { required: true, minLength: 8, maxLength:16 })} placeholder='Teléfono'></input>
                        {errors.phone && errors.phone.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                        {errors.phone && errors.phone.type === "minLength" && <span className='text-danger'>*El campo requiere más de 7 caracteres</span>}
                        {errors.phone && errors.phone.type === "maxLength" && <span className='text-danger'>*El campo requiere menos de 16 caracteres</span>}
                    </div>

                    <div className='d-flex col-6 flex-column'>
                        <label>Apellido Materno</label>
                        <input name='lastNameB' {...register("lastNameB", { required: true, minLength: 3, maxLength:30 })} placeholder='Apellido Materno'></input>
                        {errors.lastNameB && errors.lastNameB.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                        {errors.lastNameB && errors.lastNameB.type === "minLength" && <span className='text-danger'>*El campo requiere más de 2 caracteres</span>}
                        {errors.lastNameB && errors.lastNameB.type === "maxLength" && <span className='text-danger'>*El campo requiere menos de 30 caracteres</span>}
                    </div>

                    <div className='d-flex col-6 flex-column'>
                        <label>Matrícula</label>
                        {/* requerido sin mencionarse como tal (tiene min y max) */}
                        <input name='matricula' {...register("matricula")} placeholder='Matrícula'></input>
                    </div>

                    <div className='d-flex col-6 flex-column'>
                        <label>Género</label>
                        {/* tiene que cumplir uno de la lista en el back. hacer con desplegable */}
                        <input name='gender' {...register("gender")} placeholder='Género'></input>
                    </div>

                    <div className='d-flex col-6 flex-column'>
                        <label>Fecha nacimiento</label>
                        {/* hay que ver cómo vamos a implementar la fecha */}
                        <input name='citydateOfBirth' {...register("citydateOfBirth")} placeholder='Fecha nacimiento'></input>
                    </div>

                    <div className='d-flex col-6 flex-column'>
                        <label>Materia</label>
                        {/* tiene que cumplir uno de la lista en el back. hacer con desplegable */}
                        <input name='materia' {...register("materia")} placeholder='Materia'></input>
                    </div>

                    <div className='d-flex col-6 flex-column'>
                        <label>Bio</label>
                        {/* requerido sin mencionarse como tal (tiene min y max) */}
                        <input name='bio' {...register("bio")} placeholder='Bio'></input>
                    </div>

                    <div className='d-flex col-6 flex-column'>
                        <label>Grado</label>
                        <input type='number' name='grade' {...register("grade", { required: true, min: 1, max:6 })} placeholder='Grado'></input>
                        {errors.grade && errors.grade.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                        {errors.grade && errors.grade.type === "min" && <span className='text-danger'>*El grado no puede ser menor a 1</span>}
                        {errors.grade && errors.grade.type === "max" && <span className='text-danger'>*El grado no puede ser mayor a 6</span>}
                        
                    </div>

                    {/* <div className='d-flex col-6 flex-column'>
                        <label>Grupo</label>
                        <input name='' {...register("")} placeholder='Grupo'></input>
                        en el modelo se toma de otra colección
                    </div> */}

                </div>

                <div className='d-flex col-lg-4 justify-content-around'>
                    <input className='col-12' type='submit'></input>
                </div>

            </form>
        </div>
    )
}
