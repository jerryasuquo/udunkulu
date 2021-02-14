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
      {/* <div id="albums">
        <section className="card-main-topmost">
          <p>Your Favorite Albums</p>
          <div className="card-box">
            <img src={NextBtn} className="card-next-btn" />
            <div className="card">
              <Link to="/albums-simisola" className="link-extended">
                
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
                
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
                
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
                
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
              </Link>
            </div>
          </div>
        </section>
        <section className="card-main-bottom">
          <p>Recently Added</p>
          <div className="card-box">
            <img src={NextBtn} className="card-next-btn" />
          </div>
          <div className="card">
            <Link to="/albums-simisola" className="link-extended">
              
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
              
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
              
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
              
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
            </Link>
          </div>
        </section>
      </div> */}
      <div id="browse">
        <div className="browse-top">
          <p>Your Favorite Albums</p>
          <div
            class="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
          >
            <div class="gallery-cell">
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
            </div>
            <div class="gallery-cell">
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
            </div>
            <div class="gallery-cell">
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
            </div>
            <div class="gallery-cell">
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
            </div>
            <div class="gallery-cell">
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
            </div>
          </div>
        </div>
        <div className="browse-top">
          <p>Recently Added</p>
          <div
            class="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
          >
            <div class="gallery-cell">
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
            </div>
            <div class="gallery-cell">
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
            </div>
            <div class="gallery-cell">
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
            </div>
            <div class="gallery-cell">
              <Link to="/albums-simisola" className="link-extended">
                <img src={KissDaniel} />
              </Link>
            </div>
            <div class="gallery-cell">
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
