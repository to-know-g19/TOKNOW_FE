import React from 'react'

export default function ParentInfo({parent}) {
    const {name, email, lastNameA, phone, lastNameB } = parent 
    return (

        <div className='d-flex justify-content-center col-12  '>

            <form className='d-flex mt-3 col-10 flex-column align-items-center justify-content-center'>
                <div className='col-10 d-flex flex-wrap justify-content-around'>

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <span
                                name='name'
                                className="form-control"
                                placeholder='Nombre'
                                 >{name}</span>
                           
                            <label>Nombre</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <span
                                type="email"
                                name='email'
                                className="form-control"
                                placeholder='Correo'
                                >{email}</span>
                            
                            <label>Correo</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <span
                                name='lastNameA'
                                className="form-control"
                                placeholder='Apellido Paterno'
                                >{lastNameA}</span>
                            
                            <label>Apellido Paterno</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column '>
                        <div className="form-floating mb-3">
                            <span
                                type='number'
                                name='phone'
                                className="form-control"
                                placeholder='Teléfono'
                                >{phone}</span>
                            <label>Teléfono</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <span
                                name='lastNameB'
                                className="form-control"
                                placeholder='Apellido Materno'
                                >{lastNameB}</span>
                            
                            <label>Apellido Materno</label>
                        </div>
                    </div>
                    
                </div>

            </form>
        </div>
    )
}

