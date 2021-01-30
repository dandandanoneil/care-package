import React from "react";


//****update header return
function Header(props) {
  return <div className="card-header"
  style={{color: "#6ea7d2"}}
  >{props.children}</div>;
}

export default Header;