import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import PageTitle from "../components/PageTitle"
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import axios from "axios";

function User() {
    const [user, setUser] = useState({})

    useEffect(() => {
        loadUser()
    }, [])

    function loadUser() {
        console.log("loadUser");
        API.getUser()
        .then(res => {
            console.log(res.data);
            setUser({
                name: res.data.name,
                email: res.data.email, 
                posts: res.data.posts,
                comments: res.data.comments
            });
          }
    
          )
          .catch(err => console.log(err));
    }
    
    function onClick() {
        setUser({});
        axios.get("/api/user/logout")
        .then( (res) => res.logout() )
        .catch(err => console.log(err) );
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