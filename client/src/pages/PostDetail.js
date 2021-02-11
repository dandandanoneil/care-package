import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { useLocation } from "react-router-dom";

import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import PageTitle from "../components/PageTitle"
import Wrapper from "../components/Wrapper";
import CommentCard from "../components/CommentCard";
// import BackButton from "../components/BackButton";

function PostDetail() {
    const [post, setPost] = useState([])
    const location = useLocation();

    useEffect(() => {
        loadPost()
    }, [])
    
    function loadPost() {
        const pathArray = location.pathname.split('/');

        API.getPost(pathArray[2])
        .then(res => {
            setPost(res.data[0]);
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }

    function formatDate(dateString) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    return (
        <Wrapper>
            <Card className="mt-3 mb-3">
                <Card.Header>
                    <PageTitle>
                        <em>
                            {post.offerRequestEvent === "offer" ? "offer→ " : null}
                            {post.offerRequestEvent === "request" ? "request→ " : null}
                            {post.offerRequestEvent === "event" ? "event→ " : null}
                            {post.type === "good" ? "good→ " : null}
                            {post.type === "service" ? "service→ " : null}
                        </em>
                        {post.title}
                    </PageTitle>
                </Card.Header>
                <Card.Body className="p-3">
                    <Row>
                        <Col sm="2">
                            <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#d0b313" }}>
                                {post.offerRequestEvent === "offer" ? "Offer " : null}
                                {post.offerRequestEvent === "request" ? "Request " : null}
                                {post.offerRequestEvent === "event" ? "Event " : null}
                                {post.type === "good" ? "→ Good " : null}
                                {post.type === "service" ? "→ Service " : null}
                                {post.category ? `→ ${post.category}` : null}
                            </Alert>
                            {post.location ?
                                <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#d0b313" }}>{post.location}</Alert>
                            : null }
                            {post.searchTags ?
                                <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#d0b313" }}>{post.searchTags}</Alert>
                            : null }
                        </Col>
                        <Col sm="8">
                            {post.imageURL ?
                                <Image src={post.imageURL} alt={post.title} fluid />
                            : null }
                            <Row> 
                                {/* Info about the posting user */}
                                <Col md="6" className="mb-3">
                                    <div><strong>Posted On: </strong>{formatDate(post.created_at)}</div>
                                </Col>
                                <Col md="6" className="mb-3">
                                    <div><strong>Posted By: </strong>{post.created_by}</div>
                                </Col>
                            </Row>
                            <Row>
                                {/* Description */}
                                <Col md="12" className="mb-3">
                                    <div><strong>Description: </strong>{post.description}</div>
                                </Col>
                            </Row>
                            <Row>
                                {/* Optional Details */}
                                {post.startDate ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>Start Date: </strong>{formatDate(post.startDate)}</div>
                                </Col>
                                : null }
                                {post.endDate ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>End Date: </strong>{formatDate(post.endDate)}</div>
                                </Col>
                                : null }
                                {post.startTime ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>Start Time: </strong>{post.startTime}</div>
                                </Col>
                                : null }
                                {post.endTime ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>End Time: </strong>{post.endTime}</div>
                                </Col>
                                : null }
                                {post.eventHostOrg ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>Host Organization: </strong>{post.eventHostOrg}</div>
                                </Col>
                                : null }
                                {post.eventSpaceCapacity ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>Event Space Capacity: </strong>{post.eventSpaceCapacity}</div>
                                </Col>
                                : null }
                                {post.eventSpaceRules ? 
                                <Col md="12" className="mb-3">
                                    <div><strong>Event Space Rules: </strong>{post.eventSpaceRules}</div>
                                </Col>
                                : null }
                                {post.pickUpBy ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>Pick Up By: </strong>{formatDate(post.pickUpBy)}</div>
                                </Col>
                                : null }
                                {post.offeredUntil ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>Offered Until: </strong>{formatDate(post.offeredUntil)}</div>
                                </Col>
                                : null }
                                {post.offerCapacity ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>Offer Capacity: </strong>{post.offerCapacity}</div>
                                </Col>
                                : null }
                                {post.neededBy ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>Needed By: </strong>{formatDate(post.neededBy)}</div>
                                </Col>
                                : null }
                                {post.personsRequestingService ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>Total # Requesting Service: </strong>{post.personsRequestingService}</div>
                                </Col>
                                : null }
                                {post.cashAppHandle ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>Cash App: </strong>{post.cashAppHandle}</div>
                                </Col>
                                : null }
                                {post.venmoHandle ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>Venmo: </strong>{post.venmoHandle}</div>
                                </Col>
                                : null }
                                {post.payPalEmail ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>PayPal: </strong>{post.payPalEmail}</div>
                                </Col>
                                : null }
                                {post.requestOnBehalfOf ? 
                                <Col md="12" className="mb-3">
                                    <div><strong>Asking On Behalf Of: </strong>{post.requestOnBehalfOf}</div>
                                </Col>
                                : null }
                            </Row>
                        </Col>
                        <Col sm="2">
                            {post.timeSensitive ? 
                            <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#d05d11" }}>Time Sensitive</Alert>
                            : null }
                            {post.onlineOrRemote ? 
                            <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#d05d11" }}>Online/Remote</Alert>
                            : null }
                            {post.pickUpOnly ? 
                            <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#d05d11" }}>Pick Up Only</Alert>
                            : null }
                            {post.dropOffNeeded ? 
                            <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#d05d11" }}>Drop Off Needed</Alert>
                            : null }
                            {post.atCurbNow ? 
                            <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#d05d11" }}>At Curb Now</Alert>
                            : null }
                            {post.lackConsistentCommunication ? 
                            <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#d05d11" }}>Lack Access to Consistent Communication Methods</Alert>
                            : null }
                            {post.limitedCapacity ? 
                            <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#d05d11" }}>Limited Capacity</Alert>
                            : null }
                            {post.groupRequest ? 
                            <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#d05d11" }}>Group Request</Alert>
                            : null }
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col lg="8">
                            <CommentCard />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Wrapper>
    );
}

export default PostDetail;
