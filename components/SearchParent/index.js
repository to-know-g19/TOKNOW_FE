/* default */
import { useState } from 'react'
/* package */
import {
    Button,
    Row,
    Col,
    FormGroup,
    Input,
    Label,
} from 'reactstrap';

export default function SearchParent() {

    const [searchParent, setSearchParent]  = useState(null)
    console.log(searchParent)
    const thereIsParent = e =>{
        setSearchParent(e.target.value)
        console.log(searchParent)     
    }

    return (
        <>
            <Row>
                <Col>
                    <legend> Datos del padre o tutor</legend>
                    <FormGroup floating>
                        <Input
                            id="exampleSearch"
                            name="search"
                            placeholder="Ingresa el correo del padre o tutor"
                            type="search"
                        />
                        <Label for="exampleSearch">
                            Ingresa el correo del padre o tutor
                        </Label>
                        <button onClick={thereIsParent} >buscar</button>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>                
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
            
        </>
    )
}