import React from 'react'
import { FaUserCircle } from 'react-icons/fa';

export default function Index() {
    return (
        <div>
            <div className='d-flex justify-content-center'>


                <div className='card-announce d-flex col-lg-7 bg-light'>
                    <div className='d-flex p-4 col-lg-1 justify-content-center align-items-center'>
                        <FaUserCircle />
                    </div>
                    <div className='d-flex flex-lg-column col-lg-11'>
                        <div className='d-flex'>
                            <div className='d-flex flex-lg-column justify-content-center'>
                                <div className='d-flex pt-3'>
                                    Carlos Francisco Arteaga Peregrina
                                </div>
                                <div>
                                    09 de marzo 2023
                                </div>
                            </div>
                            <div className='d-flex p-3 justify-content-center'>
                                Administrador
                            </div>
                        </div>
                        <div className='pt-3 pb-5'>
                            Suspensión de labores el día 20 de noviembre
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
