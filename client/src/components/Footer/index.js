import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="footer">
      <div className="row text-center justify-content-md-center">
        <div className="col-md-3">
          <h4 style={{color: "white"}} >Care Package</h4>
          <h6><a href="/meet-our-team"
          style={{color: "white"}}
          >Meet our Team</a></h6>
          <h6><a href="/community-agreements"
          style={{color: "white"}}
          >Community Agreements</a></h6>
        </div>

        <div className="col-md-3">
          <h4 style={{color: "white"}} >Resources</h4>
          <h6><a href="/https://www.thecitypulse.com/post/community-refrigerators"
            target="_blank"
          style={{color: "white"}}
          >Mutual Aid Fridge Map</a></h6>
          <h6><a href="/https://phillywerise.com/mutual-aid-resources/"
          target="_blank"
          style={{color: "white"}}
          >Philadelphia Reparations</a></h6>
        </div>

        <div className="col-md-3">
          <h4 style={{color: "white"}} >Legal</h4>
          <h6><a href="/terms-of-use"
          style={{color: "white"}}
          >Terms of Use</a></h6>
          <h6><a href="/privacy-policy"
          style={{color: "white"}}
          >Privacy Policy</a></h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
