import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import GroupFormModal from '../GroupFormModal';
import { BsFillTrashFill } from "react-icons/bs";
import DeleteRequest from '../DeleteRequest/deleteRequest';

class DeleteModal extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.toggle} className='btn btn-outline-danger'>
                    <BsFillTrashFill />{this.props.buttonLabel}
                </button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Crea un nuevo grupo</ModalHeader>
                    <ModalBody>
                      <DeleteRequest/>
                    </ModalBody>
                    {/* <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Aceptar</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
          </ModalFooter> */}
                </Modal>
            </div>
        );
    }
}

export default DeleteModal;