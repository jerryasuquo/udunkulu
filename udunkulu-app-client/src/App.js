import React, { Component } from "react";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ArtistSignUp from "./components/ArtistSignUp";
import Browse from "./components/Browse";
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import Favorites from "./components/Favorites";
import Playlist from './components/Playlist';
//import Upload from './components/Upload;
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
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/upload" component={Upload} /> */}
        <Route path="/browse" component={Browse} />
        <Route path="/albums" component={Albums} />
        <Route path="/artists" component={Artists} />
        <Route path="/favorites" component={Favorites} />
        <Route path='/playlist:id' component={Playlist} />
      </Switch>
      {background && <Route exact path="/signup" children={<SignUp/>}  />}
      {background && <Route exact path="/signin" children={<SignIn/>}  />}
      {background && <Route exact path="/artists-signup" children={<ArtistSignUp/>}  />}
    </div>
  );
}

export default App;
