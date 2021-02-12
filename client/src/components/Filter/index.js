import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import "./filter.css";

const Filter = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <div >
      <Button style={{ 
      color: "white",
      backgroundColor: "#d0c311",
     fontWeight: 'bold',
     width: "12rem",
     marginTop: "8px"

      }} variant="custom" onClick={handleShow}>
        Filter
      </Button>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header style={{ textAlign: "center", margin: 'auto' }}>
          <Modal.Title className="d-flex justify-content-center">Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form>
              <h5 className="d-flex justify-content-center" >   <Form.Check inline label="Offers" />
                <Form.Check inline label="Requests" /></h5>

              <br></br>
              <h6 style={{ display: 'inline', fontWeight: 'bold' }} className="mr-5">Type: </h6>
              <Form.Check inline label="Goods" style={{ display: 'inline' }} />
              <Form.Check inline label="Services" style={{ display: 'inline' }} />
              <Form.Check inline label="$$$" style={{ display: 'inline' }} />

              <br></br>  <br></br>

              <h6 style={{ display: 'inline', fontWeight: 'bold' }} className="mr-4" >Close to:</h6>
              <input style={{ display: 'inline' }} placeholder='Zipcode' />

            </Form>

            <br></br>

            <div className="d-flex justify-content-center">
              <Dropdown style={{ display: 'inline' }}>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  Goods Category
   </Dropdown.Toggle>


                <Dropdown.Menu>
                  <Form>
                    <Form.Check inline label="" />
                    <Form.Check inline label="Kitchen" />
                    <Form.Check inline label="Electronics" />
                    <Form.Check inline label="Essentials" />
                    <Form.Check inline label="Clothes" />
                  </Form>
                </Dropdown.Menu>
              </Dropdown> &nbsp;&nbsp;

 <Dropdown style={{ display: 'inline' }}>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  Services Category
   </Dropdown.Toggle>


                <Dropdown.Menu>
                  <Form>
                    <Form.Check inline label="Legal" />
                    <Form.Check inline label="Taxes" />
                    <Form.Check inline label="Consulting" />
                    <Form.Check inline label="Mental Health" />
                    <Form.Check inline label="Financial guidance" />
                  </Form>
                </Dropdown.Menu>
              </Dropdown>

              <br></br> <br></br>


            </div>
            <br></br>
            <Form>
              <h6 style={{ display: 'inline', fontWeight: 'bold' }} className="mr-1">Preferences:</h6>
              <Form.Check inline label="Has Image" />
              <Form.Check inline label="Available Now" />
              <Form.Check inline label="Still Available" />
              <Form.Check inline label="Urgent Need" />

            </Form>
          </div>
        </Modal.Body >
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Filter