import React, { useContext, useState } from "react";
import UserContext from "../../utils/UserContext";
import axios from "axios";
import iconImage from "./icon192.ico";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navigation(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser, loggedIn } = useContext(UserContext);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) return;

    axios.post("/api/user/login", { email, password })
      .then((res) => props.stateLogIn(res.data))
      .catch(err => console.log(err));
  }

  const onLogOut = () => {
    axios.post("/api/user/logout", {})
      .then((res) => props.stateLogOut())
      .catch(err => console.log(err));
  }

  const onChange = (event) => {
    const target = event.target;
    switch (target.name) {
      case "email":
        setEmail(target.value);
        break;
      case "password":
        setPassword(target.value);
        break;
      default:
        break;
    }
  }
  
    // This is the login form & signup link that will appear in the Navbar if the user isn't authenticated
    const loginDropdown = (
      <>
        <NavDropdown title="Login" id="nav-dropdown" drop="down">
          <Form className="p-3" style={{ width: "300px"}} onSubmit={onSubmit}>
            <Form.Group>
              <Form.Control 
                type="email" 
                placeholder="Email"
                name="email"
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control 
                type="password" 
                placeholder="Password"
                name="password"
                onChange={onChange}
              />
            </Form.Group>
            <Button style={{ color: "white", backgroundColor: "#4c68a5" }} className="btn-sm" type="submit">
              Log In
            </Button>
          </Form>
        </NavDropdown>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
      </>
    );

    // This is the logout link that will appear in the Navbar if the user isn't authenticated
    const logoutLink = (
      <Nav.Link onClick={onLogOut}>Logout</Nav.Link>
    );

    const profileLink = (
      <Nav.Link href={`/user/${currentUser._id}`}>{currentUser.name}</Nav.Link>
    );

    return (
      <Navbar expand="md" sticky="top" bg="dark" variant="dark" >
        {/* Page name/logo, links to home page */}
        <Navbar.Brand bg="light" href="/">
          <img
            src={iconImage}
            alt="Care Package Logo"
            width="80"
            height="80"
            className="d-inline-block align-top" 
            style={{marginRight: "15px", marginLeft: "20px"}}
          />
          <h1 style={{color: "#d0c311", marginTop: "10px", textShadow: "2px 2px 4px #000000", fontWeight: "bold"}}>CARE PACKAGE<small>Passing Gifts to Neighbors with Heart</small></h1>
        </Navbar.Brand>

        {/* Toggler */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar content - displayed as hamburger on sizes <= medium, hamburger on sizes > medium */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            
            {/* Login dropdown form  OR logout link */}
            {loggedIn ? logoutLink : loginDropdown }

            {/* Navigation Links */}
            <Nav.Link href="/create-post">Create a Post</Nav.Link>

            <Nav.Link href="/home/#see-posts">See Posts</Nav.Link>

            {/* <NavDropdown title="Community Exchange" id="community-exchange-dropdown">
              <NavDropdown.Item href="#search-filter">Goods</NavDropdown.Item>
              <NavDropdown.Item href="#search-filter">Services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Requests</NavDropdown.Item>
              <NavDropdown.Item href="/create-post">Offer/Ask for Something</NavDropdown.Item>
            </NavDropdown> */}

            {/* <NavDropdown style={{color: "white"}} title="Resource Distribution" id="resource-distribution-dropdown">
              <NavDropdown.Item href="#">$ requests</NavDropdown.Item>
              <NavDropdown.Item href="#">Ask for $</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Mutual Aid Fridges</NavDropdown.Item>
              <NavDropdown.Item href="#">Community Events</NavDropdown.Item>
            </NavDropdown> */}

            {/* Profile link */}
            {loggedIn ? profileLink : <></> }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Navigation;
