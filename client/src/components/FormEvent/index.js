import React from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function FormEvent() {
  return (
    <Card id="event-card" className="m-1">
        <Card.Header>Event</Card.Header>
        <Form id="event" className="p-3">
            <Form.Group as={Row} controlId="title">
                <Form.Label column sm="2" className="text-right">Event Title:</Form.Label>
                <Col sm="10"><Form.Control type="text" /></Col>
            </Form.Group>
            <Form.Group as={Row} controlId="category">
                <Form.Label column sm="2" className="text-right">Category:</Form.Label>
                <Col sm="10">
                    <Form.Control as="select">
                        <option selected disabled>Select a category</option>
                        <option>Food Drive</option>
                        <option>Clothing Drive</option>
                        <option>Volunteer</option>
                        <option>Community Clean Up</option>
                        <option>Classes & Lessons</option>
                        <option>Other</option>
                    </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="description">
                <Col sm="2" className="text-right"><Form.Label>Description:</Form.Label></Col>
                <Col sm="10"><Form.Control as="textarea" rows={3} /></Col>
            </Form.Group>
            <Form.Group as={Row} controlId="date">
                <Form.Label column sm="2" className="text-right">Start Date:</Form.Label>
                <Col sm="4"><Form.Control id="start-date" type="date" /></Col>
                <Form.Label column sm="2" className="text-right">End Date:</Form.Label>
                <Col sm="4"><Form.Control id="end-date" type="date" /></Col>
            </Form.Group>
            <Form.Group as={Row} controlId="time">
                <Form.Label column sm="2" className="text-right">Start Time:</Form.Label>
                <Col sm="4"><Form.Control id="start-time" type="time" /></Col>
                <Form.Label column sm="2" className="text-right">End Time:</Form.Label>
                <Col sm="4"><Form.Control id="end-time" type="time" /></Col>
            </Form.Group>
            <Form.Group as={Row} controlId="image">
                <Form.Label column sm="2" className="text-right">Image:</Form.Label>
                <Col sm="7"><Form.File id="image-upload" label="Upload an image" custom /></Col>
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
            <Form.Group as={Row} controlId="event-host-org">
                <Form.Label column sm="2" className="text-right">Host Org:</Form.Label>
                <Col sm="7"><Form.Control type="text" placeholder="Is this event being hosted by a community organization?" /></Col>
                <Form.Text as={Col}><em>(optional)</em></Form.Text>
            </Form.Group>
            <Form.Group as={Row} controlId="event-space-capacity">
                <Form.Label column sm="2" className="text-right">Event Space Capacity:</Form.Label>
                <Col sm="7"><Form.Control type="text" placeholder="Enter relevant tags, seperated by spaces" /></Col>
                <Form.Text as={Col}><em>(optional)</em></Form.Text>
            </Form.Group>
            <Form.Group as={Row} controlId="event-space-rules">
                <Form.Label column sm="2" className="text-right">Event Space Rules:</Form.Label>
                <Col sm="7"><Form.Control type="text" placeholder="Enter relevant tags, seperated by spaces" /></Col>
                <Form.Text as={Col}><em>(optional)</em></Form.Text>
            </Form.Group>
            <Row className="text-center">
                <Col><Form.Check type="checkbox" label="Online/Remote" id="online-remote"/></Col>
                <Col><Form.Check type="checkbox" label="Time Sensitive" id="time-sensitive"/></Col>
            </Row>
            <Row className="justify-content-center mt-4">
                <Button variant="primary" type="submit">
                    Post Event
                </Button>
            </Row>
        </Form>
    </Card>
);
}

export default FormEvent;