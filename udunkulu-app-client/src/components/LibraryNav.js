import React from "react";
import Logo from "../assets/img/udunkulu-brand.png";
import Avatar from "../assets/img/avatar.png";
import { Link } from "react-router-dom";
import "../assets/css/LibraryNav.css";

let LibraryNav = () => {
  return (
    <header id="lib-nav">
      <nav>
        <div className="brand">
          <section className="menu">
            <i className="far fa-bars"></i>
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
                <i className="far fa-search"></i>
              </span>
              <input type="search" placeholder="Search" />
            </form>
          </section>
        </div>
        <div className="user-main">
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

export default LibraryNav;
