import React from "react";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ArtistSignUp from "./components/ArtistSignUp";
import Browse from "./components/Browse";
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import Favorites from "./components/Favorites";
import AlbumsExtended from "./components/AlbumsExtended";
import ArtistsExtended from "./components/ArtistsExtended";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";

let App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/pricing" component={Pricing} />
        <Route path="/browse" component={Browse} />
        <Route path="/albums" component={Albums} />
        <Route path="/artists" component={Artists} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/albums-simisola" component={AlbumsExtended} />
        <Route path="/artists-davido" component={ArtistsExtended} />
      </Switch>
      {background && <Route exact path="/signup" children={<SignUp />} />}
      {background && <Route exact path="/signin" children={<SignIn />} />}
      {background && (
        <Route exact path="/artists-signup" children={<ArtistSignUp />} />
      )}
    </div>
  );
};

export default App;
