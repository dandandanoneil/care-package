import React, { useContext, useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import API from "../utils/API";
import { useLocation } from "react-router-dom";
import "./user.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import PageTitle from "../components/PageTitle"
import Wrapper from "../components/Wrapper";
import ActivePostsCard from "../components/ActivePostsCard";

function User() {
    // Use location to know what user's info to load
    const location = useLocation();
    const userId = location.pathname.split('/')[2];

    const { currentUser } = useContext(UserContext);
    // User is the user to display (not necessarily the loggedin user)
    const [user, setUser] = useState({});
    // Posts is the array of posts associated with this user
    const [posts, setPosts] = useState([]);
    // EditMode is set to false automatically - if the user is logged in, there will be an "edit" button to edit their profile details (bio, social media links, etc.), which turns the profileCard into a profileForm
    const [editMode, setEditMode] = useState(false);
    // FormObject is the edit form
    const [formObject, setFormObject] = useState({
        _id: userId,
        email: user.email,
        name: user.name,
        posts: user.posts,
        comments: user.comments,
        memberSince: user.memberSince,
        bio: user.bio,
        facebookLink: user.facebookLink,
        instagramLink: user.instagramLink,
        twitterLink: user.twitterLink,
        linkedInLink: user.linkedInLink
    });

    useEffect(() => {
        loadUser();
    }, [])

    function loadUser() {
        API.getUser(userId)
        .then(res => {
            setUser(res.data);
            setPosts(res.data.posts);
        })
        .catch(err => console.log(err));
    }

    function formatDate(dateString) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    function handleInputChange (event) {
        const { name, value } = event.target;
        setFormObject({
            ...formObject,
            [name]: value
        });
    }

    function handleEditSubmit(event) {
        event.preventDefault();
        setEditMode(true);
    }

    function handleSubmit(event) {
        event.preventDefault();
        API.updateUser(userId, formObject)
        .then(res => {
            loadUser();
            setEditMode(false);
        })
        .catch(err => console.log(err));
    }

    const profileCard= (
        <Card className="m-3" border="warning">
            <Card.Header style={{ color: "white", backgroundColor: "#d0c311" }} as="h5">User Profile</Card.Header>
            <Card.Body style={{ backgroundColor: "#fafafa" }}>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Member Since:</strong> {formatDate(user.memberSince)}</p>
                {user.bio ?
                <p><strong>Bio:</strong> {user.bio}</p>
                : null}
                <Row>
                    {user.facebookLink ?
                        <Col xs="3" md="2">
                            <a href={user.facebookLink} target="blank"><Image fluid src="https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-128.png" alt="Facebook"/></a>
                        </Col>
                    : null}
                    {user.instagramLink ?
                        <Col xs="3" md="2">
                            <a href={user.instagramLink}target="blank"><Image fluid src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_3-instagram-128.png" alt="Instagram"/></a>
                        </Col>
                    : null}
                    {user.twitterLink ?
                        <Col xs="3" md="2">
                            <a href={user.twitterLink} target="blank"><Image fluid src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-128.png" alt="Twitter"/></a>
                        </Col>
                    : null}
                    {user.linkedInLink ?
                        <Col xs="3" md="2">
                            <a href={user.linkedInLink} target="blank"><Image fluid src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-128.png" alt="LinkedIn"/></a>
                        </Col>
                    : null}
                </Row>
                {user._id === currentUser._id ?
                    <Button size="sm" variant="warning" style={{ float: "right", backgroundColor: "#d0c311", color: "#FFFFFF" }} onClick={handleEditSubmit}><strong>Edit Profile</strong></Button>
                : null }
            </Card.Body>
        </Card>
    );

    const profileForm= (
        <Card className="m-3" border="warning">
            <Card.Header style={{ color: "white", backgroundColor: "#d0c311" }} as="h5">User Profile</Card.Header>
            <Form style={{ backgroundColor: "#fafafa" }} className="p-3">
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control onChange={handleInputChange} name="name" placeholder="Your Display Name" defaultValue={user.name} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control onChange={handleInputChange} name="email" placeholder="Your Email" defaultValue={user.email} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Bio:</Form.Label>
                        <Form.Control onChange={handleInputChange} name="bio" placeholder="Write a short bio to let other users get to know you!" defaultValue={user.bio} as="textarea" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Facebook Link:</Form.Label>
                        <Form.Control onChange={handleInputChange} name="facebookLink" placeholder="Link to your Facebook profile to let other users get to know you!" defaultValue={user.facebookLink} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Instagram Link:</Form.Label>
                        <Form.Control onChange={handleInputChange} name="instagramLink" placeholder="Link to your Instagram profile to let other users get to know you!" defaultValue={user.instagramLink} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Twitter Link:</Form.Label>
                        <Form.Control onChange={handleInputChange} name="twitterLink" placeholder="Link to your Twitter profile to let other users get to know you!" defaultValue={user.twitterLink} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>LinkedIn Link:</Form.Label>
                        <Form.Control onChange={handleInputChange} name="linkedInLink" placeholder="Link to your LinkedIn profile to let other users get to know you!" defaultValue={user.linkedInLink} />
                    </Form.Group>
                <Button variant="warning" style={{ float: "right", backgroundColor: "#d0c311" }} onClick={handleSubmit}>Save Changes</Button>
            </Form>
        </Card>
    );

    return (
        <Wrapper>
            {user._id ? (
                <>
                    <PageTitle>{user.name}</PageTitle>
                    <Row className="justify-content-center">
                        <Col lg="8">
                            {editMode ? profileForm : profileCard}
                            <Card className="m-3" border="primary">
                                <Card.Header style={{ backgroundColor: "#4c68a5", color: "white" }} variant="secondary" as="h5">User Posts</Card.Header>
                                <Card.Body style={{ backgroundColor: "#cad5eb" }}>
                                    {posts.length ? null : (
                                        "No posts to display"
                                    )}
                                    <Row>
                                        {posts.map(post => (
                                            <Col md="6" key={post._id} >
                                                <ActivePostsCard post={post}/>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </>
            ) : (
                <PageTitle>User <code>{userId}</code> not found</PageTitle>
            )}
        </Wrapper>
    );
}

export default User;