import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { removeVideoAPI } from '../Services/allAPI';



function VideoCard({displayData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRemoveVideo = async (videoId)=>{
    try {
      const  result = await removeVideoAPI(videoId)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Card>
      <Card.Img onClick={handleShow} height={'131px'} variant="top" src={displayData?.imgUrl} />
      <Card.Body>
        <Card.Title  className='d-flex justify-content-between'>
          <p style={{fontSize:"13px", paddingTop:"13px"}}>{displayData?.caption}</p>
          <button onClick={()=>handleRemoveVideo(displayData?.id)} className='btn'>
            <i className='fa-solid fa-trash text-danger '></i>
          </button>
        </Card.Title>
      </Card.Body>
      </Card>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="360" src={`${displayData?.youTubeUrl}?autoplay=1`} title="caption" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard
