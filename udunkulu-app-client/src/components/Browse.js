import React from "react";
import LibraryNav from "./LibraryNav";
import Dashboard from "./Dashboard";
import "../assets/css/Browse.css";
import KissDaniel from "../assets/img/kiss-daniel.png";
import NextBtn from "../assets/img/next-button.png";

let Browse = () => {
  return (
    <div>
      <LibraryNav />
      <Dashboard />
      {/* <div id="browse">
        <section className="card-main-topmost">
          <p>Fresh Picks For You</p>
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
        <section className="card-main-bottom">
          <p>Trending</p>
          <div className="card-box">
            <img src={NextBtn} className="card-next-btn" />
          </div>
          <div className="card">
            <img src={KissDaniel} />
            <img src={KissDaniel} />
            <img src={KissDaniel} />
            <img src={KissDaniel} />
          </div>
        </section>
        <section className="card-main-bottom">
          <p>New Releases</p>
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
        <section className="card-main-bottom">
          <p>Top 100 Hot</p>
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
        <section className="card-main-bottom">
          <p>Top Artists</p>
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
      </div> */}
      <div id="browse">
        <div className="browse-top">
          <p>Fresh Picks For You</p>
          <div
            class="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
          >
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
          </div>
        </div>
        <div className="browse-bottom">
          <p>Trending</p>
          <div
            class="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
          >
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
          </div>
        </div>
        <div className="browse-bottom">
          <p>New Releases</p>
          <div
            class="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
          >
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
          </div>
        </div>
        <div className="browse-bottom">
          <p>Top 100 Hot</p>
          <div
            class="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
          >
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
          </div>
        </div>
        <div className="browse-bottom">
          <p>Top Artists</p>
          <div
            class="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
          >
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div class="gallery-cell">
              <img src={KissDaniel} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
