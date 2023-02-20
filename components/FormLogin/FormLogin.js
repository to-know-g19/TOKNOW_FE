import React, {useState} from 'react'
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function FormLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [selectedRole, setSelectedRole] = useState('user');
  const router = useRouter();

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const onSubmit = async data => {
    // Login request
    let url = ''
    if (selected === 'user') {
      url = 'https://api.toknow.online/login/'
    } else {
      url = `https://api.toknow.online/login/${selectedRole}`
    }
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

    // Fetch array of users data request
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
      window.alert('El correo o contraseña que has introducido es incorrecto.')
    }
    else {
      if (user && user.school) {
        router.push("/grouplist");
      } else {
        router.push("/registerschool");
      }
    }

  }
  //necesito acceder al usuario por medio del correo al que estoy proporcionando para ver si tiene school.

  return (
    <div className='d-flex col-12 '>
      <form onSubmit={handleSubmit(onSubmit)} className='d-flex col-12 flex-column justify-content-center'>

      <div>
        <label>
          <input
            type="radio"
            value="user"
            checked={selectedRole === 'user'}
            onChange={handleRoleChange}
          />
          Usuario
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
            value="parent"
            checked={selectedRole === 'parent'}
            onChange={handleRoleChange}
          />
          Papá
        </label>
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
        <div className='d-flex justify-content-around'>
          <button className='btn-form col-4' type='submit'>Ingresar</button>
          <Link className='col-6' href='/register'><button className='btn-form col-10'>Regístrate</button></Link>
        </div>
      </form>
    </div>
  )
}
