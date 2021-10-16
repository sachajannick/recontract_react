import React, { useContext } from "react";
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
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
import UpdateFreelancerSuccessPage from "./pages/UpdateFreelancerSuccessPage";
import UpdateHiringPage from "./pages/UpdateHiringPage";
import UpdateHiringSuccessPage from "./pages/UpdateHiringSuccessPage";
import NewSearchFreelancerPage from "./pages/NewSearchFreelancerPage";
import NewSearchFreelancerSuccessPage from "./pages/NewSearchFreelancerSuccessPage";
import NewSearchHiringPage from "./pages/NewSearchHiringPage";
import NewSearchHiringSuccessPage from "./pages/NewSearchHiringSuccessPage";
import UpdateSearchFreelancerPage from "./pages/UpdateSearchFreelancerPage";
import UpdateSearchFreelancerSuccessPage from "./pages/UpdateSearchFreelancerSuccessPage";
import UpdateSearchHiringPage from "./pages/UpdateSearchHiringPage";
import UpdateSearchHiringSuccessPage from "./pages/UpdateSearchHiringSuccessPage";
import UploadProfilePictureFreelancerPage from "./pages/UploadProfilePictureFreelancerPage";
import UploadProfilePictureFreelancerSuccessPage from "./pages/UploadProfilePictureFreelancerSuccessPage";
import UploadProfilePictureHiringPage from "./pages/UploadProfilePictureHiringPage";
import UploadProfilePictureHiringSuccessPage from "./pages/UploadProfilePictureHiringSuccessPage";
import MatchPanelFreelancerPage from "./pages/MatchPanelFreelancerPage";
import MatchPanelHiringPage from "./pages/MatchPanelHiringPage";

function App() {
  const { user } = useContext(AuthContext);

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
            {user !== null ? <LoggedInFreelancerPage /> : <Redirect to="/"/>}
          </Route>
          <Route path="/logged-in-hiring">
            {user !== null ? <LoggedInHiringPage /> : <Redirect to="/"/>}
          </Route>
          <Route path="/update-freelancer">
            {user !== null ? <UpdateFreelancerPage /> : <Redirect to="/"/>}
          </Route>
          <Route path="/update-freelancer-success">
            {user !== null ? <UpdateFreelancerSuccessPage /> : <Redirect to="/"/>}
          </Route>
          <Route path="/update-hiring">
            {user !== null ? <UpdateHiringPage /> : <Redirect to="/"/>}
          </Route>
          <Route path="/update-hiring-success">
            {user !== null ? <UpdateHiringSuccessPage /> : <Redirect to="/"/>}
          </Route>
          <Route path="/new-search-freelancer">
            {user !== null ? <NewSearchFreelancerPage /> : <Redirect to="/"/>}
          </Route>
          <Route path="/new-search-freelancer-success">
            {user !== null ? <NewSearchFreelancerSuccessPage /> : <Redirect to="/"/>}
          </Route>
          <Route path="/new-search-hiring">
            {user !== null ? <NewSearchHiringPage /> : <Redirect to="/"/>}
          </Route>
          <Route path="/new-search-hiring-success">
            {user !== null ? <NewSearchHiringSuccessPage /> : <Redirect to="/"/>}
          </Route>
          <Route path="/update-search-freelancer">
            {user !== null ? <UpdateSearchFreelancerPage /> : <Redirect to="/"/>}
          </Route>
          <Route path="/update-search-freelancer-success">
            {user !== null ? <UpdateSearchFreelancerSuccessPage /> : <Redirect to="/"/>}
          </Route>
          <Route path="/update-search-hiring">
            {user !== null ? <UpdateSearchHiringPage /> : <Redirect to="/"/>}
          </Route>
          <Route path="/update-search-hiring-success">
            {user !== null ? <UpdateSearchHiringSuccessPage /> : <Redirect to="/"/>}
          </Route>
          <Route path="/upload-picture-freelancer">
            {user !== null ? <UploadProfilePictureFreelancerPage /> : <Redirect to="/"/>}
          </Route>
          <Route path="/upload-picture-freelancer-success">
            {user !== null ? <UploadProfilePictureFreelancerSuccessPage /> : <Redirect to="/"/>}
          </Route>
          <Route path="/upload-picture-hiring">
            {user !== null ? <UploadProfilePictureHiringPage /> : <Redirect to="/"/>}
          </Route>
          <Route path="/upload-picture-hiring-success">
            {user !== null ? <UploadProfilePictureHiringSuccessPage /> : <Redirect to="/"/>}
          </Route>
          <Route path="/match-panel-freelancer">
            {user !== null ? <MatchPanelFreelancerPage /> : <Redirect to="/"/>}
          </Route>
          <Route path="/match-panel-hiring">
            {user !== null ? <MatchPanelHiringPage /> : <Redirect to="/"/>}
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
