import React, {useState} from 'react'
import {Form,Row,Col} from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import "./filter.css";

// const Filter = () => {
//     return (
//       <Modal.Dialog>
//   <Modal.Body>
//   <div>
//       <Form>
//         <h5>Type</h5>
//   <Form.Check inline label="Goods" />
//   <Form.Check inline label="Services" />
// </Form>

// <Dropdown>
//   <Dropdown.Toggle variant="dark" id="dropdown-basic">
//    Category
//   </Dropdown.Toggle>
      
//   <Dropdown.Menu>
//   <Form>
//   <Form.Check inline label="Furniture" />
//   <Form.Check inline label="Kitchen" />
//   <Form.Check inline label="Electronics" />
//   <Form.Check inline label="Essentials" />
//   <Form.Check inline label="Clothes" />
// </Form>
//   </Dropdown.Menu>
// </Dropdown>

// <Form>
// <Form.Check inline label="Has Image" />
//   <Form.Check inline label="Available Now" />
//   <Form.Check inline label="Still Available" />
 
// </Form>


// <Button>Apply</Button>
      
// </div>  
//   </Modal.Body>


// </Modal.Dialog>

      
//     )
// }

// export default Filter

const  Filter = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{ color: "white"}} variant="custom" onClick={handleShow}>
        Filter
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filter Search results</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div>
       <Form>
         <h5>Type</h5>
   <Form.Check inline label="Goods" />
   <Form.Check inline label="Services" />

   <br></br>  <br></br>

   <h5>Close to</h5>
   <input placeholder='Zipcode' />
   
 </Form>
 
 <br></br>

 <Dropdown>
   <Dropdown.Toggle variant="dark" id="dropdown-basic">
    Category
   </Dropdown.Toggle>
      
   <Dropdown.Menu>
   <Form>
   <Form.Check inline label="Furniture" />
   <Form.Check inline label="Kitchen" />
   <Form.Check inline label="Electronics" />
   <Form.Check inline label="Essentials" />
   <Form.Check inline label="Clothes" />
 </Form>
   </Dropdown.Menu>
 </Dropdown>
 <br></br>
 <Form>
   <h5>Preferences</h5>
 <Form.Check inline label="Has Image" />
   <Form.Check inline label="Available Now" />
   <Form.Check inline label="Still Available" />
 
 </Form>
      
 </div>  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Filter