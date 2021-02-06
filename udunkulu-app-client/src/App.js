import React, { Component } from "react";
// import SignIn from "./components/Home";
// import SignIn from "./components/SignIn";
import Home from "./components/Home";
// import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route path="/login" component={HowItWorks} />
        <Route path="/signup" component={Artists} />
        <Route path="/login" component={Pricing} />
        <Route path="/login" component={SignIn} />
        <Route path="/signup" component={SignUp} /> */}
        <Home />
      </div>
    );
  }
}

export default App;
