import React, { Component } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <SignUp />
        <SignIn />
        <Route path="/" component={Home} />
        {/* <Route path="/login" component={HowItWorks} />
        <Route path="/signup" component={Artists} />
        <Route path="/login" component={Pricing} />*/}
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} /> 
      </div>
    );
  }
}

export default App;
