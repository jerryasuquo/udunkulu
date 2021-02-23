import React, { useState } from "react";
import LibraryNav from "./LibraryNav";
import FavoritesMenu from "./FavoritesMenu";
import Player from '../components/Player';
import "../assets/css/Favorites.css";
import KissDaniel from "../assets/img/kiss-daniel.png";
import NextBtn from "../assets/img/next-button.png";
import FavoritesIcon from "../assets/img/favorites.png";
import More from "../assets/img/more-vert.png";
import { Link } from "react-router-dom";

let Favorites = () => {
  const [state, setState] = useState({
    src: '',
    playing: false,
    x: 0
  });

  let handleClick = (e) => {
    let src = e.target.getAttribute('data-src');
    setState({...state, src: src, playing: true, x: state.x + 1});
    e.stopPropagation();
  }

  return (
    <div>
      <LibraryNav />
      <FavoritesMenu />
      <div id="favorites">
        <div className="favorites-top">
          <p>Your Favorite Albums</p>
          <div
            className="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
          >
            <div className="gallery-cell">
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
            </div>
            <div className="gallery-cell">
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
            </div>
            <div className="gallery-cell">
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
            </div>
            <div className="gallery-cell">
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
            </div>
            <div className="gallery-cell">
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="card-main-topmost">
        <p>Tracks</p>
        <div className="tracklist card-box">

          <div className="track">
              <span>
                <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
                <span data-src='/audio/Mama/Mama.mp3' onClick={handleClick}>Mama</span>
                <span>Kiss Daniel</span>
                <span>Single</span>
                <span>2017</span>
                <img src={FavoritesIcon} />
                <span>3:23 / 4:03</span>
                <img src={More} />
              </span>
          </div>  

          <div className="track">
              <span>
                <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
                <span data-src='/audio/Mama/Mama.mp3' onClick={handleClick}>Mama</span>
                <span>Kiss Daniel</span>
                <span>Single</span>
                <span>2017</span>
                <img src={FavoritesIcon} />
                <span>3:23 / 4:03</span>
                <img src={More} />
              </span>
          </div>  

          <div className="track">
              <span>
                <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
                <span data-src='/audio/Mama/Mama.mp3' onClick={handleClick}>Mama</span>
                <span>Kiss Daniel</span>
                <span>Single</span>
                <span>2017</span>
                <img src={FavoritesIcon} />
                <span>3:23 / 4:03</span>
                <img src={More} />
              </span>
          </div>    

          <div className="track">
              <span>
                <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
                <span data-src='/audio/Mama/Mama.mp3' onClick={handleClick}>Mama</span>
                <span>Kiss Daniel</span>
                <span>Single</span>
                <span>2017</span>
                <img src={FavoritesIcon} />
                <span>3:23 / 4:03</span>
                <img src={More} />
              </span>
          </div>   

        </div>
      </section>

      { state.playing ? <Player src={state.src} playing={state.playing} x={state.x} /> :  '' }
    </div>
  );
};

export default Favorites;
