import React from "react";

const UserContext = React.createContext({
  currentUser: {},
  loggedIn: false
});

export default UserContext;
