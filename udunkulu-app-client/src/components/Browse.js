import React, {useState} from "react";
import LibraryNav from "./LibraryNav";
import Dashboard from "./Dashboard";
import Player from '../components/Player';
import "../assets/css/Browse.css";
import KissDaniel from "../assets/img/kiss-daniel.png";


let Browse = () => {
  const [state, setState] = useState({
    playing: false,
    src: '',
    x: 0
  })

  let handleClick = (e) => {
    let src = e.target.getAttribute('data-src');
    setState({...state, src: src, playing: true, x: state.x + 1});
    e.stopPropagation();
  }

  return (
    <div>
      <LibraryNav />
      <Dashboard />
      <div id="browse">
        <div className="browse-top">
          <p>Fresh Picks For You</p>
          <div
            className="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
          >
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
          </div>
        </div>
        <div className="browse-bottom">
          <p>Trending</p>
          <div
            className="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
          >
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
          </div>
        </div>
        <div className="browse-bottom">
          <p>New Releases</p>
          <div
            className="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
          >
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel}  data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
          </div>
        </div>
        <div className="browse-bottom">
          <p>Top 100 Hot</p>
          <div
            className="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
          >
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
          </div>
        </div>
        <div className="browse-bottom">
          <p>Top Artists</p>
          <div
            className="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
          >
            <div className="gallery-cell">
              <img src={KissDaniel}  data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} data-src='/audio/Mama/Mama.mp3' onClick={handleClick} />
            </div>
          </div>
        </div>
      </div>

      { state.playing ? <Player src={state.src} playing={state.playing} x={state.x} /> :  '' }
    </div>
  );
};

export default Browse;
