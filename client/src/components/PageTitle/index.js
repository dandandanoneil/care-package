import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function PageTitle(props) {
  return (
    <div className="text-center">
      <br />
      <h1>{props.children}</h1>
      <br />
    </div>
  );
}

export default PageTitle;