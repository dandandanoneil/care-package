import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
import { Card, Button, Container } from "react-bootstrap";
import PageTitle from "../components/PageTitle"
import Wrapper from "../components/Wrapper";
// import MessageCard from "../components/MessageCard";
import ActivePostsCard from "../components/ActivePostsCard";
import axios from "axios";
import "./user.css";

function User(props) {
    const { currentUser } = useContext(UserContext);

    function onClick() {
        axios.post("/api/user/logout", {})
            .then((res) => res.logout())
            .catch(err => console.log(err));

        { props.stateLogOut() }
    }

    return (
        <Wrapper>
            <PageTitle>Hello</PageTitle>
            {/* <PageTitle>Hello {currentUser.name} </PageTitle> */}
            <Container>
                <div className="row justify-content-md-center">
                    {/* <div className="col-lg-4" style={{display: 'flex', justifyContent: 'center'}}>
                        <MessageCard />
                    </div> */}
                    <br />
                            <Card border="primary" style={{ width: '40rem' }}>
                                <Card.Header style={{ color: "white", backgroundColor: "#4c68a5" }} as="h5">My Profile</Card.Header>
                                <Card.Body style={{ color: "white", backgroundColor: "#8498c4" }}>
                                    <Card.Text>
                                        {/* <p style={{color: "white"}} >Name: {currentUser.name}</p> */}
                                        {/* <p style={{color: "white"}} >Email: {currentUser.email}</p> */}
                                    </Card.Text>
                                    <Button style={{ color: "white" }} variant="custom" onClick={onClick}>Log Out</Button>
                                </Card.Body>
                            </Card>
                        <br />
                            <ActivePostsCard />
                </div>
                <br /> 
            </Container>
        </Wrapper>
    );
}

export default User;