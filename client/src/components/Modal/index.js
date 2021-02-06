import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Signup from '../SignupForm'
import "./style.css";


function Modals() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div className= "d-flex justify-content-center">
        <Button style={{ color: "white"}} variant="custom" onClick={handleShow} >
          Sign Up
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign up and start sharing!</Modal.Title>
          </Modal.Header>
          <Modal.Body> <Signup /> </Modal.Body>
        </Modal>
        
      </div>
    );
  }
  
 export default Modals

