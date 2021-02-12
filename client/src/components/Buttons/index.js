import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import giveButton from "./give-button.png";
import askButton from "./ask-button.png";
import "./style.css";

const Buttons = () => {
    return (
      <div className="row">
        <div className="col text-center">
          <a href="/create-post">
            <img 
              src={giveButton} 
              alt="Give Something" 
              className="m-5 img-button"
              fluid />
          </a>
          <a href="/create-post">
            <img 
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
