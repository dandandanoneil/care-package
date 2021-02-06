import React, { useContext }from "react";
import UserContext from "../utils/UserContext";
import { Button } from "react-bootstrap";
import PageTitle from "../components/PageTitle"
import Wrapper from "../components/Wrapper";
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
                <div className="col-lg-8">
                    <p style={{color: "#941010"}} >Name: {currentUser.name}</p>
                    <p style={{color: "#941010"}} >Email: {currentUser.email}</p>
                    <br />
                    <Button variant="custom" onClick={onClick}>Log Out</Button>
                </div>
            </div>
        </Wrapper>
    );
}

export default User;