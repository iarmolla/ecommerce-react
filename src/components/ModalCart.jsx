import React,{ useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalCart({ ...props }) {
 const [product, setProduct] = useState(props.stock)
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
          <Button onClick={() => {
            const aux = props.stock            
            props.modify(aux)       
            props.onHide()           
            props.set(props.total -= props.price)  
            props.delete(props.product)      
          }} className="btn btn-danger">Eliminar</Button>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalCart;
