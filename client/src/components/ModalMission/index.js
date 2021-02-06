import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Mission from '../../pages/Mission'
import "./style.css";

function Modals() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div className= "d-flex justify-content-center">
        <Button style={{ color: "white"}} variant="custom" onClick={handleShow} >
          Our Mission of Giving
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Body> <Mission /> </Modal.Body>
        </Modal>
        
      </div>
    );
  }
  
 export default Modals

