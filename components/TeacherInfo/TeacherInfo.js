import React from 'react'

export default function TeacherInfo() {
    return (

        <div className='d-flex col-12  '>
            {/* <div className='col-lg-1 '>
                <Link className='col-lg-12' href='/teachers'><button className='col-12'>profesores</button></Link>
            </div> */}
            <form className='d-flex mt-3 col-10 flex-column align-items-center justify-content-center'>
                <div className='col-10 d-flex flex-wrap justify-content-around'>

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <input
                                name='name'
                                className="form-control"
                                placeholder='Nombre'
                                 ></input>
                           
                            <label>Nombre</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                name='email'
                                className="form-control"
                                placeholder='Correo'
                                ></input>
                            
                            <label>Correo</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <input
                                name='lastNameA'
                                className="form-control"
                                placeholder='Apellido Paterno'
                                ></input>
                            
                            <label>Apellido Paterno</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column '>
                        <div className="form-floating mb-3">
                            <input
                                type='number'
                                name='phone'
                                className="form-control"
                                placeholder='Teléfono'
                                ></input>
                            <label>Teléfono</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <input
                                name='lastNameB'
                                className="form-control"
                                placeholder='Apellido Materno'
                                ></input>
                            
                            <label>Apellido Materno</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <input
                                name='matricula'
                                className="form-control"
                                placeholder='Matrícula'
                                ></input>
                            <label>Matrícula</label>
                        </div>
                    </div>



                    <div className='d-flex col-5 flex-column'>
                        {/* hay que ver cómo vamos a implementar la fecha */}
                        <div className="form-floating mb-3">
                            <input
                                type='number'
                                name='citydateOfBirth'
                                className="form-control"
                                placeholder='Ej. 24011996'
                                ></input>
                            <label>Fecha nacimiento</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        {/* tiene que cumplir uno de la lista en el back. hacer con desplegable */}
                        <div className="form-floating mb-3">
                            <select
                                name='tipoProfesor'
                                className="form-control form-select"
                                >
                                
                            </select>
                            
                            <label>Tipo de profesor</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <input
                                name='bio'
                                className="form-control"
                                placeholder='Bio'
                                ></input>
                            <label>Bio</label>
                        </div>
                    </div>

                    <div className='d-flex col-5 flex-column'>
                        <div className="form-floating mb-3">
                            <select
                                name='grade'
                                className="form-control form-select"
                               >
                               
                            </select>
                            
                            <label>Grado</label>
                        </div>
                    </div>

                    {/* <div className='d-flex col-6 flex-column'>
                        <label>Grupo</label>
                        <input name='' {...register("")} placeholder='Grupo'></input>
                        en el modelo se toma de otra colección
                    </div> */}

                </div>

                <div className='d-flex col-lg-4 justify-content-around'>
                    <input className='btn col-12' type='submit'></input>
                </div>

            </form>
        </div>
    )
}
