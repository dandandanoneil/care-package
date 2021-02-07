import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Mission from '../../pages/Mission'
import "./style.css";

import buttonImage from "./our-mission.png";

function Modals() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div className= "d-flex justify-content-center">
        <a onClick={handleShow} >
          <img src={buttonImage} alt="Our Mission" />
        </a>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Body> <Mission /> </Modal.Body>
        </Modal>
      </div>
    );
  }
  
 export default Modals

