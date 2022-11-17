/* default */
import { useRouter } from 'next/router'
import { useState } from 'react'
import React from 'react'

/* package */
import { useForm } from "react-hook-form"

/* components */
import Layout from '../components/Layout'

/* styles */
import 'bootstrap/dist/css/bootstrap.css'

/**
 * RegisterStudent
 * @param
 * @param
 * @param
 * @returns Register
 */

export default function RegisterStudent() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()

    const onSubmit = async data => {
        const token = localStorage.getItem('token')
        let result = await fetch('https://api.2know.today/user', {
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
        const studentInfo = result.json()
        console.log(studentInfo)

        router.push("/registerstudent")
    }

    const [haveParent, setHaveParent] = useState(2)
    const handleChecked = e => {
        setHaveParent(e.target.value)
    }

    return (
        <Layout>
            <div>
                <div><a href="">agregar usuario</a></div>
                <div><a href="">return</a></div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="row g-3 needs-validation" >

                <div><legent>Datos del alumno</legent></div>
                <div className='d-flex '>
                    <div className="col-6">
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Nombre" />
                            <label htmlFor="name">Nombre</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="lastNameA"
                                placeholder="Apellido paterno" />
                            <label htmlFor="lastNameA">Apellido paterno</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="lastNameB"
                                placeholder="Apellido materno" />
                            <label htmlFor="lastNameB">Apellido materno</label>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="matricula"
                                placeholder="matrícula" />
                            <label htmlFor="matricula">Matrícula</label>
                        </div>
                        <div className="form-floating mb-3">
                            <select className="form-select" id="cicle" aria-label="Floating label select example">
                                <option value="1">2022-2023</option>
                                <option value="2">2023-2024</option>
                            </select>
                            <label htmlFor="cicle">Ciclo escolar</label>
                        </div>
                        <div className="form-floating mb-3">
                            <select className="form-select" id="group" aria-label="Floating label select example">
                                <option value="1">1 A</option>
                                <option value="2">1 B</option>
                            </select>
                            <label htmlFor="group">Grupo</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="dateOfBirth"
                                placeholder="dd/mm/aaaa" />
                            <label htmlFor="dateOfBirth">Fecha de nacimiento</label>
                        </div>
                        <div>
                            <p>Tienes hermanos en la escuela</p>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Default radio
                                </label>
                            </div>
                            <div className="form-check">
                                <input 
                                className="form-check-input" 
                                type="radio" 
                                name="flexRadioDefault" 
                                id="flexRadioDefault2" 
                                onChange={handleChecked} />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Default checked radio
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            
            <div>
                <legent>Buscar datos del padre o tutor</legent>
                <div className="input-group mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Ingresa el nombre del padre o tutor"
                        aria-label="Ingresa el nombre del padre o tutor"
                        aria-describedby="email-parent" />
                    <button className="btn btn-outline-secondary" type="button" id="email-parent">Buscar</button>
                </div>


            </div>
            <div>
                <legent>Ingresar los datos del padre o tutor</legent>

                <div className='d-flex '>
                    <div className="col-6">
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Nombre" />
                            <label htmlFor="name">Nombre</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="lastNameA"
                                placeholder="Apellido paterno" />
                            <label htmlFor="lastNameA">Apellido paterno</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="lastNameB"
                                placeholder="Apellido materno" />
                            <label htmlFor="lastNameB">Apellido materno</label>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="email-parent"
                                placeholder="Correo electrónico" />
                            <label htmlFor="email-parent">Correo electrónico</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="number"
                                className="form-control"
                                id="phone"
                                placeholder="Teléfono" />
                            <label htmlFor="phone">Teléfono</label>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Guardar</button>
            </div>
        </form>
        </Layout >
    )
}