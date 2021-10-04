import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import GetStartedPage from "./pages/GetStartedPage";
import GetStartedFreelancerPage from "./pages/GetStartedFreelancerPage";
import GetStartedHiringPage from "./pages/GetStartedHiringPage";
import LoginPage from "./pages/LoginPage";
import LoginFreelancerPage from "./pages/LoginFreelancerPage";
import LoginHiringPage from "./pages/LoginHiringPage";
import LoggedInFreelancerPage from "./pages/LoggedInFreelancerPage";
import LoggedInHiringPage from "./pages/LoggedInHiringPage";
import UpdateFreelancerPage from "./pages/UpdateFreelancerPage";
import UpdateHiringPage from "./pages/UpdateHiringPage";
import NewSearchFreelancerPage from "./pages/NewSearchFreelancerPage";
import NewSearchHiringPage from "./pages/NewSearchHiringPage";
import NewSearchFreelancerSuccessPage from "./pages/NewSearchFreelancerSuccessPage";
import NewSearchHiringSuccessPage from "./pages/NewSearchHiringSuccessPage";
import SwipePanelFreelancerPage from "./pages/SwipePanelFreelancerPage";
import SwipePanelHiringPage from "./pages/SwipePanelHiringPage";
import MatchedFreelancerPage from "./pages/MatchedFreelancerPage";
import MatchedHiringPage from "./pages/MatchedHiringPage";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/get-started">
            <GetStartedPage />
          </Route>
          <Route path="/get-started-freelancer">
            <GetStartedFreelancerPage />
          </Route>
          <Route path="/get-started-hiring">
            <GetStartedHiringPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/login-freelancer">
            <LoginFreelancerPage />
          </Route>
          <Route path="/login-hiring">
            <LoginHiringPage />
          </Route>
          <Route path="/logged-in-freelancer">
            <LoggedInFreelancerPage />
          </Route>
          <Route path="/logged-in-hiring">
            <LoggedInHiringPage />
          </Route>
          <Route path="/update-freelancer">
            <UpdateFreelancerPage />
          </Route>
          <Route path="/update-hiring">
            <UpdateHiringPage />
          </Route>
          <Route path="/new-search-freelancer">
            <NewSearchFreelancerPage />
          </Route>
          <Route path="/new-search-hiring">
            <NewSearchHiringPage />
          </Route>
          <Route path="/new-search-freelancer-success">
            <NewSearchFreelancerSuccessPage />
          </Route>
          <Route path="/new-search-hiring-success">
            <NewSearchHiringSuccessPage />
          </Route>
          <Route path="/swipe-panel-freelancer">
            <SwipePanelFreelancerPage />
          </Route>
          <Route path="/swipe-panel-hiring">
            <SwipePanelHiringPage />
          </Route>
          <Route path="/matched-freelancer">
            <MatchedFreelancerPage />
          </Route>
          <Route path="/matched-hiring">
            <MatchedHiringPage />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
