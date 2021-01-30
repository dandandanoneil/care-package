import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Nav from "react-bootstrap/Navbar"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <Nav className="navbar sticky-top navbar-light font-weight-light">
      <Link className="navbar-brand" to="/">
        Care Package
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> 
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/" || window.location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/posts"
                  className={window.location.pathname === "/posts" ? "nav-link active" : "nav-link"}
                >
                  Ask or Offer
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/home"
                  className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
                >
                  Community Exchange
                </Link>
                <li className="nav-item">
                <Link
                  to="/home"
                  className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
                >
                  Resource Redistribution
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/user"
                  className={window.location.pathname === "/user" ? "nav-link active" : "nav-link"}
                >
                  My Profile
                </Link>
              </li>
              </li>
            </ul>
          </div>
    </Nav>
  );
}

export default Navbar;
