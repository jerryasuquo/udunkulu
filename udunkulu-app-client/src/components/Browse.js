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
      <div id="browse">
        <div className="browse-top">
          <p>Fresh Picks For You</p>
          <div
            className="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
          >
            <div className="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} />
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
              <img src={KissDaniel} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} />
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
              <img src={KissDaniel} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} />
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
              <img src={KissDaniel} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} />
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
              <img src={KissDaniel} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} />
            </div>
            <div className="gallery-cell">
              <img src={KissDaniel} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
