import React from "react";
import Navbar from "./Navbar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ArtistSignUp from "./ArtistSignUp";
import { displaySignup } from "../ModalLogic";
import { Link, useLocation } from "react-router-dom";
import Drum from "../assets/img/drum.png";
import BoyFace from "../assets/img/boy-img.png";
import SingingMan from "../assets/img/man-img.png";
import Woman from "../assets/img/woman.png";
import SingingGirl from "../assets/img/girl-img.png";
import "../assets/css/Home.css";

let Home = () => {
  let location = useLocation();

  let displayModal = (e) => {
    displaySignup();
  };

  return (
    <div>
      <Navbar />
      <SignUp />
      <SignIn />
      <ArtistSignUp />
      <section id="home">
        <div className="hero-text-wrapper">
          <h1>Beats, Sound, Rhythm, Vocals.</h1>
          <p>
            Experience Nigerian music like never before with <br />
            <span>Udunkulu</span>
          </p>
          <Link
            to={{ pathname: "/signup", state: { background: location } }}
            className="hero-text-signup"
            onClick={displayModal}
          >
            Start Listening
          </Link>
        </div>
        <div className="hero-img-wrapper">
          <div className="row-1">
            <div className="col-1">
              <img src={Drum} />
            </div>
            <div className="col-2">
              <img src={BoyFace} />
            </div>
          </div>
          <div className="row-2">
            <div className="col-1">
              <div className="col-1-1">
                <img src={SingingMan} />
              </div>
              <div className="col-1-2">
                <img src={Woman} />
              </div>
            </div>
            <div className="col-2">
              <img src={SingingGirl} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
