import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalCart({ ...props }) {
  return (
    <div>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Eliminar producto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Desea eliminar el producto seleccionado?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="btn btn-danger">Eliminar</Button>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalCart;
