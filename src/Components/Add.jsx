import React, { useState } from 'react'
import {Modal, Button, FloatingLabel, Form} from 'react-bootstrap';

function Add() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Videos</h5>
        <button className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5' onClick={handleShow}>+</button>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the following details!!!</p>
          <FloatingLabel controlId="floatingInput" label="Video Caption" className="mb-3">
            <Form.Control type="email" placeholder="Video Caption" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Image URL" className="mb-3">
            <Form.Control type="email" placeholder="Image URL" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="YouTube URL" className="mb-3">
            <Form.Control type="email" placeholder="YouTube URL" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
