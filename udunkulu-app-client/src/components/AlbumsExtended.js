import React from "react";
import LibraryNav from "./LibraryNav";
import AlbumsMenu from "./AlbumsMenu";
import { NavLink } from "react-router-dom";
import Simisola from "../assets/img/simi.png";
import FavoriteTrack from "../assets/img/favourite-track.png";
import LibraryAdd from "../assets/img/library_add.png";
import PlayArrow from "../assets/img/play_arrow.png";
import "../assets/css/AlbumsExtended.css";

const AlbumsExtended = () => {
  return (
    <div>
      <LibraryNav />
      <AlbumsMenu />
      <div id="albums-extended">
        <section className="albums-extended-top">
          <div className="art-cover">
            <img src={Simisola} />
          </div>
          <div className="art-details">
            <p className="art-details-title">Simisola</p>
            <p className="art-details-info">
              Album • Simi • 2017 <br /> 7 songs • 53 minutes
            </p>
            <p className="art-details-desc">
              Simisola is the eponymous second studio album by Nigerian singer
              Simi. It was released on September 8, 2017, by X3M Music. The
              album is the follow-up to her debut album, Ogaju. Simisola
              received...
            </p>
            <p className="art-details-link"><a>MORE</a></p>
            <div className="art-details-btns">
              <NavLink to='/playlist'>
                <span className="art-details-play-box">
                  <span><img src={PlayArrow} /></span>
                  <span className="art-details-play">Play</span>
                </span>
              </NavLink>
              
              
              <span className="art-details-favorite-box">
                <span>
                    <img src={LibraryAdd} />
                </span>
                <a className="art-details-favorite">Add to Favorites</a>
              </span>
            </div>
          </div>
        </section>
        <section className="albums-extended-bottom">
          <p>Tracks</p>
          <img src={FavoriteTrack} />
          <img src={FavoriteTrack} />
          <img src={FavoriteTrack} />
          <img src={FavoriteTrack} />
          <img src={FavoriteTrack} />
          <img src={FavoriteTrack} />
          <img src={FavoriteTrack} />
        </section>
      </div>
    </div>
  );
};

export default AlbumsExtended;
