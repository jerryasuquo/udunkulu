import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import {replacePlaylist} from '../redux/actions/replacePlaylist';
import LibraryNav from "./LibraryNav";
import AlbumsMenu from "./AlbumsMenu";
import Player from '../components/Player';
import { NavLink } from "react-router-dom";
import Simisola from "../assets/img/simi.png";
import FavoriteTrack from "../assets/img/favourite-track.png";
import LibraryAdd from "../assets/img/library_add.png";
import PlayArrow from "../assets/img/play_arrow.png";
import "../assets/css/AlbumsExtended.css";

const AlbumsExtended = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    src: '',
    title: '',
    artist: '',
    cover: '',
    album: '',
    releaseDate: '',
    deetsList: [
      {title: 'Mama', src:'/audio/Mama/Mama.mp3', artist: 'Kiss Daniel', cover: '/audio/Mama/mama-cover-art.png', album: '', releaseDate: '2016'},
      {title: 'Pami', src:'/audio/Pami/Pami.mp3', artist: 'Wizkid, OmahLay, Adekunle Gold', cover: '/audio/Pami/pami-cover-art.jpg', album: '', releaseDate: '2020'},
      {title: 'Nobody', src:'/audio/Nobody/Nobody.mp3', artist: 'Dremo', cover: '/audio/Nobody/nobody-cover-art.jpg', album: 'Codename Vol. 1', releaseDate: '2019'},
      {title: 'Mama', src:'/audio/Mama/Mama.mp3', artist: 'Kiss Daniel', cover: '/audio/Mama/mama-cover-art.png', album: '', releaseDate: '2016'},
      {title: 'Mama', src:'/audio/Mama/Mama.mp3', artist: 'Kiss Daniel', cover: '/audio/Mama/mama-cover-art.png', album: '', releaseDate: '2016'},
      {title: 'Mama', src:'/audio/Mama/Mama.mp3', artist: 'Kiss Daniel', cover: '/audio/Mama/mama-cover-art.png', album: '', releaseDate: '2016'},
      {title: 'Pami', src:'/audio/Pami/Pami.mp3', artist: 'Wizkid, OmahLay, Adekunle Gold', cover: '/audio/Pami/pami-cover-art.jpg', album: '', releaseDate: '2020'},
      {title: 'Nobody', src:'/audio/Nobody/Nobody.mp3', artist: 'Dremo', cover: '/audio/Nobody/nobody-cover-art.jpg', album: 'Codename Vol. 1', releaseDate: '2019'}
    ],
    playing: false,
    index: 0,
    x: 0
  });

  let componentRef = useRef(false);
  useEffect(() => {
    componentRef.current ? dispatch(replacePlaylist(state)) : componentRef.current = true;  
  }//, state.deetsList
  );
  
  let handleClick = (e) => {
    let deetsList = state.deetsList;
    let dataIndex = e.target.getAttribute('data-index');
    dataIndex = Number(dataIndex);
    let src = deetsList[dataIndex].src;
    let title = deetsList[dataIndex].title;
    let artist = deetsList[dataIndex].artist;
    let cover = deetsList[dataIndex].cover;
    let album = deetsList[dataIndex].album;
    let releaseDate = deetsList[dataIndex].releaseDate;
    setState({
      ...state, src: src, cover: cover, title: title,
      artist: artist, playing: true, x: state.x + 1,
      index: dataIndex, album: album, releaseDate: releaseDate
    })
    e.stopPropagation();
    document.getElementById('albums-extended').setAttribute('class', 'browse-list-shorter');
  }

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
          <img src={FavoriteTrack} data-src='/audio/Mama/Mama.mp3' data-index={0} onClick={handleClick} />
          <img src={FavoriteTrack} data-src='/audio/Mama/Mama.mp3' data-index={1} onClick={handleClick} />
          <img src={FavoriteTrack} data-src='/audio/Mama/Mama.mp3' data-index={2} onClick={handleClick} />
          <img src={FavoriteTrack} data-src='/audio/Mama/Mama.mp3' data-index={3} onClick={handleClick} />
          <img src={FavoriteTrack} data-src='/audio/Mama/Mama.mp3' data-index={4} onClick={handleClick} />
          <img src={FavoriteTrack} data-src='/audio/Mama/Mama.mp3' data-index={5} onClick={handleClick} />
          <img src={FavoriteTrack} data-src='/audio/Mama/Mama.mp3' data-index={6} onClick={handleClick} />
        </section>
      </div>
    </div>
  );
};

export default AlbumsExtended;
