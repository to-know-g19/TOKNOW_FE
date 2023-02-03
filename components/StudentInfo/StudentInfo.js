import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import TeacherRectangle from '../teacherRectangle/TeacherRectangle'

export default function StudentInfo({ student }) {
    const { name, lastNameA, lastNameB, matricula, dateOfBirth } = student
    //    aquí todo el router y peticiones para la card del parent
    const router = useRouter()
    const studentId = router.query.studentId
    const groupId = router.query.groupId

    const [parents, setParents] = useState([])

    useEffect(() => {

        const token = localStorage.getItem('token')
        fetch(`https://api.toknow.online/student/${studentId}`, {
            mode: 'cors',
            headers: {
                'Content-type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
        })
            .then((response) => response.json())
            .then(data => {
                if (data.data) {

                    setParents(data.data.studentById.parents)

                }
                console.log("soy la data del hijo del papá", parents)

            })
    }, [router.query])

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

                    {/* link al parent */}

                </div>
                <div className='d-flex align-items-center justify-content-center col-5 flex-column'>
                    <h4>Datos del tutor</h4>
                    {(parents.length) ?
                        parents.map(parent => {
                            return (
                                <Link href="/grouplist/[groupId]/[studentId]/parent/[parentId]"
                                    as={`/grouplist/${groupId}/${studentId}/parent/${parent._id}`} key={parent._id} style={{ textDecoration: 'none' }} >
                                    <TeacherRectangle
                                        key={parent._id}
                                        teacher={parent} />
                                </Link>
                            )
                        }) : <div>
                            <p>Aún no hay un tutor registrado.  </p>
                            <p><Link href="/grouplist/[groupId]/[studentId]/parent/addparent" 
                            as={`/grouplist/${groupId}/${studentId}/parent/addparent`}>
                                Clic para registrar </Link> </p>
                        </div>
                    }
                </div>
            </form>
        </div>
    )
}
