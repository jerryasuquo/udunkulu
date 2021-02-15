import React from "react";
import LibraryNav from "./LibraryNav";
import AlbumsMenu from "./AlbumsMenu";
import "../assets/css/Albums.css";
import KissDaniel from "../assets/img/kiss-daniel.png";
import NextBtn from "../assets/img/next-button.png";
import { Link } from "react-router-dom";

let Albums = () => {
  return (
    <div>
      <LibraryNav />
      <AlbumsMenu />
      
      <div id="browse">
        <div className="browse-top">
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
        <div className="browse-top">
          <p>Recently Added</p>
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
    </div>
  );
};

export default Albums;
