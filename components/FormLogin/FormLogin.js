import React from 'react'
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.css'

export default function FormLogin() {


const { register, handleSubmit, formState: { errors } } = useForm()



const onSubmit = async data => {

  console.log(data)
  // data.preventDefault(data)
  
		let result = await fetch('https://api.2know.today/login', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify(data)
		})
  const response = await data

  console.log("respuesta es", response)
			// .then(response => response.json())
			// .then(data => {
			// 	localStorage.setItem('userToken', data.token)
      //   if(data.token)

      //   console.log("exito en la vida!")
			// })
			// .catch(error => console.log(error))
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

        <input className='col-3' type='submit'></input>
    </form>
</div>
  )
}
