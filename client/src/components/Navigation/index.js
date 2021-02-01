import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navigation() {
  return (
    <Navbar bg="light" expand="md" sticky="top">
      {/* Page name/logo, links to home page */}
      <Navbar.Brand href="/">
        Care Package
      </Navbar.Brand>

      {/* Toggler */}
      <Navbar.Toggle aria-controls="navbar-nav" />

      {/* Navbar content - displayed as hamburger on sizes <= medium, hamburger on sizes > medium */}
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          
          {/* Login dropdown form */}
          <NavDropdown title="Login" id="nav-dropdown" drop="down">
            <NavDropdown.Item href="#">Sign up to start sharing!</NavDropdown.Item>
            <NavDropdown.Divider />
            <Form className="p-12 m-3" >
              <Form.Group>
                <Form.Control type="email" placeholder="Email"></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" placeholder="Password"></Form.Control>
              </Form.Group>
              <Button className="btn-sm" variant="primary" type="submit">
                Log In
              </Button>
            </Form>
          </NavDropdown>

          {/* Navigation Links */}
          <Nav.Link href="/home">Ask/Offer</Nav.Link>

          <NavDropdown title="Community Exchange" id="community-exchange-dropdown">
            <NavDropdown.Item href="#">Goods</NavDropdown.Item>
            <NavDropdown.Item href="#">Services</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Offer/Ask for Something</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Resource Distribution" id="resource-distribution-dropdown">
            <NavDropdown.Item href="#">$ requests</NavDropdown.Item>
            <NavDropdown.Item href="#">Ask for $</NavDropdown.Item>
            <NavDropdown.Divider />
            {/* <NavDropdown.Item href="#">Mutual Aid Fridges</NavDropdown.Item> */}
            <NavDropdown.Item href="#">Community Events</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#">Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
