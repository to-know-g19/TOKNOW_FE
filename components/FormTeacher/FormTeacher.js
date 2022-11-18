import React from 'react'
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

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
        if (teacherInfo.success === true) {
            router.push("/teachers")
        } else {
            (window.alert("Hubo un problema al envíar la información"))
        }
        // router.push("/registerteacher")
    }


    return (

        <div className='d-flex col-12  '>
            <div className='col-lg-1 '>
                <Link className='col-lg-12' href='/teachers'><button className='col-12'>profesores</button></Link>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex col-10 flex-column align-items-center justify-content-center'>
                <div className='col-10 d-flex flex-wrap justify-content-around'>

                    <div className='d-flex col-5 flex-column'>
                        <label>Nombre</label>
                        <input name='name' {...register("name", { required: true, minLength: 2, maxLength: 20 })} placeholder='Nombre'></input>
                        {errors.name && errors.name.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                        {errors.name && errors.name.type === "minLength" && <span className='text-danger'>*El campo requiere al menos 2 caracteres</span>}
                        {errors.name && errors.name.type === "maxLength" && <span className='text-danger'>*El campo requiere menos de 21 caracteres</span>}
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <label>Correo</label>
                        <input type="email" name='email' {...register("email")} placeholder='Correo'></input>
                        {errors.email && errors.email.type === "required" && <span className='text-danger'>*Este campo es requerido</span>}
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <label>Apellido Paterno</label>
                        <input name='lastNameA' {...register("lastNameA", { required: true, minLength: 2, maxLength: 20 })} placeholder='Apellido Paterno'></input>
                        {errors.lastNameA && errors.lastNameA.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                        {errors.lastNameA && errors.lastNameA.type === "minLength" && <span className='text-danger'>*El campo requiere al menos 2 caracteres</span>}
                        {errors.lastNameA && errors.lastNameA.type === "maxLength" && <span className='text-danger'>*El campo requiere menos de 21 caracteres</span>}
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <label>Teléfono</label>
                        <input type='number' name='phone' {...register("phone")} placeholder='Teléfono'></input>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <label>Apellido Materno</label>
                        <input name='lastNameB' {...register("lastNameB", { required: true, minLength: 2, maxLength: 20 })} placeholder='Apellido Materno'></input>
                        {errors.lastNameB && errors.lastNameB.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                        {errors.lastNameB && errors.lastNameB.type === "minLength" && <span className='text-danger'>*El campo requiere al menos 2 caracteres</span>}
                        {errors.lastNameB && errors.lastNameB.type === "maxLength" && <span className='text-danger'>*El campo requiere menos de 21 caracteres</span>}
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <label>Matrícula</label>
                        <input name='matricula' {...register("matricula")} placeholder='Matrícula'></input>
                    </div>



                    <div className='d-flex col-5 flex-column'>
                        <label>Fecha nacimiento</label>
                        {/* hay que ver cómo vamos a implementar la fecha */}
                        <input type='number' name='citydateOfBirth' {...register("citydateOfBirth")} placeholder='Ej. 24011996'></input>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <label>Tipo de profesor</label>
                        {/* tiene que cumplir uno de la lista en el back. hacer con desplegable */}
                        <select name='tipoProfesor' {...register("tipoProfesor", { required: true })} className="form-select" >
                            <option value="">Materia</option>
                            <option value="titular">Titular</option>
                            <option value="educacion fisica">Educacion física</option>
                            <option value="ingles">Inglés</option>
                        </select>
                        {errors.tipoProfesor && errors.tipoProfesor.type === "required" && <span className='text-danger'>*Selecciona el tipo de profesor</span>}
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <label>Bio</label>
                        <input name='bio' {...register("bio")} placeholder='Bio'></input>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <label>Grado</label>
                        <select name='grade' {...register("grade", { required: true, min: 1, max: 6 })} className="form-select" >
                            <option value="">Grado</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        {errors.grade && errors.grade.type === "required" && <span className='text-danger'>*Selecciona un grado</span>}

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
