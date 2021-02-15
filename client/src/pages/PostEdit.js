import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import API from "../utils/API";

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';

import Wrapper from "../components/Wrapper";

function PostEdit() {
    const history = useHistory();
    const location = useLocation();
    const postId = location.pathname.split('/')[2];
    const [post, setPost] = useState({
        _id: postId
    });

    let categoryOptions;
    switch (post.type) {
        case "good":
            categoryOptions = (
                <>
                    <option defaultValue>Select a new category:</option>
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
                </>
            );
            break;
        case "service":
            categoryOptions = (
                <>
                    <option defaultValue>Select a new category:</option>
                    <option>Legal</option>
                    <option>Physical Labor</option>
                    <option>Financial Advice</option>
                    <option>Educational</option>
                    <option>Transportation</option>
                    <option>Beauty & Wellness</option>
                    <option>Household</option>
                    <option>Lessons</option>
                    <option>Pet</option>
                    <option>Real Estate</option>
                    <option>Other</option>
                </>
            );
            break;
        case "monetary":
            categoryOptions = (
                <>
                    <option defaultValue>Select a new category:</option>
                    <option>Housing</option>
                    <option>Educational</option>
                    <option>Medical</option>
                    <option>Reparations</option>
                    <option>Skill Building</option>
                    <option>Child Support</option>
                    <option>Wellness Support</option>
                    <option>Other</option>
                </>
            );
            break;
        case "event":
            categoryOptions = (
                <>
                    <option defaultValue>Select a new category:</option>
                    <option>Food Drive</option>
                    <option>Clothing Drive</option>
                    <option>Volunteer</option>
                    <option>Community Clean Up</option>
                    <option>Classes & Lessons</option>
                    <option>Other</option>
                </>
            );
            break;
        default:
            categoryOptions = (
                <option>Other</option>
            );
            break;
    }

    useEffect(() => {
        loadPost()
    }, [])
    
    function loadPost() {

        API.getPost(postId)
        .then(res => setPost(res.data))
        .catch(err => console.log(err));
    }

    function formatDate(dateString) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setPost({
            ...post,
            [name]: value
        });
    }

    function handleCheckboxChange(event) {
        const { name, checked } = event.target;
        setPost({
            ...post,
            [name]: checked
        });
    }

    function handleDeletePost() {
        API.deletePost(postId)
        .then(res => history.push("/"))
        .catch(err => console.log(err));
    }

    function handleEditSubmit(event) {
        event.preventDefault();
        API.updatePost(post)
        .then(res => history.push(`/post/${postId}`))
        .catch(err => console.log(err));
    };

    function handleDiscardChanges(event) {
        history.push(`/post/${postId}`);
      };

  return (
        <Wrapper>
            <Card border="warning" className="mt-3 mb-3">
                <Card.Header className="text-center" style={{ backgroundColor: "#d0b313", color: "#FFFFFF" }}>
                    <h1>Edit Post</h1>
                </Card.Header>
                <Form className="p-3" style={{ backgroundColor: "#fafafa" }}>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2" className="text-right">Title:</Form.Label>
                        <Col sm="10"><Form.Control type="text" name="title" onChange={handleInputChange} value={post.title}/></Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2" className="text-right">Category:</Form.Label>
                        <Col sm="10">
                            <Form.Control as="select" name="category" onChange={handleInputChange}>
                                {categoryOptions}
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2" className="text-right">Description:</Form.Label>
                        <Col sm="10"><Form.Control as="textarea" rows={3} name="description" onChange={handleInputChange} value={post.description}/></Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2" className="text-right">Image:</Form.Label>
                        <Col sm="10"><Form.Control type="text" name="imageURL" onChange={handleInputChange} value={post.imageURL} defaultValue="Paste and image URL from the internet here" /></Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2" className="text-right">Search Tags:</Form.Label>
                        <Col sm="10"><Form.Control type="text" name="searchTags" onChange={handleInputChange} value={post.searchTags} defaultValue="Enter relevant tags, separated by spaces" /></Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2" className="text-right">Location:</Form.Label>
                        <Col sm="10">
                            <Form.Control as="select" name="location" onChange={handleInputChange}>
                                <option defaultValue>Select a new neighborhood:</option>
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
                    </Form.Group>
                    {post.offerRequestEvent === "request" ? ( 
                        <Form.Group as={Row}>
                            <Form.Label column sm="2" className="text-right">Needed By:</Form.Label>
                            <Col sm="10"><Form.Control type="date" name="neededBy" onChange={handleInputChange} value={post.neededBy}/></Col>
                        </Form.Group>
                    ) : ( null )}
                    {post.offerRequestEvent === "request" ? ( 
                        <Form.Group as={Row}>
                            <Form.Label column sm="2" className="text-right">Request:</Form.Label>
                            <Col sm="10"><Form.Control as="textarea" rows={3} placeholder="Are you asking on behalf of someone else? A neighbor? Co-worker? Family member? Any other relevant details?" name="requestOnBehalfOf" onChange={handleInputChange} value={post.requestOnBehalfOf} /></Col>
                        </Form.Group>
                    ) : ( null )}
                    {post.offerRequestEvent === "offer" && post.type === "service" ? ( 
                        <Form.Group as={Row}>
                            <Form.Label column sm="2" className="text-right">Offered Until:</Form.Label>
                            <Col sm="10"><Form.Control type="date" name="offeredUntil" onChange={handleInputChange} value={post.offeredUntil}/></Col>
                        </Form.Group>
                    ) : ( null )}
                    {post.offerRequestEvent === "offer" && post.type === "service" ? ( 
                        <Form.Group as={Row}>
                            <Form.Label column sm="2" className="text-right">Offer Capacity:</Form.Label>
                            <Col sm="10"><Form.Control type="text" name="offerCapacity" onChange={handleInputChange} value={post.offerCapacity}/></Col>
                        </Form.Group>
                    ) : ( null )}
                    {post.offerRequestEvent === "request" && post.type === "service" ? ( 
                        <Form.Group as={Row}>
                            <Form.Label column sm="2" className="text-right">Persons Requesting Service:</Form.Label>
                            <Col sm="10"><Form.Control type="text" name="personsRequestingService" onChange={handleInputChange} value={post.personsRequestingService}/></Col>
                        </Form.Group>
                    ) : ( null )}
                    {post.offerRequestEvent === "event" ? ( 
                        <>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2" className="text-right">Start Date:</Form.Label>
                                <Col sm="4"><Form.Control id="start-date" type="date" name="startDate" onChange={handleInputChange} value={post.startDate} /></Col>
                                <Form.Label column sm="2" className="text-right">End Date:</Form.Label>
                                <Col sm="4"><Form.Control id="end-date" type="date" name="endDate" onChange={handleInputChange} value={post.endDate} /></Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2" className="text-right">Start Time:</Form.Label>
                                <Col sm="4"><Form.Control id="start-time" type="time" name="startTime" onChange={handleInputChange} value={post.startTime} /></Col>
                                <Form.Label column sm="2" className="text-right">End Time:</Form.Label>
                                <Col sm="4"><Form.Control id="end-time" type="time" name="endTime" onChange={handleInputChange} value={post.endTime} /></Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2" className="text-right">Host Org:</Form.Label>
                                <Col sm="10"><Form.Control type="text" placeholder="Is this event being hosted by a community organization?" name="eventHostOrg" onChange={handleInputChange} value={post.eventHostOrg} /></Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2" className="text-right">Event Space Capacity:</Form.Label>
                                <Col sm="10"><Form.Control type="text" name="eventSpaceCapacity" onChange={handleInputChange} value={post.eventSpaceCapacity} /></Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2" className="text-right">Event Space Rules:</Form.Label>
                                <Col sm="10"><Form.Control type="text" name="eventSpaceRules" onChange={handleInputChange} value={post.eventSpaceRules} /></Col>
                            </Form.Group>                        </>
                    ) : ( null )}
                    {/* Booleans */}
                    <Form.Group as={Row}>
                        <Form.Label column sm="2" className="text-right">Tags:</Form.Label>
                        <Col sm="10">
                            <Form.Check type="checkbox" checked={post.timeSensitive} label="Time Sensitive" name="timeSensitive" onChange={handleCheckboxChange} />
                            {post.type === "service" || post.type === "event" ? (
                                <Form.Check type="checkbox" checked={post.onlineOrRemote} label="Online/Remote" name="onlineOrRemote" onChange={handleCheckboxChange} />
                            ) : ( null )}
                            {post.offerRequestEvent === "request" ? (
                                <Form.Check type="checkbox" checked={post.groupRequest} label="Group Request" name="groupRequest" onChange={handleCheckboxChange} />
                            ) : ( null )}
                            {post.offerRequestEvent === "request" && post.type === "good" ? (
                                <Form.Check type="checkbox" checked={post.dropOffNeeded} label="Drop Off Needed" name="dropOffNeeded" onChange={handleCheckboxChange}/>
                            ) : ( null )}
                            {post.offerRequestEvent === "request" ? (
                                <Form.Check type="checkbox" checked={post.lackConsistentCommunication} label="Lack Access to Consistent Communication Methods" name="lackConsistentCommunication" onChange={handleCheckboxChange}/>
                            ) : ( null )}
                            {post.offerRequestEvent === "offer" && post.type === "service" ? (
                                <Form.Check type="checkbox" checked={post.limitedCapacity} label="Limited Capacity" name="limitedCapacity" onChange={handleCheckboxChange}/>
                            ) : ( null )}
                            {post.offerRequestEvent === "offer" && post.type === "good" ? (
                                <Form.Check type="checkbox" checked={post.pickUpOnly} label="Pick Up Only" name="pickUpOnly" onChange={handleCheckboxChange} />
                            ) : ( null )}
                            {post.offerRequestEvent === "offer" && post.type === "good" ? (
                                <Form.Check type="checkbox" checked={post.atCurbNow} label="At Curb Now" name="atCurbNow" onChange={handleCheckboxChange} />
                            ) : ( null )}
                        </Col>
                    </Form.Group>
                    <Button size="sm" className="mt-1 ml-1" variant="warning" style={{ float: "right", backgroundColor: "#d0c311" }} onClick={handleEditSubmit}>Update</Button>
                    <Button size="sm" className="mt-1 ml-1" variant="primary" style={{ float: "right", backgroundColor: "#4c68a5" }} onClick={handleDiscardChanges}>Discard Changes</Button>
                    <Button size="sm" className="mt-1 ml-1" variant="danger" style={{ float: "right", backgroundColor: "#d05d11" }} onClick={handleDeletePost}>Delete</Button>
                </Form>
            </Card>
            
            <Card border="warning" className="mt-3 mb-3">
                <Card.Header className="text-center" style={{ backgroundColor: "#d0b313", color: "#FFFFFF" }}>
                    <h1>Preview Changes</h1>
                </Card.Header>
                <div className="p-3" style={{ backgroundColor: "#fafafa" }}>
                    <Row>
                        <Col sm="2">
                            <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#4c68a5" }}>
                                <strong>
                                    {post.offerRequestEvent === "offer" ? "Offer " : ( null )}
                                    {post.offerRequestEvent === "request" ? "Request " : ( null )}
                                    {post.offerRequestEvent === "event" ? "Event " : ( null )}
                                    {post.type === "good" ? "→ Good " : ( null )}
                                    {post.type === "service" ? "→ Service " : ( null )}
                                    {post.category ? `→ ${post.category}` : ( null )}
                                </strong>
                            </Alert>
                            {post.location ?
                                <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#4c68a5" }}><strong>{post.location}</strong></Alert>
                            : ( null ) }
                            {post.searchTags ?
                                <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#4c68a5" }}><strong>{post.searchTags}</strong></Alert>
                            : ( null ) }
                        </Col>
                        <Col sm="8">
                            {post.imageURL ?
                                <Image src={post.imageURL} alt={post.title} fluid />
                            : ( null ) }
                            <Row> 
                                {/* Info about the posting user */}
                                <Col md="6" className="mb-3">
                                    <div><strong>Posted On: </strong>{formatDate(post.created_at)}</div>
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
                                : ( null ) }
                                {post.endDate ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>End Date: </strong>{formatDate(post.endDate)}</div>
                                </Col>
                                : ( null ) }
                                {post.startTime ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>Start Time: </strong>{post.startTime}</div>
                                </Col>
                                : ( null ) }
                                {post.endTime ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>End Time: </strong>{post.endTime}</div>
                                </Col>
                                : ( null ) }
                                {post.eventHostOrg ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>Host Organization: </strong>{post.eventHostOrg}</div>
                                </Col>
                                : ( null ) }
                                {post.eventSpaceCapacity ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>Event Space Capacity: </strong>{post.eventSpaceCapacity}</div>
                                </Col>
                                : ( null ) }
                                {post.eventSpaceRules ? 
                                <Col md="12" className="mb-3">
                                    <div><strong>Event Space Rules: </strong>{post.eventSpaceRules}</div>
                                </Col>
                                : ( null ) }
                                {post.pickUpBy ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>Pick Up By: </strong>{formatDate(post.pickUpBy)}</div>
                                </Col>
                                : ( null ) }
                                {post.offeredUntil ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>Offered Until: </strong>{formatDate(post.offeredUntil)}</div>
                                </Col>
                                : ( null ) }
                                {post.offerCapacity ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>Offer Capacity: </strong>{post.offerCapacity}</div>
                                </Col>
                                : ( null ) }
                                {post.neededBy ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>Needed By: </strong>{formatDate(post.neededBy)}</div>
                                </Col>
                                : ( null ) }
                                {post.personsRequestingService ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>Total # Requesting Service: </strong>{post.personsRequestingService}</div>
                                </Col>
                                : ( null ) }
                                {post.cashAppHandle ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>Cash App: </strong>{post.cashAppHandle}</div>
                                </Col>
                                : ( null ) }
                                {post.venmoHandle ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>Venmo: </strong>{post.venmoHandle}</div>
                                </Col>
                                : ( null ) }
                                {post.payPalEmail ? 
                                <Col md="6" className="mb-3">
                                    <div><strong>PayPal: </strong>{post.payPalEmail}</div>
                                </Col>
                                : ( null ) }
                                {post.requestOnBehalfOf ? 
                                <Col md="12" className="mb-3">
                                    <div><strong>Asking On Behalf Of: </strong>{post.requestOnBehalfOf}</div>
                                </Col>
                                : ( null ) }
                            </Row>
                        </Col>
                        <Col sm="2">
                            {post.timeSensitive ? 
                            <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#d05d11" }}><strong>Time Sensitive</strong></Alert>
                            : ( null ) }
                            {post.onlineOrRemote ? 
                            <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#d05d11" }}><strong>Online/Remote</strong></Alert>
                            : ( null ) }
                            {post.pickUpOnly ? 
                            <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#d05d11" }}><strong>Pick Up Only</strong></Alert>
                            : ( null ) }
                            {post.dropOffNeeded ? 
                            <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#d05d11" }}><strong>Drop Off Needed</strong></Alert>
                            : ( null ) }
                            {post.atCurbNow ? 
                            <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#d05d11" }}><strong>At Curb Now</strong></Alert>
                            : ( null ) }
                            {post.lackConsistentCommunication ? 
                            <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#d05d11" }}><strong>Lack Access to Consistent Communication Methods</strong></Alert>
                            : ( null ) }
                            {post.limitedCapacity ? 
                            <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#d05d11" }}><strong>Limited Capacity</strong></Alert>
                            : ( null ) }
                            {post.groupRequest ? 
                            <Alert className="mb-2" style={{ color: "#FFFFFF", backgroundColor: "#d05d11" }}><strong>Group Request</strong></Alert>
                            : ( null ) }
                        </Col>
                    </Row>
                </div>
            </Card>
        </Wrapper>
    );
}

export default PostEdit;
