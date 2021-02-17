import React from "react";
import Button from 'react-bootstrap/Button'
import "./Form.css";

export function FormBtn(props) {
  return (
    <Button className='form-submit-btn' size="lg" variant="custom" {...props} style={{ float: "center", marginBottom: 10, width: '100px', height: '50px', color: 'white', background: '#4c68a5' }} >
      {props.children}
    </Button>
  );
}
