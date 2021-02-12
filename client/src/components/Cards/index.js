import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import "./Cards.css";

const Cards = (props) => {
  return (
    <div>
      <Card className= "card-shad" border="danger" style={{ width: "256px", height: "512px" }}>
        <Card.Header style={{ textAlign: "center", color: "white", backgroundColor: "#d05d11", fontWeight: "bold"}} >{props.item.title}</Card.Header>
        <Card.Img variant="top" src={props.item.image} />
        <Card.Body>
          <Card.Text>
            {props.item.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ textAlign: "center", color: "white", backgroundColor: "#d05d11", fontWeight: "bold"}}>
          <small>{props.item.update}</small>
        </Card.Footer>
      </Card>
    </div>
  )
}
export default Cards