import React from "react";
import "./MessageCard.css";
import { Card, ListGroup, Button } from "react-bootstrap";
import axios from "axios";

function MessageCard() {

  function onClick() {
    axios.post("/api/user/logout", {})
    .then( (res) => res.logout() )
    .catch(err => console.log(err) );
  }

  return (
    <div>
          <Card border="warning" style={{ width: '18rem' }}>
          <Card.Header style={{ color: "white", backgroundColor: "#d0c311"}} as="h5">Messages</Card.Header>
          <Card.Body style={{ color: "white", backgroundColor: "#dfd983"}} >
            <ListGroup variant="flush">
            <ListGroup.Item style={{ color: "#4c68a5", backgroundColor: "#dfd983", display: 'flex', justifyContent: 'center'}}>Message 1</ListGroup.Item>
              <textarea className="form-control" rows="1" />
              <Button size= "sm" style={{ color: "white", backgroundColor: "#d0c311"}} variant="custom" onClick={onClick}>Respond</Button>
            <ListGroup.Item style={{ color: "white", textShadow: "2px 2px 4px #000000", backgroundColor: "#dfd983", display: 'flex', justifyContent: 'center'}}>Message 2</ListGroup.Item>
              <textarea className="form-control" rows="1" />
              <Button size= "sm" style={{ color: "white", backgroundColor: "#d0c311"}} variant="custom" onClick={onClick}>Respond</Button>
            <ListGroup.Item style={{ color: "white", fontWeight: "bold", backgroundColor: "#dfd983", display: 'flex', justifyContent: 'center'}}>Message 3</ListGroup.Item>
              <textarea className="form-control" rows="1" />
              <Button size= "sm" style={{ color: "white", backgroundColor: "#d0c311"}} variant="custom" onClick={onClick}>Respond</Button>
          </ListGroup>
          </Card.Body>
        </Card>
    </div>
  );
}

export default MessageCard;