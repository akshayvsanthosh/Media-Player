import React, { useState } from 'react'
import {Modal, Button, FloatingLabel, Form} from 'react-bootstrap';

function Add() {
    const [invalidYouTubeUrl,setInvalidYouTubeUrl] = useState(false)
    const [videoDetails,setVideoDetails] = useState({
      caption:"",imgUrl:"",youTubeUrl:""
    })
    const [show, setShow] = useState(false);

    console.log(videoDetails);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const getEmbedURL = (link) => {
      // https://www.youtube.com/watch?v=L0yEMl8PXnwc
      // https://www.youtube.com/embed/L0yEMl8PXnw
        if (link.includes("v=")) {
          let videoId = link.split("v=")[1].slice(0,11)
          console.log(videoId);
          setVideoDetails({...videoDetails,youTubeUrl:`https://www.youtube.com/embed/${videoId}`})
          setInvalidYouTubeUrl(false)
        }else{
          setVideoDetails({...videoDetails,youTubeUrl:""})
          setInvalidYouTubeUrl(true)
        }
    }

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
            <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Image URL" className="mb-3">
            <Form.Control onChange={e=>setVideoDetails({...videoDetails,imgUrl:e.target.value})} type="text" placeholder="Image URL" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="YouTube URL" className="mb-3">
            <Form.Control onChange={e=>getEmbedURL(e.target.value)}  type="text" placeholder="YouTube URL" />
          </FloatingLabel>
          {
            invalidYouTubeUrl && <div className='text-danger fw-bolder'>Invalid youtube url</div>
          }
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
