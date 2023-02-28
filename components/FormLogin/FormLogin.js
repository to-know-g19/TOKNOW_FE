import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function FormLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [selectedRole, setSelectedRole] = useState('parent');
  const router = useRouter();

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const onSubmit = async data => {
    //condición para petición de login según el rol
    let url = ''
    if (selectedRole === 'user') {
      url = 'https://api.toknow.online/login/'
    } else {
      url = `https://api.toknow.online/login/${selectedRole}`
    }
    // Login request
    let result = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ ...data, role: data.role })
    })
    const response = await result.json()
    console.log("i am the response", response)
    console.log("i am the data", data)
    const token = response.token
    //poner en local storage 
    localStorage.setItem("token", token)
    //condición para evitar el error al desencriptar token:"undefined"
    if (token === undefined) {
      window.alert("las credenciales introducidas son incorrectas")
    } else {
      //desencriptando el token para acceder a su info
      const userData = JSON.parse(atob(token.split(".")[1]));
      const userId = userData.id;
      const userRole = userData.role;
      console.log('soy id en tkn', userId)
      console.log('soy rol en tkn', userRole)

      // Fetch de users para filtrar con el mail que haga match
      let usersResult = await fetch(`https://api.toknow.online/user`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      })
      const usersData = await usersResult.json()
      console.log("users data", usersData)

      // Check if user has school data
      const user = usersData.data.userAll.find(user => user.email === data.email);
      if (!token) {
        window.alert('las credenciales introducidas son incorrectas')
      }
      else {
        if (userRole === "teacher") {
          router.push("/teacher/yourgroups")
        } else {
          if (userRole === "parent") {
            router.push("/parent/yourgroups")
          } else {
            if (user && user.school) {
              router.push("/grouplist");
            } else {
              router.push("/registerschool");
            }
          }
        }
      }


    }
  }
  //necesito acceder al usuario por medio del correo al que estoy proporcionando para ver si tiene school.

  return (
    <div className='d-flex col-12 '>
      <form onSubmit={handleSubmit(onSubmit)} className='d-flex col-12 flex-column justify-content-center'>


          <h6 className='landingLogin'>Selecciona tu rol</h6>
          <div className='d-flex justify-content-around'>
            <div>
              <label>
                <input
                  type="radio"
                  value="parent"
                  checked={selectedRole === 'parent'}
                  onChange={handleRoleChange}
                />
                Padre/Tutor
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="teacher"
                  checked={selectedRole === 'teacher'}
                  onChange={handleRoleChange}
                />
                Maestro
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="user"
                  checked={selectedRole === 'user'}
                  onChange={handleRoleChange}
                />
                Administrador
              </label>
            </div>
          </div>

        <div className='col-12 '>
          <div className='d-flex col-12 flex-column'>
            <div className="form-floating mb-3">
              <input
                type='email'
                name='email'
                className="form-control"
                placeholder='Correo'
                {...register("email", { required: true, maxLength: 30 })}></input>
              {errors.email && errors.email.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
              {errors.email && errors.email.type === "maxLength" && <span className='text-danger'>*El campo no debe tener más de 30 caracteres. </span>}
              <label>Correo</label>
            </div>
          </div>
          <div className='col-12 d-flex flex-row'>
            <div className='d-flex col-12 flex-column'>
              <div className="form-floating mb-3">
                <input
                  type='password'
                  name='password'
                  className="form-control"
                  placeholder='Contraseña'
                  {...register("password", { required: true, minLength: 3 })} ></input>
                {errors.password && errors.password.type === "required" && <span className='text-danger'>*El campo es requerido.</span>}
                {errors.password && errors.password.type === "minLength" && <span className='text-danger'>*El campo requiere más de 3 caracteres</span>}
                <label>Contraseña</label>
              </div>
            </div>
          </div>

        </div>
        <div className='d-flex justify-content-end'>
          <button className='btn-form col-5' type='submit'>Ingresar</button>
          
        </div>
      </form>
    </div>
  )
}
