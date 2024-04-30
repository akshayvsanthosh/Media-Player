import React, { useState } from 'react'
import { Modal, Button} from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Categories() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className='d-flex justify-content-around '>
        <h3>All Categories</h3>
        <button onClick={handleShow} style={{ width: "50px", height: "50px" }} className='btn btn-info rounded-circle fw-bolder fs-5'>+</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Category Names"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn btn-info '>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Categories
