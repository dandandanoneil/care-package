import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Buttons = () => {
  const history = useHistory();

  return (
    <Row className="p-5 justify-content-center">
      <Col md="4">
        <Button block variant="none" className="mb-3 big-button" onClick={() => history.push("/create-post")} >Give Something</Button>
      </Col>
      <Col md="4">
          <Button block variant="none" className="mb-3 big-button" onClick={() => history.push("/create-post")} >Ask for Something</Button>
      </Col>
    </Row>
  )
}

export default Buttons
