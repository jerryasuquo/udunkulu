import React from "react";
import Logo from "../assets/img/udunkulu-brand.png";
import AvatarMikasa from "../assets/img/avatar-mikasa.png";
import { Link } from "react-router-dom";
import "../assets/css/LibraryNavArtists.css";

let LibraryNavArtists = () => {
  return (
    <header id="lib-nav-artists">
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
              <input type="search" placeholder="Search" />
              <span>
                <i className="far fa-search"></i>
              </span>
            </form>
          </section>
        </div>
        <div className="user-main">
          <section className="user">
            <p>
              Welcome back, <span>Mikasa</span>
            </p>
          </section>
          <section className="user-select">
            <form>
              <img src={AvatarMikasa} />
              <select>
                <option value=""></option>
              </select>
            </form>
          </section>
        </div>
      </nav>
    </header>
  );
};

export default LibraryNavArtists;
