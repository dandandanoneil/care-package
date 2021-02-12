import React from "react";
import Image from "react-bootstrap/Image";
import giveButton from "./give-button.png";
import askButton from "./ask-button.png";
import "./style.css";

const Buttons = () => {
    return (
      <div className="row">
        <div className="col text-center">
          <a href="/create-post">
            <Image 
              src={giveButton} 
              alt="Give Something" 
              className="m-5 img-button"
              fluid />
          </a>
          <a href="/create-post">
            <Image 
              src={askButton} 
              alt="Ask for Something" 
              className="m-5 img-button"
              fluid />
          </a>
        </div>
      </div>
  )
}

export default Buttons
