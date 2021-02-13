import React, { useContext, useState } from 'react';
import UserContext from "../utils/UserContext";

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PageTitle from '../components/PageTitle'
import Wrapper from '../components/Wrapper';
import FormOfferGood from '../components/FormOfferGood';
import FormOfferService from '../components/FormOfferService';
import FormRequestGood from '../components/FormRequestGood';
import FormRequestService from '../components/FormRequestService';
import FormRequestMoney from '../components/FormRequestMoney';
import FormEvent from '../components/FormEvent';


function CreatePost() {
    // Label = "offer", "request", "event", or ""
    const [postLabel, setPostLabel] = useState();
    // Type = "good", "service", "$$$", ""
    const [postType, setPostType] = useState();
  const { loggedIn } = useContext(UserContext);

    const handleChange = (event) => {
        const { name, id } = event.target;
        if (name === "post-label") {
            setPostLabel(id);
            setPostType("");
        }
        if (name === "post-type") setPostType(id);
    };
    
    const offerTypeCard = (
        <Card border="warning" id="offer-type-card" className="m-1">
            <Card.Header style={{ color: "white", backgroundColor: "#d0c311", fontWeight: "bold"}}>Are you offering a good or a service?</Card.Header>
            <Form id="offer-type" className="text-center p-3">
                <Form.Check inline name="post-type" label="Good" type="radio" id="good" onChange={handleChange} />
                <Form.Check inline name="post-type" label="Service" type="radio" id="service" onChange={handleChange} />
            </Form>
        </Card>
    );

    const requestTypeCard = (
        <Card border="warning" id="request-type-card" className="m-1">
            <Card.Header style={{ color: "white", backgroundColor: "#d0c311", fontWeight: "bold"}}>Are you requesting a good, a service, or monetary assistance?</Card.Header>
            <Form id="request-type" className="text-center p-3">
                <Form.Check inline name="post-type" label="Good" type="radio" id="good" onChange={handleChange} />
                <Form.Check inline name="post-type" label="Service" type="radio" id="service" onChange={handleChange} />
                <Form.Check inline name="post-type" label="$$$" type="radio" id="$$$" onChange={handleChange} />
            </Form>
        </Card>
    );

    return (
        <Wrapper>
            <PageTitle>Create A Post</PageTitle>
            {loggedIn ? (
            <>
                {/* Row 1: Figure out which form to serve them */}
                <Row className="justify-content-center">
                    <Col xl="7" lg="9" md="11">
                        {/* What kind of post: Offer, request or event? */}
                        <Card className="m-1" border="danger">
                            <Card.Header style={{ color: "white", backgroundColor: "#d05d11", fontWeight: "bold"}} >Are you posting an offer, a request, or a event?</Card.Header>
                            <Form className="text-center p-3">
                                <Form.Check inline name="post-label" label="Offer" type="radio" id="offer" onChange={handleChange} />
                                <Form.Check inline name="post-label" label="Request" type="radio" id="request" onChange={handleChange} />
                                <Form.Check inline name="post-label" label="Event" type="radio" id="event" onChange={handleChange} />
                            </Form>
                        </Card>
                        {/* If it's an offer or request, gather more info: */}
                        { postLabel === "offer" ? offerTypeCard : null }
                        { postLabel === "request" ? requestTypeCard : null }
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    {/* Row 2: Serve them the appropriate "create post" form. */}
                    <Col xl="7" lg="9" md="11">
                        { (postLabel === "offer" && postType === "good") ?
                            <FormOfferGood /> : null }
                        { (postLabel === "offer" && postType === "service") ?
                            <FormOfferService /> : null }
                        { (postLabel === "request" && postType === "good") ?
                            <FormRequestGood /> : null }
                        { (postLabel === "request" && postType === "service") ?
                            <FormRequestService /> : null }
                        { (postLabel === "request" && postType === "$$$") ?
                            <FormRequestMoney /> : null }
                        { (postLabel === "event") ?
                            <FormEvent /> : null }
                    </Col>
                </Row>
                <br/><br/>
            </>
            ) : (
            <>
                <Row className="justify-content-center">
                    <Col xl="7" lg="9" md="11">
                        <Card className="text-center">
                            <Card.Header>Log in to create a post!</Card.Header>
                        </Card>
                    </Col>
                </Row>
            </>
            )}
        </Wrapper>
    );
}

export default CreatePost;