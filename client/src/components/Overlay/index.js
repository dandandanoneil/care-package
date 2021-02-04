import React from 'react'
import {Card, CardDeck} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const Overlay = () => {
    return (
//         <div>
//             <>
//   <Card>
//     <Card.Img variant="top" src="https://149354016.v2.pressablecdn.com/wp-content/uploads/2019/06/community_agreements_feature.jpg" />
//     <Card.Body>
//       <Card.Text>
//       Listings
//       </Card.Text>
//     </Card.Body>
//   </Card>
// </>

// <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="https://godolly.com/wp-content/uploads/2019/04/9B90AF87-8EFF-4C73-BAB0-0B093BAA101D.jpeg" />
//   <Card.Body>
//     <Card.Title>Leather Couch</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">See post</Button>
//   </Card.Body>
// </Card>

// <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="https://www.sefiles.net/merchant/1929/images/site/SouthPhillypics003.jpg" />
//   <Card.Body>
//     <Card.Title>Kid's Bike</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">See post</Button>
//   </Card.Body>
// </Card>

// <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="https://www.americansurplus.com/_resources/images/product/novaWallMountFan.png" />
//   <Card.Body>
//     <Card.Title>Metal floor fan</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">See post</Button>
//   </Card.Body>
// </Card>
        

//         </div>

        <div>
            <h1 className= "d-flex justify-content-center mt-4">Search Results</h1> <br></br>
<CardDeck> 
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
  </div>
    )
}

export default Overlay
