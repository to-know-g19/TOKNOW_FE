import React from 'react'
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'


export default function FormLogin() {
const { register, handleSubmit, formState: { errors } } = useForm()
const router = useRouter()


const onSubmit = async data => {
  // data.preventDefault(data)
		let result = await fetch('https://api.2know.today/login', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data)
		})
  const response = await result.json()

  const theToken = response.token
  //poner en local storage
  localStorage.setItem("el token es", theToken)
  //redireccionar
    router.push("/registerschool")
	}



  return (
    <div className='d-flex col-12 '>
    <form onSubmit={handleSubmit(onSubmit)} className='d-flex col-12 flex-column justify-content-center'>

        <div className='col-12 '>
            <div className='d-flex col-12 flex-column'>
                <label>Correo</label>
                <input type='email' name='email'  {...register("email", { required: true, maxLength: 30 })} placeholder='Correo'></input>
                {errors.email && errors.email.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                {errors.email && errors.email.type === "maxLength" && <span className='text-danger'>*El campo no debe tener más de 30 caracteres. </span>}
            </div>

            <div className='col-12 d-flex flex-row'>
                <div className='d-flex col-12 flex-column'>
                    <label>Contraseña</label>
                    <input type='password' name='password' {...register("password", { required: true, minLength: 3 })} placeholder='Contraseña'></input>
                    {errors.password && errors.password.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                    {errors.password && errors.password.type === "minLength" && <span className='text-danger'>*El campo requiere más de 3 caracteres</span>}
                </div>
            </div>
        </div>
        <div className='d-flex justify-content-around'>
        <input className='col-4' type='submit'></input>
        <button className='col-6'>registrate</button>
        </div>
    </form>
</div>
  )
}
