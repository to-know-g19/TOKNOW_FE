/* default */
import { useRouter } from 'next/router'
import React from 'react'

/* package */
import { useForm } from "react-hook-form"
import {
    Form,
    legend,
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
        let result = await fetch('https://api.2know.today/user', {
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
                    <legend>
                        Datos del alumno
                    </legend>


                    <Col md={6}>
                        <FormGroup floating>
                            <Input
                                id='name'
                                name='Nombre'
                                placeholder='Nombre'
                                type="text" />
                            <Label for="name">Nombre</Label>
                            <FormFeedback>
                                message
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup floating>
                            <Input
                                id='lastNameA'
                                name='Apellido paterno'
                                placeholder='Apellido paterno'
                                type="text" />
                            <Label for='lastNameA'>Apellido paterno</Label>
                            <FormFeedback>
                                message
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup floating>
                            <Input
                                id='lastNameB'
                                name='Apellido materno'
                                placeholder='Apellido materno'
                                type="text" />
                            <Label for='lastNameB'>Apellido materno</Label>
                            <FormFeedback>
                                message
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup floating>
                            <Input
                                id='enrollment'
                                name='enrollment'
                                placeholder='Matrícula'
                                type="text" />
                            <Label for='enrollment'>Matrícula</Label>
                            <FormFeedback>
                                message
                            </FormFeedback>
                        </FormGroup>
                        <Row>
                            <Col md={4}>
                                <FormGroup floating>

                                    <Input
                                        id="exampleCity"
                                        name="city"
                                        placeholder='Fecha de nacimiento'
                                        type='date'
                                    />
                                    <Label for="exampleCity">
                                        Fecha de nacimiento
                                    </Label>
                                    <FormFeedback>
                                        message
                                    </FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup floating>
                                    <Input
                                        id="generation"
                                        name="generation"
                                        placeholder='Generación'
                                        type="select"
                                    >
                                        <option>2022 - 2023</option>
                                        <option>2023 - 2024</option>
                                    </Input>
                                    <Label for="generation">
                                        Generación
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup floating>
                                    <Input
                                        id="gruop"
                                        name="gruop"
                                        placeholder='Grupo'
                                        type="select"
                                    >
                                        <option>1 A</option>
                                    </Input>
                                    <Label for="gruop">
                                        Grupo
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="row-cols-lg-auto g-3 align-items-center">
                            <Col>
                                <FormText>Tienes hermanos en la escuela</FormText>
                            </Col>
                            <Col>
                                <FormGroup check>
                                    <Input
                                        name="radio1"
                                        type="radio"
                                    />
                                    {' '}
                                    <Label check>Si</Label>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup check>
                                    <Input
                                        name="radio1"
                                        type="radio"
                                    />
                                    {' '}
                                    <Label check>No</Label>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Col >

                </Row>

                <Row>
                    <Col>
                        <legend> Datos del padre o tutor</legend>
                        <FormGroup floating>
                            <Input
                                id="exampleSearch"
                                name="search"
                                placeholder="Ingresa el correo del padre o tutor"
                                type="search"
                            /><Label for="exampleSearch">
                                Ingresa el correo del padre o tutor
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <legend> Datos del padre o tutor</legend>
                        <div>
                            <div>imagen de perfil</div>
                            <div>
                                <h4>Nombre Completo</h4>
                                <p>usuario@correo.com</p>
                                <p>55 4573 1307</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Button>Guardar</Button>
                    </Col>
                </Row>
                <Row>
                <Col md={6}>
                        <FormGroup floating>
                            <Input
                                id='name'
                                name='Nombre'
                                placeholder='Nombre'
                                type="text" />
                            <Label for="name">Nombre</Label>
                            <FormFeedback>
                                message
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup floating>
                            <Input
                                id='lastNameA'
                                name='Apellido paterno'
                                placeholder='Apellido paterno'
                                type="text" />
                            <Label for='lastNameA'>Apellido paterno</Label>
                            <FormFeedback>
                                message
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup floating>
                            <Input
                                id='lastNameB'
                                name='Apellido materno'
                                placeholder='Apellido materno'
                                type="text" />
                            <Label for='lastNameB'>Apellido materno</Label>
                            <FormFeedback>
                                message
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup floating>
                            <Input
                                id='email'
                                name='enrollment'
                                placeholder='Correo electrónico'
                                type="email" />
                            <Label for='email'>Correo electrónico</Label>
                            <FormFeedback>
                                message
                            </FormFeedback>
                        </FormGroup>

                        <FormGroup floating>
                            <Input
                                id='phone'
                                name='phone'
                                placeholder='Teléfono'
                                type="number" />
                            <Label for='phone'>Teléfono</Label>
                            <FormFeedback>
                                message
                            </FormFeedback>
                        </FormGroup>
                        
                        
                        
                    </Col >
                </Row>

                <Row >
                <Col>
                    <Button type='sumit'>Guardar</Button>
                    </Col>
                </Row>
            </Form>
        </Layout>
    )
}