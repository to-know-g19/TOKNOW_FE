import React from 'react'
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function GroupFormModal() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()

    const onSubmit = async data => {
        const token = localStorage.getItem('token')
        let result = await fetch('https://api.2know.today/group', {
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
        const groupInfo = await result.json()
        console.log('info', groupInfo)
        if (groupInfo.success === true) {
            window.alert("registro de grupo exitoso")
        } else {
            (window.alert("Hubo un problema al envíar la información"))
        }
        // router.push("/")
    }

    return (
        <div className='d-flex col-12 '>
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex col-12 flex-column align-items-center'>

                <div className='col-12 d-flex flex-column align-items-center'>

                    <div className='d-flex col-8  flex-column'>
                        <div className="form-floating mb-3">
                            <select
                                name='grade'
                                className="form-control form-select"
                                {...register("grade", { required: true, min: 1, max: 6 })}  >
                                <option value="">Grado</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                            {errors.grade && errors.grade.type === "required" && <span className='text-danger'>*Este campo es requerido.</span>}
                            {errors.grade && errors.grade.type === "min" && <span className='text-danger'>*El mínimo debe ser 1</span>}
                            {errors.grade && errors.grade.type === "max" && <span className='text-danger'>*El máximo debe ser 6</span>}
                            <label>Grado</label>
                        </div>
                    </div>

                    <div className='d-flex col-8 flex-column'>
                        <div className="form-floating mb-3">
                            <select
                                name='name'
                                className="form-control form-select"
                                {...register("name", { required: true })}  >
                                <option value="">Grupo</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                            </select>
                            {errors.name && errors.name.type === "required" && <span className='text-danger'>*Este campo es requerido.</span>}
                            <label>Grupo</label>
                        </div>
                    </div>

                    <div className='d-flex col-8 flex-column'>
                        <div className="form-floating mb-3">
                            <select
                                name='year'
                                className="form-control form-select"
                                {...register("year", { required: true })}  >
                                <option value="">Año</option>
                                <option value="2022-2023">2022-2023</option>
                                <option value="2023-2024">2023-2024</option>
                            </select>
                            {errors.year && errors.year.type === "required" && <span className='text-danger'>*Este campo es requerido.</span>}
                            <label>Año</label>
                        </div>
                    </div>
                    <div className='d-flex col-lg-8 justify-content-end'>
                        <div className='d-flex mt-4 col-lg-4 align-items-end'>
                            <button className='btn-form col-12' type='submit'>Registrar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

