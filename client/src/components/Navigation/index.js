import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";
import axios from "axios";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Navigation extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          email: "",
          password: "",
      };
  }

  onSubmit = (event) => {
      event.preventDefault();

      if (!this.state.email || !this.state.password) return;

      axios.post("/api/user/login", {
          email: this.state.email,
          password: this.state.password
      })
      .then( (res) => console.log(res.data) )
      .catch(err => console.log(err) );
  }

  onChange = (event) => {
      const target = event.target;
      switch (target.name) {
          case "email":
              this.setState({ email: target.value });
              break;
          case "password":
              this.setState({ password: target.value });
              break;
          default:
              break;
      }
  }
  
  render() {
    return (
      <Navbar expand="md" sticky="top">
        {/* Page name/logo, links to home page */}
        <Navbar.Brand style={{color: "white"}} href="/">
          Care Package
        </Navbar.Brand>

        {/* Toggler */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar content - displayed as hamburger on sizes <= medium, hamburger on sizes > medium */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            
            {/* Login dropdown form */}
            <NavDropdown title="Login" id="nav-dropdown" drop="down">
              <NavDropdown.Item href="/signup">Sign up to start sharing!</NavDropdown.Item>
              <NavDropdown.Divider />
              <Form className="p-12 m-3" onSubmit={this.onSubmit}>
                <Form.Group>
                  <Form.Control 
                    type="email" 
                    placeholder="Email"
                    name="email"
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Button className="btn-sm" variant="primary" type="submit" style={{color: "white"}}>
                  Log In
                </Button>
              </Form>
            </NavDropdown>

            {/* Navigation Links */}
            <Nav.Link href="/#" style={{color: "white"}} >Ask/Offer</Nav.Link>

            <NavDropdown title="Community Exchange" id="community-exchange-dropdown">
              <NavDropdown.Item href="#">Goods</NavDropdown.Item>
              <NavDropdown.Item href="#">Services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Offer/Ask for Something</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown style={{color: "white"}} title="Resource Distribution" id="resource-distribution-dropdown">
              <NavDropdown.Item href="#">$ requests</NavDropdown.Item>
              <NavDropdown.Item href="#">Ask for $</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Mutual Aid Fridges</NavDropdown.Item>
              <NavDropdown.Item href="#">Community Events</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/user" style={{color: "white"}} >Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
