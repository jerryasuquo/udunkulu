import React from "react";
import { Link } from "react-router-dom";
import Upload from "../assets/img/upload.png";
import Analytics from "../assets/img/analytics.png";
import Bars from "../assets/img/bars.png";
import Switch from "../assets/img/switch.png";
import "../assets/css/ArtistsUploadMenu.css";

let ArtistsUploadMenu = () => {
  return (
    <div id="artists-upload-dashboard">
      <section className="dashboard-main">
        <div className="dashboard-nav dashboard-browse">
          <img src={Upload} />
          <Link to="/browse" className="link">
            <span>Upload</span>
          </Link>
        </div>
        <div className="dashboard-nav">
          <img src={Analytics} />
          <Link to="/albums" className="link">
            <span>Analytics</span>
          </Link>
        </div>
        <div className="dashboard-nav">
          <img src={Bars} />
          <Link to="/artists" className="link">
            <span>Music Catalog</span>
          </Link>
        </div>
      </section>
      <section className="my-music">
        <p className="dashboard-nav">My Music</p>
        <div className="dashboard-nav">
          <img src={Switch} />
          <Link to="/favorites" className="link">
            <span>Switch to Player</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ArtistsUploadMenu;
