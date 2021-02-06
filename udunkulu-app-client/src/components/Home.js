import React, { Component } from "react";
import Navbar from "./Navbar";
import Drum from "../assets/img/drum.png";
import BoyFace from "../assets/img/boy-img.png";
import SingingMan from "../assets/img/man-img.png";
import Woman from "../assets/img/woman.png";
import SingingGirl from "../assets/img/girl-img.png";
import "../assets/css/Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section id="home">
          <article className="hero-text-wrapper">
            <h1>Beats, Sound, Rhythm, Vocals.</h1>
            <p>
              Experience Nigerian music like never before with <br />
              <span>Udunkulu</span>
            </p>
            <a>Start Listening</a>
          </article>
          <article className="hero-img-wrapper">
            <div className="col-1">
              <img src={Drum} className="col-1-1" />
              <img src={BoyFace} className="col-1-2" />
            </div>
            <div className="col-2">
              <img src={SingingMan} className="col-2-1" />
              <img src={Woman} className="col-2-2" />
              <img src={SingingGirl} className="col-2-3" />
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default Home;
