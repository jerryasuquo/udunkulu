import React, { Component } from "react";
import Logo from "../assets/img/udunkulu-brand.png";
import Avatar from "../assets/img/avatar.png";
import { Link } from "react-router-dom";
import "../assets/css/LibraryNav.css";

export default class LibraryNav extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className="brand">
            <section className="menu">
              <i class="far fa-bars"></i>
            </section>
            <section className="brand-wrapper">
              <Link to="/">
                <img src={Logo} className="brand-logo" />
                <p className="brand-text">UDUNKULU</p>
              </Link>
            </section>
          </div>
          <div>
            <section className="search">
              <form>
                <span>
                  <i class="far fa-search"></i>
                </span>
                <input type="search" placeholder="Search" />
              </form>
            </section>
          </div>
          <div>
            <section className="user">
              <p>
                Welcome back, <span>Eren</span>
              </p>
            </section>
            <section className="user-select">
              <form>
                <img src={Avatar} />
                <select>
                  <option value=""></option>
                </select>
              </form>
            </section>
          </div>
        </nav>
      </header>
    );
  }
}
