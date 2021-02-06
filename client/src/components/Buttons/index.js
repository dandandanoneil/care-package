import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import giveButton from "./give-button.png";
import askButton from "./ask-button.png";
import "./style.css";

const Buttons = () => {
    return (
      <div className="p-5 text-center">
        <a className="mr-5" href="/create-post">
          <img src={giveButton} alt="Give Something" />
        </a>
        <a className="ml-5" href="/create-post">
          <img src={askButton} alt="Ask for Something" />
        </a>
      </div>
  )
}




export default Buttons
