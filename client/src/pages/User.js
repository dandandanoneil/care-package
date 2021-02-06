import React, { useContext }from "react";
import UserContext from "../utils/UserContext";
import { Button } from "react-bootstrap";
import PageTitle from "../components/PageTitle"
import Wrapper from "../components/Wrapper";
import MessageCard from "../components/MessageCard";
import axios from "axios";
import "./user.css";

function User(props) {
    const { currentUser } = useContext(UserContext);
    
    function onClick() {
        axios.post("/api/user/logout", {})
        .then( (res) => res.logout() )
        .catch(err => console.log(err) );

        {props.stateLogOut()}
    }
    
    return (
        <Wrapper>
            <PageTitle>User Profile</PageTitle>
            <div className="row justify-content-md-center">
            <div className="col-lg-4">
                    <MessageCard />
                </div>
                <div className="col-lg-8">
                    <p style={{color: "#5a5a5a"}} >Name: {currentUser.name}</p>
                    <p style={{color: "#5a5a5a"}} >Email: {currentUser.email}</p>
                    <br />
                    <Button style={{color: "white"}} variant="custom" onClick={onClick}>Log Out</Button>
                </div>
            </div>
        </Wrapper>
    );
}

export default User;