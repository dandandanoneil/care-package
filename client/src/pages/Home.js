import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../utils/API";
import "./home.css";

import Wrapper from "../components/Wrapper";
import HeroCarousel from "../components/HeroCarousel";
import Buttons from "../components/Buttons";
import ActivePostsCard from "../components/ActivePostsCard";
import HowItWorksBanner from "../components/HowItWorksBanner";
import SocialMediaLinks from "../components/SocialMediaLinks"

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Home() {
    const [allPosts, setAllPosts] = useState([]);
    const history = useHistory();

    // This code runs on page load
    useEffect(() => {
        API.getPosts()
            .then(dbPosts => setAllPosts(dbPosts.data.slice(0,8)))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <HeroCarousel />
            <Wrapper>
                <Buttons />
                <Card border="primary" style={{ borderRadius: "10px", boxShadow: "5px 5px 10px rgba(0,0,0,0.5)" }}>
                    <Card.Header style={{ backgroundColor: "#4c68a5", color: "white" }} variant="secondary" >
                        <h3>Recent Posts</h3>
                    </Card.Header>
                    <Card.Body className="p-3" style={{ backgroundColor: "#cad5eb" }}>
                        {allPosts.length === 0 ? (
                            <div className="text-center" style={{ color: "#4c68a5" }}>
                                <br />
                                <h3 ><em>No posts to display</em></h3>
                                <br /><br /><br /><br /><br /><br /><br /><br />
                            </div>
                        ) : (
                            <>
                                <Row>
                                    {allPosts.map(post => (
                                            <Col lg="3" md="4" sm="6" xs="12" key={post._id} >
                                            <ActivePostsCard post={post} />
                                        </Col>
                                    ))}
                                </Row>
                                <Button size="lg" variant="danger" onClick={() => history.push("/posts")} className="mt-2 more-button"><em>See More Posts →</em></Button>
                            </>
                            )}
                    </Card.Body>
                </Card>
            </Wrapper>
            <HowItWorksBanner />
            <SocialMediaLinks />
        </>
    );
}
export default Home;