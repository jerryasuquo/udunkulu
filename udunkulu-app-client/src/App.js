import React, { Component } from "react";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Browse from "./components/Browse";
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import Favorites from "./components/Favorites";
// import LibraryNav from "./components/LibraryNav";
// import Dashboard from "./components/Dashboard";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";

let App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/login" component={HowItWorks} />
        <Route exact path="/artists" component={Artists} />
        <Route exact path="/pricing" component={Pricing} />*/}
        <Route path="/browse" component={Browse} />
        <Route path="/albums" component={Albums} />
        <Route path="/artists" component={Artists} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
      {background && <Route exact path="/signup" children={<SignUp/>}  />}
      {background && <Route exact path="/signin" children={<SignIn/>}  />}
    </div>
  );
}

export default App;
