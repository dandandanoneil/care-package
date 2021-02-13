import React from 'react';
import Card from 'react-bootstrap/Card';

import "./Cards.css";

const Cards = (props) => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col lg="6">
          <Card className="card-shad" border="danger" style={{ width: "256px", height: "475px", marginBottom: "15px" }}>
            <Card.Header style={{ textAlign: "center", color: "white", backgroundColor: "#d05d11", fontWeight: "bold" }} >{props.item.title}</Card.Header>
            <Card.Img variant="top" src={props.item.image} />
            <Card.Body>
              <Card.Text>
                {props.item.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer style={{ textAlign: "center", color: "white", backgroundColor: "#d05d11", fontWeight: "bold" }}>
              <small>{props.item.update}</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
export default Cards