import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import TermsOfUse from '../../pages/TermsOfUse'


function Modals() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div className= "d-flex justify-content-center">
        <Button variant="primary " onClick={handleShow} >
          Terms of Use
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Body> <TermsOfUse /> </Modal.Body>
        </Modal>
        
      </div>
    );
  }
  
 export default Modals

