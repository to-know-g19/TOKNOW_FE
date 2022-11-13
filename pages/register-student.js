/* default */
import { useRouter } from 'next/router'
import React from 'react'

/* package */
import { useForm } from "react-hook-form"
import {
    Form,
    Button,
    Row,
    Col,
    Label,
    Input,
    FormGroup,
    FormFeedback,
    FormText,
} from 'reactstrap';


/* components */
import Layout from '../components/Layout'

/* styles */
import 'bootstrap/dist/css/bootstrap.css'

/**
 * RegisterStudent
 * @param
 * @param
 * @param
 * @returns Register
 */

export default function RegisterStudent() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()

    const onSubmit = async data => {
        const token = localStorage.getItem('token')
        let result = await fetch('http://localhost:8080/user', {
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
        const studentInfo = result.json()

        router.push("/registerstudent")
    }


    return (
        <Layout>
            <div>
                <div><a href="">agregar usuario</a></div>
                <div><a href="">return</a></div>
            </div>


            <Form onSubmit={handleSubmit(onSubmit)}>

                <Row>
                    <FormText>
                        Datos del alumno
                    </FormText>
                    <Col md={6}>
                        <div>
                            <Label htmlFor="">Nombre</Label>
                            <Input type="text" />
                            <FormFeedback>
                                message
                            </FormFeedback>
                        </div>
                        <div>
                            <Label htmlFor="">Apellido paterno</Label>
                            <Input type="text" />
                            <FormFeedback>
                                message
                            </FormFeedback>
                        </div>
                        <div>
                            <Label htmlFor="">Apellido materno</Label>
                            <Input type="text" />
                            <FormFeedback>
                                message
                            </FormFeedback>
                        </div>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Label htmlFor="">Matrícula</Label>
                            <Input type="text" />
                            <FormFeedback>
                                message
                            </FormFeedback>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Label for="exampleSelect">Género</Label>
                                <Input
                                    id="exampleSelect"
                                    name="select"
                                    type="select"
                                >
                                    <option>
                                        1
                                    </option>
                                    <option>
                                        2
                                    </option></Input>
                                <FormFeedback>
                                    message
                                </FormFeedback>
                            </Col>
                            <Col md={6}>
                                <Label for="exampleDatetime" >Fecha de nacimiento</Label>
                                <Input id="exampleDatetime"
                                    name="datetime"
                                    placeholder="dd/mm/aaaa"
                                    type="datetime" />
                                <FormFeedback>
                                    message
                                </FormFeedback>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Label htmlFor="">Ciclo</Label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Selecciona</option>
                                    <option value="2022 -2023">2022 -2023</option>
                                    <option value="2023 -2024">2023 -2024</option>
                                </select>
                                <FormFeedback>
                                    message
                                </FormFeedback>
                            </Col>
                            <Col md={6}>
                                <Label htmlFor="">Grupo</Label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Selecciona un grupo</option>
                                    <option value="1A">1A</option>

                                </select>
                                <FormFeedback>
                                    message
                                </FormFeedback>
                            </Col>
                        </Row>
                    </Col >
                    <Row className="row-cols-lg-auto g-3 align-items-center">
                        Tienes hermanos en la escuela
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                si
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                            <Label class="form-check-label" for="flexCheckChecked">
                                no
                            </Label>
                        </div>
                    </Row>
                </Row>

                <Row>
                    <h4>Datos del padre o tutor</h4>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span class="input-group-text" id="basic-addon2">@example.com</span>
                    </div>
                </Row>

                <Row>
                    <h4>Datos del padre o  tutor</h4>
                    <div>
                        <div>imagen de perfil</div>
                        <div>
                            <h4>Nombre Completo</h4>
                            <p>usuario@correo.com</p>
                            <p>55 4573 1307</p>
                        </div>
                    </div>
                </Row>

                <Row >
                    <Input type='submit' />
                </Row>
            </Form>



        </Layout>
    )
}