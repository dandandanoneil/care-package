import React, { useContext, useState } from "react";
import UserContext from "../../utils/UserContext";
import iconImage from "./favicon.ico";
import axios from "axios";
import "./style.css";

import SignupForm from "../SignupForm";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function Navigation(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    message: "",
    show: false
  });
  const { currentUser, loggedIn } = useContext(UserContext);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) return;

    axios.post("/api/user/login", { email, password })
      .then((res) => props.stateLogIn(res.data))
      .catch(err => {
        console.log(err);
        setError({
          message: err.name,
          show: true
        })
        if (err.name === "Error") {
          setError({
            message: `There was an error logging you in. Check that your email and password are correct, or try again later.`
          })
        }
      });
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

  const loginDropdown = (
      <NavDropdown title="Login" id="nav-dropdown" drop="left">
        <Form className="p-3" style={{ width: "300px" }} onSubmit={onSubmit}>
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
          <Button style={{ color: "white", backgroundColor: "#4c68a5" }} className="btn-sm login-btn" type="submit">
            Log In
            </Button>

          <Alert className="mt-3" variant="danger" show={error.show} onClose={() => setError({ message: "", show: false })} dismissible>
            <small>{error.message}</small>
          </Alert>
        </Form>
      </NavDropdown>
  );

  const signupDropdown = (
      <NavDropdown title="Signup" id="nav-dropdown" drop="left">
        <SignupForm />
      </NavDropdown>
  );

  const logoutLink = (
    <Nav.Link className='login-btn' onClick={onLogOut}>Logout</Nav.Link>
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
          width="50"
          height="50"
          className="d-inline-block align-top responsive"
          style={{ marginRight: "15px", marginLeft: "20px" }}
        />
        <h1 style={{ color: "#d0c311", marginTop: "10px", textShadow: "2px 2px 4px #000000", fontWeight: "bold" }}>CARE PACKAGE<small>Passing Gifts to Neighbors with Heart</small></h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />

      {/* Navbar content - displayed as hamburger on sizes <= medium, hamburger on sizes > medium */}
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">

          {/* Login dropdown form */}
          {loggedIn ? null : loginDropdown}

          {/* Signup dropdown form  */}
          {loggedIn ? null : signupDropdown}

          {/* Navigation Links */}
          {loggedIn ? (
            <Nav.Link href="/create-post">Create a Post</Nav.Link>
          ) : null}

          <Nav.Link href="/posts">See Posts</Nav.Link>

          {/* Profile link */}
          {loggedIn ? profileLink : null}

          {/* Logout link */}
          {loggedIn ? logoutLink : null}

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
