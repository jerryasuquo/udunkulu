import React, { Component } from "react";
import LibraryNav from "./LibraryNav";
import Dashboard from "./Dashboard";
import "../assets/css/Browse.css";
import KissDaniel from "../assets/img/kiss-daniel.png";
import NextBtn from "../assets/img/next-button.png";

class Browse extends Component {
  render() {
    return (
      <div>
        <LibraryNav />
        <Dashboard />
        <div id="browse">
          <section className="card-main-topmost">
            <p>Fresh Picks For You</p>
            <div className="card-box">
              <img src={NextBtn} className="card-next-btn" />
              <div className="card">
                <img src={KissDaniel} />
                <img src={KissDaniel} />
                <img src={KissDaniel} />
                <img src={KissDaniel} />
              </div>
            </div>
          </section>
          <section className="card-main-bottom">
            <p>Trending</p>
            <div className="card-box">
              <img src={NextBtn} className="card-next-btn" />
            </div>
            <div className="card">
              <img src={KissDaniel} />
              <img src={KissDaniel} />
              <img src={KissDaniel} />
              <img src={KissDaniel} />
            </div>
          </section>
          <section className="card-main-bottom">
            <p>New Releases</p>
            <div className="card-box">
              <img src={NextBtn} className="card-next-btn" />
              <div className="card">
                <img src={KissDaniel} />
                <img src={KissDaniel} />
                <img src={KissDaniel} />
                <img src={KissDaniel} />
              </div>
            </div>
          </section>
          <section className="card-main-bottom">
            <p>Top 100 Hot</p>
            <div className="card-box">
              <img src={NextBtn} className="card-next-btn" />
              <div className="card">
                <img src={KissDaniel} />
                <img src={KissDaniel} />
                <img src={KissDaniel} />
                <img src={KissDaniel} />
              </div>
            </div>
          </section>
          <section className="card-main-bottom">
            <p>Top Artists</p>
            <div className="card-box">
              <img src={NextBtn} className="card-next-btn" />
              <div className="card">
                <img src={KissDaniel} />
                <img src={KissDaniel} />
                <img src={KissDaniel} />
                <img src={KissDaniel} />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Browse;