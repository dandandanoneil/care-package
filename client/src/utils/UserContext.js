import React from "react";

const UserContext = React.createContext({
  currentUser: {
    _id: "",
    name: "",
    email: "",
    password: "",
    posts: [],
    comments: [],
    memberSince: "",
    bio: ""
  },
  loggedIn: false
});

export default UserContext;
