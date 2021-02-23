import React, { useState } from "react";
import LibraryNav from "./LibraryNav";
import ArtistsMenu from "./ArtistsMenu";
import Player from '../components/Player';
import { Link } from "react-router-dom";
import Davido from "../assets/img/davido.png";
import KissDaniel from "../assets/img/kiss-daniel.png";
import FavoritesIcon from "../assets/img/favorites.png";
import More from "../assets/img/more-vert.png";
import NextBtn from "../assets/img/next-button.png";
import FavoriteTrack from "../assets/img/favourite-track.png";
import ArtistsCover from "../assets/img/cover-img.png";
import PersonAdd from "../assets/img/person_add.png";
import "../assets/css/ArtistsExtended.css";

const ArtistsExtended = () => {

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
      <ArtistsMenu />
      <div id="artists-extended">
        <img src={ArtistsCover} className="artists-extended-img"/>
        <section className="artists-extended-top">
          <div className="art-cover">
            <img src={Davido} />
          </div>
          <div className="art-details">
            <p className="art-details-title">Davido</p>
            <p className="art-details-desc">
              David Adeleke (born November 21, 1992), better known by his stage name Davido, is a Nigerian American recording artist, performer, and record producer. In 2011, he co-produced and released "Dami Duro", a song...
            <span className="art-details-link"><a>MORE</a></span>
            </p>
            <div className="art-details-btns">
              <span className="art-details-favorite-box">
                <span>
                    <img src={PersonAdd} />
                </span>
                <a className="art-details-favorite">Follow</a>
              </span>
            </div>
          </div>

        </section>
        <section className="artists-extended-bottom">
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
          <p className="see-more"><a>SEE MORE</a></p>
        </section>

        <section className="card-main-topmost">
        <p>Albums</p>
        <div className="card-box">
          <img src={NextBtn} className="card-next-btn" />
          <div className="card">
            <Link to="/albums-simisola" className="link-extended">
            <img src={KissDaniel} />
            <img src={KissDaniel} />
            <img src={KissDaniel} />
            <img src={KissDaniel} />
            </Link>
          </div>
        </div>
      </section>
      </div>

      { state.playing ? <Player src={state.src} playing={state.playing} x={state.x} /> :  '' }
    </div>
  );
};

export default ArtistsExtended;
