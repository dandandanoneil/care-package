import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
const Cards = (props) => {
  return (
    <div>
      <Card style={{ width: "256px", height: "512px" }}>
        <Card.Img variant="top" src={props.item.image} />
        <Card.Body>
          <Card.Title>{props.item.title}</Card.Title>
          <Card.Text>
            {props.item.text}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{props.item.update}</small>
        </Card.Footer>
      </Card>
    </div>
  )
}
export default Cards