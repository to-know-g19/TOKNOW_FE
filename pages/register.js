/* Package */
import React from 'react'
import { useForm } from "react-hook-form"
import { useRouter } from 'next/router'
/* styles */
import 'bootstrap/dist/css/bootstrap.css'

/* components */
import Layout from '../components/Layout';


export default function index() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()
    const onSubmit = async data => {

        let result = await fetch(
            'https://api.2know.today/user',
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',

                },
                body: JSON.stringify(
                    data
                )

            })
        const userInfo = await result.json()

        if (!userInfo.succes) {
            //success está escrito con 1 "s" en el back. checarlo
            window.alert('Este correo ya está registrado')
        } else { router.push("/") }
    }

    return (
        <Layout title='toKnow caambiando la comunicación escolar' description='Registro para escuelas, herramienta para desarrollar una comunicación efectiva en la comunidad'>
            <div className='fullscreen'>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex mt-3 flex-column align-items-center'>

                    <h4>Listo para una nueva experiencia en comunicación escolar</h4>
                    <div className='mt-3 col-lg-4'>
                        <h5>Datos del responsable</h5>
                        <div>
                            <div className='d-flex flex-column'>
                                <div className="form-floating mb-3">
                                    <input
                                        type='text'
                                        name='name'
                                        className="form-control"
                                        placeholder='Nombre'
                                        {...register("name", { required: true, minLength: 2, maxLength: 20 })} ></input>
                                    {errors.name && errors.name.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                                    {errors.name && errors.name.type === "minLength" && <span className='text-danger'>*El campo requiere más de 1 caracter</span>}
                                    {errors.name && errors.name.type === "maxLength" && <span className='text-danger'>*El campo requiere menos de 21 caracteres</span>}
                                    <label>Nombre</label>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex flex-column'>
                            <div className="form-floating mb-3">
                                <input
                                    type='email'
                                    name='email'
                                    className="form-control"
                                    placeholder='Correo'
                                    {...register("email", { required: true, maxLength: 30 })} ></input>
                                {errors.email && errors.email.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                                {errors.email && errors.email.type === "maxLength" && <span className='text-danger'>*El campo no debe tener más de 30 caracteres. </span>}
                                <label>Correo</label>
                            </div>
                        </div>

                        <h5>Crea tu contraseña</h5>
                        <div>
                            <div className='d-flex flex-column'>
                                <div className="form-floating mb-3">
                                    <input
                                        type='password'
                                        name='password'
                                        className="form-control"
                                        placeholder='Contraseña'
                                        {...register("password", { required: true, minLength: 3, maxLength: 30 })} ></input>
                                    {errors.password && errors.password.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                                    {errors.password && errors.password.type === "minLength" && <span className='text-danger'>*El campo requiere más de 3 caracteres</span>}
                                    {errors.password && errors.password.type === "maxLength" && <span className='text-danger'>*El campo requiere menos de 31 caracteres</span>}
                                    <label>Contraseña</label>
                                </div>
                            </div>
                        </div>

                    </div>

                    <input className='col-4' type='submit'></input>
                </form>
            </div>
        </Layout>
    )
}
