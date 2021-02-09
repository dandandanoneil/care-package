import React from 'react';
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
    const offerTypeCard = (
        <Card id="offer-type-card" className="m-1">
            <Card.Header>Offer Type</Card.Header>
            <Form id="offer-type" className="text-center">
                <Form.Text><em>Are you offering a good or a service?</em></Form.Text>
                <Form.Check inline label="Good" type="radio" id="offer-good" />
                <Form.Check inline label="Service" type="radio" id="offer-service" />
            </Form>
        </Card>
    );

    const requestTypeCard = (
        <Card id="request-type-card" className="m-1">
            <Card.Header>Request Type</Card.Header>
            <Form id="request-type" className="text-center">
                <Form.Text><em>Are you requesting a good, a service, or monetary assistance?</em></Form.Text>
                <Form.Check inline label="Good" type="radio" id="request-good" />
                <Form.Check inline label="Service" type="radio" id="request-service" />
                <Form.Check inline label="Monetary" type="radio" id="request-monetary" />
            </Form>
        </Card>
    );

    return (
        <Wrapper>
            <PageTitle>Create A Post</PageTitle>
            {/* Row 1: Figure out which form to serve them */}
            <Row className="justify-content-center">
                <Col xl="7" lg="9" md="11">
                    {/* What kind of post: Offer, request or event? */}
                    <Card className="m-1">
                        <Card.Header>Offer, Request, or Event</Card.Header>
                        <Form className="text-center">
                            <Form.Text><em>Are you posting an offer, a request, or a event?</em></Form.Text>
                            <Form.Check inline label="Offer" type="radio" id="offer" />
                            <Form.Check inline label="Request" type="radio" id="request" />
                            <Form.Check inline label="Event" type="radio" id="event" />
                        </Form>
                    </Card>
                    {/* If it's an offer or request, gather more info: */}
                    <div className="text-center">↓↓ This logic is missing - one or neither of these two forms will render, depending on choices above ↓↓</div>
                    {offerTypeCard}
                    {requestTypeCard}
                </Col>
            </Row>
            <Row className="justify-content-center">
                {/* Row 2: Serve them the appropriate "create post" form. */}
                <Col xl="7" lg="9" md="11">
                    <div className="text-center">↓↓ This logic is missing - only one of these six forms will render, depending on choices above ↓↓</div>
                    <FormOfferGood />
                    <FormOfferService />
                    <FormRequestGood />
                    <FormRequestService />
                    <FormRequestMoney />
                    <FormEvent />
                </Col>
            </Row>
            <br/><br/>
        </Wrapper>
    );
}

export default CreatePost;