import React, { useEffect, useState } from 'react'
import { Modal, Button} from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryAPI, getCategoryAPI, removeCategoryAPI } from '../Services/allAPI';

function Categories() {
  const [allCategories,setAllCategories] = useState([])
  const [categoryName,SetCategoryName] = useState("")

  const [show, setShow] = useState(false);
  console.log(allCategories);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    getAllCategory()
  },[])

  const getAllCategory = async () =>{
    try {
      const result = await getCategoryAPI()
      setAllCategories(result.data)
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddCategory = async () =>{
    if(categoryName){
      // api call
      try {
        await addCategoryAPI({categoryName,allVideos:[]})
        handleClose()
        getAllCategory()
      } catch (error) {
        console.log(error);
      }
    }else{
      toast.warning("Please fill the form completely!!")
    }
  }

  const handleRemoveCategory = async(categoryId)=>{
    try {
      await removeCategoryAPI(categoryId)
      getAllCategory()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className='d-flex justify-content-around '>
        <h3>All Categories</h3>
        <button onClick={handleShow} style={{ width: "50px", height: "50px" }} className='btn btn-info rounded-circle fw-bolder fs-5'>+</button>
      </div>

      <div className='container-fluid mt-3'>
        {
          allCategories.length>0?
          allCategories?.map(item=>(
            <div key={item?.id} className='border rounded p-3 mb-2'>
              <div className='d-flex justify-content-between '>
                <h5>{item?.categoryName}</h5>
                <button onClick={()=>handleRemoveCategory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
              </div>
            </div>
          ))
          :
          <div className='text-danger fw-bolder '>
            No categories are added
          </div>
        }
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
          >
            <Form.Control onChange={e=>SetCategoryName(e.target.value)} type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} className='btn btn-info '>Add</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </div>
  )
}

export default Categories
