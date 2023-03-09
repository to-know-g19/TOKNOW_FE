import React from 'react'
import { FaUserCircle } from 'react-icons/fa';

export default function Index() {
    return (
        <div>
            <div className='d-flex mb-4 mt-3 justify-content-center'>


                <div className='card-announce d-flex col-11 col-lg-7 bg-light'>
                    <div className='d-flex flex-column flex-lg-column col-12 col-lg-12'>
                        <div className='d-flex'>
                            <div className='p-3 d-flex justify-content-center align-items-center '>
                                <FaUserCircle className='card-announce__user-img' />
                            </div>
                            <div className='d-flex flex-column '>
                                <div className='pt-3'>
                                    Carlos Francisco Arteaga Peregrina
                                </div>
                                <div>
                                    09 de marzo 2023
                                </div>
                            </div>
                            <div className='d-flex p-3 '>
                                Administrador
                            </div>
                        </div>
                        <div className='p-3 p-lg-4'>
                            Suspensión de labores el día 20 de noviembre
                            Nuestra aplicación de escuela digital te brinda la oportunidad de estar al tanto del progreso de tu hija o hijo en cualquier momento y lugar, simplemente ingresa a la plataforma y encuentra toda la información que necesitas, desde calificaciones y tareas, hasta notificaciones sobre eventos y actividades escolares. Sabemos que la educación de tus hijos es una prioridad, es por eso que hemos hecho que sea muy fácil y accesible para los padres el seguir acompañandolos en su proceso de aprendizaje.

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
