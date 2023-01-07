import React from 'react'
import Login from '../containers/Login'
import Modal from "react-bootstrap/Modal";

function ModalLogin({ ...props }) {
    return (
        <div>
            <Modal  {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Login footer={false}></Login>
            </Modal>
        </div>
    )
}

export default ModalLogin