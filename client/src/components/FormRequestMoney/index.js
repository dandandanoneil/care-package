import React, { useContext, useState } from "react";
import { useHistory } from 'react-router-dom';
import API from '../../utils/API';
import UserContext from "../../utils/UserContext";

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function FormRequestMoney() {
    const { currentUser } = useContext(UserContext);
    const history = useHistory();

    const [postContent, setPostContent] = useState({
        created_by: currentUser._id,
        offerRequestEvent: "request",
        type: "monetary",
        title: "",
        category: "",
        description: "",
        imageURL: "",
        searchTags: "",
        location: "",
        neededBy: null,
        cashAppHandle: "",
        venmoHandle: "",
        payPalEmail: "",
        timeSensitive: false,
        groupRequest: false
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setPostContent({
            ...postContent,
            [name]: value
        });
    }

    const handleCheckboxChange = event => {
        const { name, checked } = event.target;
        setPostContent({
            ...postContent,
            [name]: checked
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (postContent.category === "Select a category:") {
            setPostContent({ ...postContent, category: "Other" });
        }
        API.createPost(postContent)
            .then(res => history.push(`/user/${res.data._id}`));;
    };

    return (
        <Card border="primary" className="m-1" style={{ borderRadius: "10p", boxShadow: "5px 5px 10px rgba(0,0,0,0.5)" }}>
            <Card.Header style={{ color: "white", backgroundColor: "#4c68a5", fontWeight: "bold" }}>
                <em>request→ $$$→</em>
            </Card.Header>
            <Form className="p-3">
                <Form.Group as={Row}>
                    <Form.Label column sm="2" className="text-right">Request Title:</Form.Label>
                    <Col sm="10"><Form.Control type="text" name="title" onChange={handleInputChange} /></Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="2" className="text-right">Category:</Form.Label>
                    <Col sm="10">
                        <Form.Control as="select" name="category" onChange={handleInputChange}>
                            <option defaultValue>Select a category</option>
                            <option>Housing</option>
                            <option>Educational</option>
                            <option>Medical</option>
                            <option>Reparations</option>
                            <option>Skill Building</option>
                            <option>Child Support</option>
                            <option>Wellness Support</option>
                            <option>Other</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm="2" className="text-right"><Form.Label>Description:</Form.Label></Col>
                    <Col sm="10"><Form.Control as="textarea" rows={3} name="description" onChange={handleInputChange} /></Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="2" className="text-right">Image:</Form.Label>
                    <Col sm="7"><Form.Control type="text" placeholder="Paste an image URL from the internet here" name="imageURL" onChange={handleInputChange} /></Col>
                    <Form.Text as={Col}><em>(optional)</em></Form.Text>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="2" className="text-right">Location:</Form.Label>
                    <Col sm="7">
                        <Form.Control as="select" name="location" onChange={handleInputChange}>
                            <option defaultValue>Select a location</option>
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
                <Form.Group as={Row}>
                    <Form.Label column sm="2" className="text-right">Search Tags:</Form.Label>
                    <Col sm="7"><Form.Control type="text" placeholder="Enter relevant tags, separated by spaces" name="searchTags" onChange={handleInputChange} /></Col>
                    <Form.Text as={Col}><em>(optional)</em></Form.Text>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="2" className="text-right">Needed By:</Form.Label>
                    <Col sm="7"><Form.Control type="date" name="neededBy" onChange={handleInputChange} /></Col>
                    <Form.Text as={Col}><em>(optional)</em></Form.Text>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="2" className="text-right">CashApp:</Form.Label>
                    <Col sm="7"><Form.Control type="text" placeholder="@YourVenmoHandle" name="venmoHandle" onChange={handleInputChange} /></Col>
                    <Form.Text as={Col}><em>(optional)</em></Form.Text>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="2" className="text-right">Venmo:</Form.Label>
                    <Col sm="7"><Form.Control type="text" placeholder="$YourCashtag" name="cashAppHandle" onChange={handleInputChange} /></Col>
                    <Form.Text as={Col}><em>(optional)</em></Form.Text>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="2" className="text-right">PayPal:</Form.Label>
                    <Col sm="7"><Form.Control type="text" placeholder="YourEmail@example.com" name="payPalEmail" onChange={handleInputChange} /></Col>
                    <Form.Text as={Col}><em>(optional)</em></Form.Text>
                </Form.Group>
                <Row className="text-center">
                    <Col><Form.Check type="checkbox" label="Time Sensitive" name="timeSensitive" onChange={handleCheckboxChange} /></Col>
                    <Col><Form.Check type="checkbox" label="Group Request" name="groupRequest" onChange={handleCheckboxChange} /></Col>
                </Row>
                <Row className="justify-content-center mt-4">
                    <Button className='form-submit-btn' variant="primary" type="submit" onClick={handleSubmit} style={{ color: "white", backgroundColor: "#4c68a5" }}>
                        Post Request
                </Button>
                </Row>
            </Form>
        </Card>
    );
}

export default FormRequestMoney;