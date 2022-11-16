/* Package */
import React from 'react'
import { useForm } from "react-hook-form"

/* styles */
import 'bootstrap/dist/css/bootstrap.css'

/* components */
import Layout from '../components/Layout';


export default function index() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = async data => {
        console.log(data)
        let result = await fetch(
            'https://api.2know.today/user',
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify(
                    data
                )

            })
        console.log(await result.json())
    }

    return (
        <Layout title='toKnow caambiando la comunicación escolar' description='Registro para escuelas, herramienta para desarrollar una comunicación efectiva en la comunidad'>
            <div clasName='fullscreen'>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column align-items-center'>

                    <h4>Listo para una nueva experiencia en comunicación escolar</h4>
                    <div className='col-lg-4'>
                        <h5>Datos del responsable</h5>
                        <div>
                            <div className='d-flex flex-column'>
                                <label>Nombre</label>
                                <input type='text' name='name'  {...register("name", { required: true, minLength: 3 })} placeholder='Nombre'></input>
                                {errors.name && errors.name.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                                {errors.name && errors.name.type === "minLength" && <span className='text-danger'>*El campo requiere más de 3 caracteres</span>}
                            </div>
                        </div>

                        <div className='d-flex flex-column'>
                            <label>Correo</label>
                            <input type='email' name='email' {...register("email", { required: true, maxLength: 30 })} placeholder='Correo'></input>
                            {errors.email && errors.email.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                            {errors.email && errors.email.type === "maxLength" && <span className='text-danger'>*El campo no debe tener más de 30 caracteres. </span>}
                        </div>

                        <h5>Crea tu contraseña</h5>
                        <div>
                            <div className='d-flex flex-column'>
                                <label>Contraseña</label>
                                <input type='password' name='password'  {...register("password", { required: true, minLength: 3 })} placeholder='Contraseña'></input>
                                {errors.password && errors.password.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                                {errors.password && errors.password.type === "minLength" && <span className='text-danger'>*El campo requiere más de 3 caracteres</span>}
                            </div>
                        </div>

                    </div>

                    <input className='col-4' type='submit'></input>
                </form>
            </div>
        </Layout>
    )
}
