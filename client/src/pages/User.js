import React, { useContext }from "react";
import UserContext from "../utils/UserContext";
import { Button } from "react-bootstrap";
import PageTitle from "../components/PageTitle"
import Wrapper from "../components/Wrapper";
import axios from "axios";

function User(props) {
    const { user } = useContext(UserContext);
    
    function onClick() {
        axios.get("/api/user/logout")
        .then( (res) => res.logout() )
        .catch(err => console.log(err) );

        {props.stateLogOut()}
    }
    
    return (
        <Wrapper>
            <PageTitle>User Profile</PageTitle>
            <div className="row justify-content-md-center">
                <div className="col-lg-8">
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <br />
                    <Button variant="danger" onClick={onClick}>Log Out</Button>
                </div>
            </div>
        </Wrapper>
    );
}

export default User;