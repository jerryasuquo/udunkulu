import React, { Component } from "react";
import LibraryNav from "./LibraryNav";
import AlbumsMenu from "./AlbumsMenu";
import "../assets/css/Albums.css";
import KissDaniel from "../assets/img/kiss-daniel.png";
import NextBtn from "../assets/img/next-button.png";

let Albums = () => {
  return (
    <div>
      <LibraryNav />
      <AlbumsMenu />
      <div id="albums">
        <section className="card-main-topmost">
          <p>Your Favorites</p>
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
          <p>Recently Added</p>
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
      </div>
    </div>
  );
}

export default Albums;
