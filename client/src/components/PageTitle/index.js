import React from "react";

function PageTitle(props) {
  return (
    <div className="text-center">
      <br />
      <h1 style={{ color: '#d05d11', padding: '40px', textShadow: "1px 1px 2px #000000" }}>{props.children}</h1>
      <br />
    </div>
  );
}

export default PageTitle;
