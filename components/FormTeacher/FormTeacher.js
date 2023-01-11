import React from 'react'
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function FormTeacher() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()

    const groupId = router.query.groupId
    
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
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex mt-3 col-10 flex-column align-items-center justify-content-center'>
                <div className='col-10 d-flex flex-wrap justify-content-around'>

                    <div className='d-flex col-5 flex-column'>
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

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                name='email'
                                className="form-control"
                                placeholder='Correo'
                                {...register("email")} ></input>
                            {errors.email && errors.email.type === "required" && <span className='text-danger'>*Este campo es requerido</span>}
                            <label>Correo</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
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

                    <div className='d-flex col-5 flex-column '>
                        <div className="form-floating mb-3">
                            <input
                                type='number'
                                name='phone'
                                className="form-control"
                                placeholder='Teléfono'
                                {...register("phone")} ></input>
                            <label>Teléfono</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
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

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <input
                                name='matricula'
                                className="form-control"
                                placeholder='Matrícula'
                                {...register("matricula")} ></input>
                            <label>Matrícula</label>
                        </div>
                    </div>



                    <div className='d-flex col-5 flex-column'>
                        {/* hay que ver cómo vamos a implementar la fecha */}
                        <div className="form-floating mb-3">
                            <input
                                type='number'
                                name='dateOfBirth'
                                className="form-control"
                                placeholder='Ej. 24011996'
                                {...register("dateOfBirth")} ></input>
                            <label>Fecha nacimiento</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        {/* tiene que cumplir uno de la lista en el back. hacer con desplegable */}
                        <div className="form-floating mb-3">
                            <select
                                name='tipoProfesor'
                                className="form-control form-select"
                                {...register("tipoProfesor", { required: true })}>
                                <option value="">Materia</option>
                                <option value="titular">Titular</option>
                                <option value="educacion fisica">Educacion física</option>
                                <option value="ingles">Inglés</option>
                            </select>
                            {errors.tipoProfesor && errors.tipoProfesor.type === "required" && <span className='text-danger'>*Selecciona el tipo de profesor</span>}
                            <label>Tipo de profesor</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <input
                                name='bio'
                                className="form-control"
                                placeholder='Bio'
                                {...register("bio")} ></input>
                            <label>Bio</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <select
                                name='grade'
                                className="form-control form-select"
                                {...register("grade", { required: true, min: 1, max: 6 })} >
                                <option value="">Grado</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                            {errors.grade && errors.grade.type === "required" && <span className='text-danger'>*Selecciona un grado</span>}
                            <label>Grado</label>
                        </div>
                    </div>

                    {/* <div className='d-flex col-6 flex-column'>
                        <label>Grupo</label>
                        <input name='' {...register("")} placeholder='Grupo'></input>
                        en el modelo se toma de otra colección
                    </div> */}

                </div>

                <div className='d-flex col-lg-4 justify-content-around'>
                    <input className='btn col-12' type='submit'></input>
                </div>

            </form>
        </div>
    )
}
