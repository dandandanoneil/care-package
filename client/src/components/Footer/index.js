import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="footer">
      <div className="row text-center justify-content-md-center">
        <div className="col-md-3">
          <h4>Care Package</h4>
          <h6><a href="/meet-our-team"
          style={{color: "black"}}
          >Meet our Team</a></h6>
          <h6><a href="/community-agreements"
          style={{color: "black"}}
          >Community Agreements</a></h6>
        </div>

        <div className="col-md-3">
          <h4 style={{color: "white"}} >Resources</h4>
          <h6><a href="/some-link"
          style={{color: "white"}}
          >Mutual Aid Fridge Map</a></h6>
          <h6><a href="/another-link"
          style={{color: "white"}}
          >Philadelphia Reparations</a></h6>
        </div>

        <div className="col-md-3">
          <h4 style={{color: "#5a5a5a"}} >Legal</h4>
          <h6><a href="/terms-of-use"
          style={{color: "grey"}}
          >Terms of Use</a></h6>
          <h6><a href="/privacy-policy"
          style={{color: "grey"}}
          >Privacy Policy</a></h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
