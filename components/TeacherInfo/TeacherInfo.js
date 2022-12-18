import React from 'react'

export default function TeacherInfo({teacher}) {
    const {name, email, lastNameA, phone, lastNameB, matricula, dateOfBirth, tipoProfesor, bio, grade} = teacher 
    return (

        <div className='d-flex col-12  '>
            {/* <div className='col-lg-1 '>
                <Link className='col-lg-12' href='/teachers'><button className='col-12'>profesores</button></Link>
            </div> */}
            <form className='d-flex mt-3 col-10 flex-column align-items-center justify-content-center'>
                <div className='col-10 d-flex flex-wrap justify-content-around'>

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <span
                                name='name'
                                className="form-control"
                                placeholder='Nombre'
                                 >{`${name}`}</span>
                           
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
                                >{`${email}`}</span>
                            
                            <label>Correo</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <span
                                name='lastNameA'
                                className="form-control"
                                placeholder='Apellido Paterno'
                                >{`${lastNameA}`}</span>
                            
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
                                >{`${phone}`}</span>
                            <label>Teléfono</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <span
                                name='lastNameB'
                                className="form-control"
                                placeholder='Apellido Materno'
                                >{`${lastNameB}`}</span>
                            
                            <label>Apellido Materno</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <span
                                name='matricula'
                                className="form-control"
                                placeholder='Matrícula'
                                >{`${matricula}`}</span>
                            <label>Matrícula</label>
                        </div>
                    </div>



                    <div className='d-flex col-5 flex-column'>
                        {/* hay que ver cómo vamos a implementar la fecha */}
                        <div className="form-floating mb-3">
                            <span
                                type='number'
                                name='dateOfBirth'
                                className="form-control"
                                placeholder='Ej. 24011996'
                                >{`${dateOfBirth}`}</span>
                            <label>Fecha nacimiento</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        {/* tiene que cumplir uno de la lista en el back. hacer con desplegable */}
                        <div className="form-floating mb-3">
                            <span
                                name='tipoProfesor'
                                className="form-control"
                                >{`${tipoProfesor}`}</span>
                            
                            <label>Tipo de profesor</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <span
                                name='bio'
                                className="form-control"
                                placeholder='Bio'
                                >{`${bio}`}</span>
                            <label>Bio</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <span
                                name='grade'
                                className="form-control"
                               >{`${grade}`}</span>
                            
                            <label>Grado</label>
                        </div>
                    </div>


                </div>

            </form>
        </div>
    )
}
