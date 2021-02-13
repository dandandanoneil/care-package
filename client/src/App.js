import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContext from "./utils/UserContext";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import User from "./pages/User";
import Signup from "./pages/Signup";
import PostDetail from "./pages/PostDetail";
import Mission from "./pages/Mission";
import MeetTeam from "./pages/MeetTeam";
import CommunityAgreements from "./pages/CommunityAgreements.js";
import TermsOfUse from "./pages/TermsOfUse";
import HowItWorks from "./pages/HowItWorks";
import UserStories from "./pages/UserStories";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


function App() {
  if (!JSON.parse(window.localStorage.getItem("user"))) window.localStorage.setItem("user", {});
  if (!JSON.parse(window.localStorage.getItem("status"))) window.localStorage.setItem("status", "");

  const [userState, setUserState] = useState({
    currentUser: JSON.parse(window.localStorage.getItem("user")),
    loggedIn: JSON.parse(window.localStorage.getItem("status"))
  });

  function stateLogIn(user) {
    setUserState({
      currentUser: user,
      loggedIn: true
    });
  }

  function stateLogOut() {
    setUserState({
      currentUser: {},
      loggedIn: false
    });
  }

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(userState.currentUser));
    window.localStorage.setItem("status", JSON.stringify(userState.loggedIn));
  }, [userState.currentUser, userState.loggedIn]);

  return (
    <Router>
      <UserContext.Provider value={userState}>
        <div className="wrapper">
        <Navigation stateLogIn={stateLogIn} stateLogOut={stateLogOut} />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/create-post" component={CreatePost} />
            <Route path="/user" component={User} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/post" component={PostDetail} />
            <Route exact path="/mission" component={Mission} />
            <Route exact path="/meet-our-team" component={MeetTeam} />
            <Route exact path="/community-agreements" component={CommunityAgreements} />
            <Route exact path="/terms-of-use" component={TermsOfUse} />
            <Route exact path="/how-it-works" component={HowItWorks } />
            <Route exact path="/user-stories" component={UserStories} />
            <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;