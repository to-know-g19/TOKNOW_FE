import React from 'react'
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function FormGroup() {
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

                <div className='col-7 d-flex  justify-content-around'>

                    <div className='d-flex col-3  flex-column'>
                        <label>Grado</label>
                        <select name='grade' {...register("grade", { required: true, min: 1, max: 6 })} className="form-select" >
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
                    </div>

                    <div className='d-flex col-3 flex-column'>
                        <label>Grupo</label>
                        <select name='name' {...register("name", { required: true })} className="form-select" >
                            <option value="">Grupo</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                        </select>
                        {errors.name && errors.name.type === "required" && <span className='text-danger'>*Este campo es requerido.</span>}
                    </div>

                    <div className='d-flex col-3 flex-column'>
                        <label>Año</label>
                        <select name='year' {...register("year", { required: true })} className="form-select" >
                            <option value="">Año</option>
                            <option value="2022-2023">2022-2023</option>
                            <option value="2023-2024">2023-2024</option>
                        </select>
                        {errors.year && errors.year.type === "required" && <span className='text-danger'>*Este campo es requerido.</span>}
                    </div>
                <div className='d-flex col-lg-2 align-items-end'>
                    <input className='sendBtn col-12' type='submit'></input>
                </div>
                </div>
                <div className='col-lg-2'>
                <Link  className='col-lg-12' href='/groups'><button className='col-12'>guardar</button></Link>
                </div>
            </form>
        </div>
    )
}

