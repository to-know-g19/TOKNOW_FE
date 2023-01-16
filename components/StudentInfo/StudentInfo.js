import React from 'react'

export default function StudentInfo({student}) {
    const {name, lastNameA,  lastNameB, matricula, dateOfBirth } = student 
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
                                name='lastNameA'
                                className="form-control"
                                placeholder='Apellido Paterno'
                                >{lastNameA}</span>
                            
                            <label>Apellido Paterno</label>
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

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <span
                                name='matricula'
                                className="form-control"
                                placeholder='Matrícula'
                                >{matricula}</span>
                            <label>Matrícula</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <span
                                type='date'
                                name='dateOfBirth'
                                className="form-control"
                                placeholder='Ej. 24011996'
                                >{dateOfBirth}</span>
                            <label>Fecha nacimiento</label>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}
