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
    <div className="d-flex justify-content-center signup-btn">
      <button onClick={handleShow} style={{ background: "none", border: "none" }}>
        <img className="img-button" src={buttonImage} alt="Sign Up" />
      </button>

      <Modal show={show} onHide={handleClose} className="d-flex">
        <SignupForm />
      </Modal>
    </div>
  );
}

export default ModalSignUp;

