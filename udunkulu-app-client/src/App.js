import React, { Component } from "react";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
// import Home from "./components/Home";
// import LibraryNav from "./components/LibraryNav";
// import Dashboard from "./components/Dashboard";
import Browse from "./components/Browse";
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import Favorites from "./components/Favorites";
import { Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/browse" component={Browse} />
        <Route path="/albums" component={Albums} />
        <Route path="/artists" component={Artists} />
        <Route path="/favorites" component={Favorites} />
        {/* <Route path="/" component={Home} />
        <Route path="/login" component={HowItWorks} />
        <Route path="/signup" component={Artists} />
        <Route path="/login" component={Pricing} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} /> */}
      </div>
    );
  }
}

export default App;
