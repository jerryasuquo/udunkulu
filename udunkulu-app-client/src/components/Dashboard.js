import React, { Component } from "react";
// import LibraryNav from "./LibraryNav";
import Browse from "../assets/img/browse.png";
import Albums from "../assets/img/albums.png";
import Artists from "../assets/img/artists.png";
import Favorites from "../assets/img/favorites.png";
import "../assets/css/Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <section className="dashboard-main">
          <div className="dashboard-nav dashboard-browse">
            <img src={Browse} />
            <span>Browse</span>
          </div>
          <div className="dashboard-nav">
            <img src={Albums} />
            <span>Albums</span>
          </div>
          <div className="dashboard-nav">
            <img src={Artists} />
            <span>Artists</span>
          </div>
        </section>
        <section className="my-music">
          <p className="dashboard-nav">My Music</p>
          <div className="dashboard-nav">
            <img src={Favorites} />
            <span>Favorites</span>
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;
