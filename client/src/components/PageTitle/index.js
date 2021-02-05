import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function PageTitle(props) {
  return (
    <div className="text-center">
      <br />
      <h1 style={{color: "#5a5a5a"}}>{props.children}</h1>
      <br />
    </div>
  );
}

export default PageTitle;
