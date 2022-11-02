import React from 'react'
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.css'
import {useState} from 'react';

export default function formAdmin() {

  const { register, handleSubmit, formState: { errors } } = useForm()


  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   // console.log(data)
  //   let result = fetch( 'https://toknow19g-default-rtdb.firebaseio.com/.json',{
  //       method: 'POST',
  //       body: JSON.stringify(e)
  //     })
  //   console.log(result.json())
  //   .then(response => response.json())
  //   .catch(error => console.log(error))
  // }
  const onSubmit = async data => {
    console.log(data)
    let result = await fetch(
      'https://toknow19g-default-rtdb.firebaseio.com/school.json',
      {
        method: 'POST',
        body: JSON.stringify(data)
      })
    console.log(await result.json())
  }
  return (
    <div className='d-flex col-lg-12 justify-content-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='d-flex col-lg-6 flex-column'>
        <div>Registro</div>
        <input {...register("name", { required: true, minLength: 3, maxLength: 30 })} placeholder='Name'></input>
        {errors.name && errors.name.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
        {errors.name && errors.name.type === "minLength" && <span>El campo debe tener un mínimo de 3 caracteres.</span>}
        {errors.name && errors.name.type === "maxLength" && <span>El campo puede tener un máximo de 30 caracteres.</span>}

        <input type='email'{...register("email", { required: true })} placeholder='Email'></input>
        {errors.email && errors.email.type === "required" && <span>El campo es requerido.</span>}


        <input {...register("phone", { required: true, minLength: 8, maxLength: 10 })} placeholder='Phone'></input>
        {errors.phone && errors.phone.type === "required" && <span>El campo es requerido.</span>}
        {errors.phone && errors.phone.type === "minLength" && <span>El campo debe tener un mínimo de 8 caracteres.</span>}
        {errors.phone && errors.phone.type === "maxLength" && <span>El campo puede tener un máximo de 10 caracteres.</span>}
        
        <input type='password' {...register("password", { required: true, minLength: 3 })} placeholder='Password'></input>
        {errors.password && errors.password.type === "required" && <span>El campo es requerido.</span>}
        {errors.password && errors.password.type === "minLength" && <span>El campo debe tener un mínimo de 3 caracteres.</span>}
        
        {/* <input {...register("password")} placeholder='Password'></input> */}
        <input type='submit'></input>
      </form>
    </div>
  )
}