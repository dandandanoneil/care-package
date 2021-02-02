import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import User from "./pages/User";
import Signup from "./pages/Signup";
import PostDetail from "./pages/PostDetail";
import Mission from "./pages/Mission";
import MeetTeam from "./pages/MeetTeam";
import CommunityAgreements from "./pages/CommunityAgreements.js";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
        <Navigation />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/user" component={User} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/postdetail" component={PostDetail} />
            <Route exact path="/mission" component={Mission} />
            <Route exact path="/meet-our-team" component={MeetTeam} />
            <Route exact path="/community-agreements" component={CommunityAgreements} />
            <Route exact path="/terms-of-use" component={TermsOfUse} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;