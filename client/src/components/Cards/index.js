import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'



const Cards = (props) => {

  return (

    <div>

      <CardDeck className="mb-5">
        <Card>
          <Card.Img variant="top" src="https://godolly.com/wp-content/uploads/2019/04/9B90AF87-8EFF-4C73-BAB0-0B093BAA101D.jpeg" />
          <Card.Body>
            <Card.Title>Leather Couch</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://www.sefiles.net/merchant/1929/images/site/SouthPhillypics003.jpg" />
          <Card.Body>
            <Card.Title>Kids bicycle</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
        content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://i.ebayimg.com/images/g/S0sAAOSwwgddC65r/s-l640.jpg" />
          <Card.Body>
            <Card.Title>Floor metal fan</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <ul style={{ listStyleType: "none" }}>
        {props.searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Cards
