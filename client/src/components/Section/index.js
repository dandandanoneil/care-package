import { Accordion, Card, Button, Container, Row, Col } from 'react-bootstrap'
import React from 'react'

const Section = () => {
    return (
        <div>
            <h1 className="d-flex justify-content-center mb-4" style={{ color: '#d0c311', textShadow: "2px 2px 4px #000000", backgroundImage: 'linear-gradient(to right, #4c68a5, #021247)', padding: 50 }}>How it works</h1>
            <Container>

                <Row>
                    <Col sm={6} >
                        <Accordion defaultActiveKey="0">
                            <Card>

                                <Card.Header style={{ backgroundColor: '#D0B313', opacity: 0.9 }}>
                                    <h5 style={{ color: 'white' }}>Step 1</h5>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ color: 'white', textShadow: "2px 2px 4px #000000" }}>
                                        Learn more
            </Accordion.Toggle>
                                </Card.Header  >
                                <Accordion.Collapse eventKey="0">
                                    <div>
                                        <Card.Body style={{ width: "256px", height: "512px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <img src="https://thephiladelphiacitizen.org/wp-content/uploads/2020/01/advancing-community-wealth-in-philadelphia.jpg" alt="Italian Trulli"></img></Card.Body>

                                    </div>
                                </Accordion.Collapse>
                            </Card>
                            <br></br><br></br>
                            <Card>
                                <Card.Header style={{ backgroundColor: '#D0B313', opacity: 0.9 }}>
                                    <h5 style={{ color: 'white' }}>Step 2</h5>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{ color: 'white', textShadow: "2px 2px 4px #000000" }}>
                                        Learn more
            </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body style={{ width: "256px", height: "512px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <img src="https://images.radio.com/aiu-media/Philly-Rising-Cover25-e349dcd9-ecdc-4717-b1d2-214967cb825e.png" alt="Italian Trulli"></img></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                    </Col>
                    <Col sm={6}>

                        <Accordion defaultActiveKey="0">
                            <Card>

                                <Card.Header style={{ backgroundColor: '#D05D11', opacity: 0.9 }}>
                                    <h5 style={{ color: 'white' }}>Step 3</h5>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{ color: 'white', textShadow: "2px 2px 4px #000000" }}>
                                        Learn more
            </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <div>
                                        <Card.Body style={{ width: "256px", height: "512px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                         <img src="https://ysm-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto:best,w_1275/v1/websites4/live-prod/psychiatry/consultationcenter/eval/evaluation/Porch%20Light%20Evaluation%20Philadelphia%20Community%20Health%20Project_320934_39979_v2.jpg" alt="Italian Trulli"></img></Card.Body>

                                    </div>
                                </Accordion.Collapse>
                            </Card>
                            <br></br><br></br>
                            <Card>
                                <Card.Header style={{ backgroundColor: '#D05D11', opacity: 0.9 }}>
                                    <h5 style={{ color: 'white' }}>Step 4</h5>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{ color: 'white', textShadow: "2px 2px 4px #000000" }}>
                                        Learn more
            </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body style={{ width: "256px", height: "512px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    <img src="https://thephiladelphiacitizen.org/wp-content/uploads/2020/07/How-to-help-during-pandemic-philly.jpg" alt="Italian Trulli"></img></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Section
