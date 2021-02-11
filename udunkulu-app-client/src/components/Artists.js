import React, { Component } from "react";
import LibraryNav from "./LibraryNav";
import Dashboard from "./Dashboard";
import "../assets/css/Artists.css";
import WizKid from "../assets/img/wizkid.png";

class Browse extends Component {
  render() {
    return (
      <div>
        <LibraryNav />
        <Dashboard />
        <div id="artists">
          <section className="card-main-topmost">
            <p>Your Favorite Artists</p>
            <div className="card-box">
              <div className="card">
                <img src={WizKid} />
                <img src={WizKid} />
                <img src={WizKid} />
                <img src={WizKid} />
                <img src={WizKid} />
                <img src={WizKid} />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Browse;
