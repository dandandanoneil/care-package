import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="footer">
      <div className="row text-center justify-content-md-center">
        <div className="col-md-3">
          <h4>Care Package</h4>
          <h6><a href="/meet-our-team">Meet our Team</a></h6>
          <h6><a href="/community-agreements">Community Agreements</a></h6>
        </div>

        <div className="col-md-3">
          <h4>Resources</h4>
          <h6><a href="/some-link">Some Link</a></h6>
          <h6><a href="/another-link">Another Link</a></h6>
        </div>

        <div className="col-md-3">
          <h4>Legal</h4>
          <h6><a href="/terms-of-use">Terms of Use</a></h6>
          <h6><a href="/privacy-policy">Privacy Policy</a></h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
