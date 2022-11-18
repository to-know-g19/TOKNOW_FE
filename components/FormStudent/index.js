/* package */
export default function FormStudent( Checked ) {

    console.log(Checked.onChange)
    return (
        <>
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
                            <input 
                            className="form-check-input" 
                            type="radio" 
                            name="parent" 
                            id="yes" 
                            checked={ Checked.onChange == 1 ? true : false }
                            
                             />
                            <label className="form-check-label" htmlFor="yes">
                                Default radio
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="parent"
                                id="no"
                                checked={ Checked.onChange  ==  2 ? true : false }
                               
                                 />
                            <label className="form-check-label" htmlFor="no">
                                Default checked radio
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}