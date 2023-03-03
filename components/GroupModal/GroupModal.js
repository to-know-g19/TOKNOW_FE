import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import GroupFormModal from '../GroupFormModal';
import {BsPlusCircle } from 'react-icons/bs';

class ModalExample extends React.Component {
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
      <div className='d-flex align-items-center'>
        <Button className="bg-success" onClick={this.toggle}> Grupo <BsPlusCircle/>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Crea un nuevo grupo</ModalHeader>
          <ModalBody>
            <GroupFormModal/>
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

export default ModalExample;