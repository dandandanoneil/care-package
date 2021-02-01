import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';

function Wrapper(props) {
  return (
    <Container fluid>
      {props.children}
    </Container>
  );
}

export default Wrapper;
