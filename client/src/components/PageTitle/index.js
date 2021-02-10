import React from "react";

function PageTitle(props) {
  return (
    <div className="text-center">
      <br />
      <h1 style={{color: "#4c68a5"}}>{props.children}</h1>
      <br />
    </div>
  );
}

export default PageTitle;
