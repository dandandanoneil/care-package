import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Button from 'react-bootstrap/Button'
import "./Form.css";

export function FormBtn(props) {
  return (
    <Button size="lg" variant= "custom" {...props} style={{ float: "center", marginBottom: 10, width:'100px', height:'50px', color: 'white', background: '#aac9e0;' }} >
      {props.children}
    </Button>
  );
}
