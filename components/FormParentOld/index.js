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
    return (

        <div>
            <legent>Ingresar los datos del padre o tutor</legent>

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
                            type="email"
                            className="form-control"
                            id="email-parent"
                            placeholder="Correo electrónico" />
                        <label htmlFor="email-parent">Correo electrónico</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="number"
                            className="form-control"
                            id="phone"
                            placeholder="Teléfono" />
                        <label htmlFor="phone">Teléfono</label>
                    </div>
                </div>
            </div>

        </div>

    )
}