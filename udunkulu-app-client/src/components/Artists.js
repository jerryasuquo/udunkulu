import React, { Component } from "react";
import LibraryNav from "./LibraryNav";
import ArtistsMenu from "./ArtistsMenu";
import "../assets/css/Artists.css";
import WizKid from "../assets/img/wizkid.png";
import { Link } from "react-router-dom";

class Artists extends Component {
  render() {
    return (
      <div>
        <LibraryNav />
        <ArtistsMenu />
        <div id="artists">
          <section className="card-main-topmost">
            <p>Your Favorite Artists</p>
            <div className="card-box">
              <div className="card">
              <Link to="/artists-davido" className="link-extended">
                <img src={WizKid} />
                <img src={WizKid} />
                <img src={WizKid} />
                <img src={WizKid} />
                <img src={WizKid} />
                <img src={WizKid} />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Artists;
