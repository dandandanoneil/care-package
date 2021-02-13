import React from "react";
import "./style.css";

function Footer() {
  return (
    <div>
      <div className="push">
      <div style={{ borderTopColor: "#d05d11", borderTopWidth: "20px" }} className="footer">
        <div className="row text-center justify-content-md-center">
          <div className="col-sm-4">
            <h4 style={{ color: "#d0c311", textShadow: "2px 2px 4px #000000" }} >Care Package</h4>
            <h6><a href="/meet-our-team"
              style={{ color: "#ebe8c1" }}
            >Meet our Team</a></h6>
            <h6><a href="/how-it-works"
              style={{ color: "#ebe8c1" }}
            >How it Works</a></h6>
          </div>

          <div className="col-sm-4">
            <h4 style={{ color: "#d0c311", textShadow: "2px 2px 4px #000000" }} >Resources</h4>
            <h6><a href="https://www.thecitypulse.com/post/community-refrigerators"
              target="_blank"
              style={{ color: "#ebe8c1" }}
            >Mutual Aid Fridge Map</a></h6>
            <h6><a href="https://phillywerise.com/mutual-aid-resources/"
              target="_blank"
              style={{ color: "#ebe8c1" }}
            >Philadelphia Reparations</a></h6>
          </div>

          <div className="col-sm-4">
            <h4 style={{ color: "#d0c311", textShadow: "2px 2px 4px #000000" }} >Legal</h4>
            <h6><a href="/terms-of-use"
              style={{ color: "#ebe8c1" }}
            >Terms of Use</a></h6>
            <h6><a href="/community-agreements"
              style={{ color: "#ebe8c1" }}
            >Community Agreements</a></h6>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Footer;
