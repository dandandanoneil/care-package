import React from "react";
import "./ActivePostsCard.css";
import { Card, Button } from "react-bootstrap";


function ActivePostsCard() {
    return (
            <Card className="flex" border="danger" style={{ width: '40rem' }}>
            <Card.Header style={{ color: "white", backgroundColor: "#d05d11"}} as="h5">My Ask/Offer</Card.Header>
            <Card.Body style={{ color: "white", backgroundColor: "#ca885b"}}>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button style={{ color: "white", backgroundColor: "#d05d11" }} variant="custom">See Post</Button>
            </Card.Body>
            </Card>
  );
}

export default ActivePostsCard;