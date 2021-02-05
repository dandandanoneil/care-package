import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Button from 'react-bootstrap/Button'
import "./BackButton.css";

const BackButton = () =>  {
  return (
   <Button size="lg" variant= "custom" style={{
      width:'100px', height:'50px', color: 'white', background: '#aac9e0;'
    }}>
    Back
    </Button>
  );
}

export default BackButton;