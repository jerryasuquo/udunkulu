import React from "react";
import LibraryNav from "./LibraryNav";
import FavoritesMenu from "./FavoritesMenu";
import "../assets/css/Favorites.css";
import KissDaniel from "../assets/img/kiss-daniel.png";
import NextBtn from "../assets/img/next-button.png";
import FavoritesIcon from "../assets/img/favorites.png";
import More from "../assets/img/more-vert.png";
import { Link } from "react-router-dom";

let Favorites = () => {
  return (
    <div>
      <LibraryNav />
      <FavoritesMenu />
      <section className="card-main-topmost">
        <p>Albums</p>
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

      <section className="card-main-topmost">
        <p>Tracks</p>
        <div className="tracklist card-box">
          <div className="track">
            <Link to="#">
              <img src={KissDaniel} />
              <span>Mama</span>
              <span>Kiss Daniel</span>
              <span>Single</span>
              <span>2017</span>
              <img src={FavoritesIcon} />
              <span>3:23 / 4:03</span>
              <img src={More} />
            </Link>
          </div>
          <div className="track">
            <Link to="#">
              <img src={KissDaniel} />
              <span>Mama</span>
              <span>Kiss Daniel</span>
              <span>Single</span>
              <span>2017</span>
              <img src={FavoritesIcon} />
              <span>3:23 / 4:03</span>
              <img src={More} />
            </Link>
          </div>
          <div className="track">
            <Link to="#">
              <img src={KissDaniel} />
              <span>Mama</span>
              <span>Kiss Daniel</span>
              <span>Single</span>
              <span>2017</span>
              <img src={FavoritesIcon} />
              <span>3:23 / 4:03</span>
              <img src={More} />
            </Link>
          </div>
          <div className="track">
            <Link to="#">
              <img src={KissDaniel} />
              <span>Mama</span>
              <span>Kiss Daniel</span>
              <span>Single</span>
              <span>2017</span>
              <img src={FavoritesIcon} />
              <span>3:23 / 4:03</span>
              <img src={More} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Favorites;
