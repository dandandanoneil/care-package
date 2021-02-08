import React from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function FormRequestGood() {
  return (
    <Card id="request-good-card" className="m-1">
        <Card.Header>Request Goods</Card.Header>
        <Form id="request-good" className="p-3">
            <Form.Group as={Row} controlId="title">
                <Form.Label column sm="2" className="text-right">Item Title:</Form.Label>
                <Col sm="10"><Form.Control type="text" /></Col>
            </Form.Group>
            <Form.Group as={Row} controlId="category">
                <Form.Label column sm="2" className="text-right">Category:</Form.Label>
                <Col sm="10">
                    <Form.Control as="select">
                        <option selected disabled>Select a category</option>
                        <option>Kitchen</option>
                        <option>Tools</option>
                        <option>Garden</option>
                        <option>Clothing</option>
                        <option>Furniture</option>
                        <option>Automotive</option>
                        <option>Entertainment</option>
                        <option>Household Supplies</option>
                        <option>Toiletries</option>
                        <option>Baby & Child</option>
                        <option>Electronic</option>
                        <option>Appliances</option>
                        <option>Other</option>
                    </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="description">
                <Col sm="2" className="text-right"><Form.Label>Description:</Form.Label></Col>
                <Col sm="10"><Form.Control as="textarea" rows={3} /></Col>
            </Form.Group>
            <Form.Group as={Row} controlId="image">
                <Form.Label column sm="2" className="text-right">Image:</Form.Label>
                <Col sm="7"><Form.File id="image-upload" label="Upload an example image" custom /></Col>
                <Form.Text as={Col}><em>(optional)</em></Form.Text>
            </Form.Group>
            <Form.Group as={Row} controlId="location">
                <Form.Label column sm="2" className="text-right">Location:</Form.Label>
                <Col sm="7">
                    <Form.Control as="select">
                        <option selected disabled>Select a location</option>
                        <option>Bridesburg-Kensington-Port Richmond</option>
                        <option>Bucks County</option>
                        <option>Center City</option>
                        <option>Chester County</option>
                        <option>Delaware County</option>
                        <option>Far Northeast Philadelphia</option>
                        <option>Germantown-Chestnut Hill</option>
                        <option>Lower North Philadelphia</option>
                        <option>Montgomery County</option>
                        <option>Near Northeast Philadelphia</option>
                        <option>Olney-Oak Lane</option>
                        <option>Roxborough-Manayunk</option>
                        <option>South Philadelphia</option>
                        <option>Southwest Philadelphia</option>
                        <option>Upper North Philadelphia</option>
                        <option>West Philadelphia</option>
                    </Form.Control>
                </Col>
                <Form.Text as={Col}><em>(optional)</em></Form.Text>
            </Form.Group>
            <Form.Group as={Row} controlId="search-tags">
                <Form.Label column sm="2" className="text-right">Search Tags:</Form.Label>
                <Col sm="7"><Form.Control type="text" placeholder="Enter relevant tags, seperated by spaces" /></Col>
                <Form.Text as={Col}><em>(optional)</em></Form.Text>
            </Form.Group>
            <Form.Group as={Row} controlId="needed-by">
                <Form.Label column sm="2" className="text-right">Needed By:</Form.Label>
                <Col sm="7"><Form.Control type="date" /></Col>
                <Form.Text as={Col}><em>(optional)</em></Form.Text>
            </Form.Group>
            <Form.Group as={Row} controlId="ask-on-behalf-of">
                <Form.Label column sm="2" className="text-right">Asking on behalf of:</Form.Label>
                <Col sm="7"><Form.Control as="textarea" rows={3} placeholder="Are you asking on behalf of someone else? A neighbor? Co-worker? Family member? Any other relevant details?"/></Col>
                <Form.Text as={Col}><em>(optional)</em></Form.Text>
            </Form.Group>
            <Row className="text-center">
                <Col><Form.Check type="checkbox" label="Drop Off Needed" id="drop-off-needed"/></Col>
                <Col><Form.Check type="checkbox" label="Time Sensitive" id="time-sensitive"/></Col>
                <Col><Form.Check type="checkbox" label="Lack Access to Consistent Communication Methods" id="lack-consistent-communication"/></Col>
            </Row>
            <Row className="justify-content-center mt-4">
                <Button variant="primary" type="submit">
                    Post Request
                </Button>
            </Row>
        </Form>
    </Card>
  );
}

export default FormRequestGood;