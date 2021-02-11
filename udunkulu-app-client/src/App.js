import React, { Component } from "react";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Recmd from "./components/Recmd";
import { Switch, Route, useLocation } from "react-router-dom";

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
        <Route exact path='/recmds' component={Recmd} />
      </Switch>
      {background && <Route exact path="/signup" children={<SignUp/>}  />}
      {background && <Route exact path="/signin" children={<SignIn/>}  />}
    </div>
  );
}

export default App;
