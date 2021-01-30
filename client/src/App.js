import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./pages/User";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import Mission from "./pages/Mission";
import MeetTeam from "./pages/MeetTeam";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
        <Switch>
      <div>
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/user" component={User} />
          <Route exact path="/postdetail" component={PostDetail} />
          <Route exact path="/mission" component={Mission} />
          <Route exact path="/meetteam" component={MeetTeam} />
        <Footer />
      </div>
        </Switch>
    </Router>
  );
}

export default App;
