import React, { Component } from "react";
import Logo from "../assets/img/udunkulu-brand.png";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <nav className="navbar">
            <section className="brand-wrapper">
              <Link to="/">
                <img src={Logo} className="brand-logo" />
                <p className="brand-text">UDUNKULU</p>
              </Link>
            </section>
            <section className="nav-wrapper">
              <ul>
                <li>
                  <Link to="HowItWorks" className="nav-link">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="Artists" className="nav-link">
                    Artists
                  </Link>
                </li>
                <li>
                  <Link to="Pricing" className="nav-link">
                    Pricing
                  </Link>
                </li>
              </ul>
            </section>
            <a className="nav-btn">
              <Link to="SignIn" className="nav-btn-link">
                Sign In
              </Link>
            </a>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;
