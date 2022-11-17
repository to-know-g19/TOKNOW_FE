/* package */
import { useForm } from "react-hook-form"
import {    
    Button,
    Row,
    Col,
    Label,
    Input,
    FormGroup,
    FormFeedback, 
    legend,  
} from 'reactstrap';

export default function FormParent() {
    return(
        <>
        <Row><legend> Datos del padre o tutor</legend>
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
            </>
    )
}