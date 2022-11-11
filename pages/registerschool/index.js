import React from 'react'
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'


export default function registerschool() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()


    const onSubmit = async data => {
        const userToken = localStorage.getItem('el token es')
        let result = await fetch('https://api.2know.today/school', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                "Authorization": `Bearer ${userToken}`
            },
            body: JSON.stringify(
                data
            )
        })
        // const response = await result.json()

        // const theToken = response.token
        // //poner en local storage
        // localStorage.setItem("el token es", theToken)
        //redireccionar

        // router.push("/registerschool")
    }



    return (
        <Layout>
            <div className='d-flex col-12 '>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex col-12 flex-column justify-content-center'>
                    <h4>Registra los datos de tu escuela</h4>
                    <div className='col-12 '>
                        <div className='col-12 d-flex flex-column'>
                            <label>Nombre de la escuela</label>
                            <input name='nameSchool' {...register("school")} placeholder='Escuela'></input>
                        </div>

                        <div className='col-12 d-flex flex-row'>
                            <div className='d-flex col-12 flex-column'>
                                <label>CCT</label>
                                <input name='cct' {...register("cct")} placeholder='CCT'></input>
                            </div>
                        </div>

                        <div className='col-12 d-flex flex-row'>
                            <div className='d-flex col-12 flex-column'>
                                <label>Email</label>
                                <input type='email' name='emailSchool' {...register("emailSchool")} placeholder='Email'></input>

                            </div>
                        </div>
                        <div className='col-12 d-flex flex-row'>
                            <div className='d-flex col-12 flex-column'>
                                <label>Tel. Escolar</label>
                                <input type='number' name='phoneSchool' {...register("phoneSchool")} placeholder='Tel. escolar'></input>
                               
                            </div>
                        </div>





                        {/* <div className='col-12 d-flex flex-row'>
                            <div className='d-flex col-12 flex-column'>
                                <label>Calle</label>
                                <input name='addressStreet' {...register("addressStreet")} placeholder='Calle'></input>
                                
                            </div>
                        </div> */}
                    </div>
                    <div className='d-flex justify-content-around'>
                        <input className='col-4' type='submit'></input>
                        {/* <button className='col-6'>registrate</button> */}
                    </div>
                </form>
            </div>
        </Layout>
    )
}