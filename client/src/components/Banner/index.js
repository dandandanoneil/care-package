import React from 'react'
import {Jumbotron, Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const Banner = () => {
    return (
        <div>
            <Jumbotron>
  <h1>About Us</h1>
  <p>
    lorem ipsum dolor sit lorem ipsum dolor lorem ipsum lorem ipsum lorem ipsum  lorem ipsum dolor sit lorem ipsum dolor lorem ipsum lorem ipsum lorem ipsum dolor lorem ipsum dolor sit lorem ipsum dolor lorem ipsum lorem ipsum lorem ipsum dolor dolor
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>

<Jumbotron fluid>
  <Container>
    <h1>About Us</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
        </div>
    )
}

export default Banner
