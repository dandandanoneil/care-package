import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import SignupForm from '../SignupForm'
import "./style.css";

import buttonImage from "./sign-up.png";

function ModalSignUp() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div className= "d-flex justify-content-center">
        <a onClick={handleShow} >
          <img className= "img-button" src={buttonImage} alt="Sign Up" />
        </a>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Body> <SignupForm /> </Modal.Body>
        </Modal>
      </div>
    );
  }
  
 export default ModalSignUp;

