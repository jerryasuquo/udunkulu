import React from "react";
import LibraryNavArtists from "./LibraryNavArtists";
import ArtistsUploadMenu from "./ArtistsUploadMenu";
import MusicDetails from "../assets/img/music-deets.png";
import ClipArt from "../assets/img/clip-art.png";
import "../assets/css/ArtistsUpload.css";
// import KissDaniel from "../assets/img/kiss-daniel.png";
// import NextBtn from "../assets/img/next-button.png";

let ArtistsUpload = () => {
  return (
    <div>
      <LibraryNavArtists />
      <ArtistsUploadMenu />
      <div id="artists-upload">
        <div className="slider-wrap">
          <span className="slider slider-one"></span>
          <span className="slider slider-two"></span>
          <span className="slider slider-three"></span>
          <span className="slider slider-four"></span>
        </div>

        <div className="slider-title">
          <img src={MusicDetails} />
          <span>Enter Music Details</span>
        </div>

        <form className="artists-upload-form">
          <label>
            <input
              type="text"
              placeholder="Album/Track Name"
              id="album-track-name"
            />
          </label>
          <br />
          <label className="artists-upload-form-label-1">
            Genre/Category <br />
            <select>
              <option>Select</option>
            </select>
          </label>
          <br />
          <label className="artists-upload-form-label-2">
            Year <br />
            <select>
              <option>Select</option>
            </select>
          </label>
        </form>
        <div className="clip-art-box">
          <img src={ClipArt} />
        </div>
        <a className="artists-upload-btn">Continue</a>
      </div>
    </div>
  );
};

export default ArtistsUpload;
