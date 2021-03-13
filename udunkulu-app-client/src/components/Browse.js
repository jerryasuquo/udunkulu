import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from 'react-redux';
import {replacePlaylist} from '../redux/actions/replacePlaylist';
import LibraryNav from "./LibraryNav";
import Dashboard from "./Dashboard";
import "../assets/css/Browse.css";
import Mama from "../assets/img/mama-cover-art.jpg";
import Pami from '../assets/img/pami-cover-art.jpg';
import Nobody from '../assets/img/nobody-cover-art.jpg';
import JumpingShip from '../assets/img/jumpingShip-cover-art.jpg';
import ABT from '../assets/img/album-art-smaller.jpg';
import playCircle from '../assets/img/play-circle.png';


let Browse = () => {
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
      {title: 'Jumping Ship', src:'/audio/JumpingShip/JumpingShip.mp3', artist: 'Amaarae, Kojey Radical, Cruel Santino', cover: '/audio/JumpingShip/jumpingShip-cover-art.jpg', album: 'The Angel You Don\'t Know', releaseDate: '2020'},
      {title: 'The Best', src:'/audio/ABetterTime/TheBest.mp3', artist: 'Davido', cover:'/audio/ABetterTime/fem-album-art.png', album: 'ABT', releaseDate: '2020'},
    ],
    playing: false,
    index: 0,
    x: 0
  })

  let componentRef = useRef(false);
  useEffect(() => {
    componentRef.current ? dispatch(replacePlaylist(state)) : componentRef.current = true;  
  }//, state.deetsList
  );

  let handleClick = (e) => {
    let dataIndex = e.target.getAttribute('data-index');
    dataIndex = Number(dataIndex);
    let deetsList = state.deetsList;
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

    document.getElementById('browse').setAttribute('class', 'browse-list-shorter');
  }

  let handleListClick = (e) => {
    /*if(e.target.getAttribute("data-list-name") === "freshPicks" || "hot100" || "trending" || "topArtists" || "new") {
      setState({...state, deetsList: state.deetsListOne});
    }*/
  }

  return (
    <div>
      <LibraryNav />
      <Dashboard />
      <div id="browse" className='browse'>
        <div className="browse-top" >
          <p>Fresh Picks For You</p>
          <div
            className="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
            data-list-name={"freshPicks"} onClick={handleListClick}
          >
            <div className="gallery-cell">
              <img src={Mama} data-index={0} onClick={handleClick} />
              <div className="track-info"><div><p>Mama</p><h1>Kiss Daniel</h1></div><img src={playCircle} /></div>
            </div>
            <div className="gallery-cell">
              <div>
                <img src={Pami} data-index={1} onClick={handleClick} />
                <div className="track-info"><div><p>Pami</p><h1>Wizkid</h1></div><img src={playCircle} /></div>
              </div>
            </div>
            <div className="gallery-cell">
              <img src={Nobody} data-index={2} onClick={handleClick} />
              <div className="track-info"><div><p>Nobody</p><h1>Dremo</h1></div><img src={playCircle} /></div>
            </div>
            <div className="gallery-cell">
              <img src={JumpingShip} data-index={3} onClick={handleClick} />
              <div className="track-info"><div><p>Jumping Ship</p><h1>Amaarae</h1></div><img src={playCircle} /></div>
            </div>
            <div className="gallery-cell">
              <img src={ABT} data-index={4} onClick={handleClick} />
              <div className="track-info"><div><p>The Best</p><h1>Davido</h1></div><img src={playCircle} /></div>
            </div>
          </div>
        </div>

        <div className="browse-bottom">
          <p>Trending</p>
          <div
            className="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
            data-list-name={"trending"} onClick={handleListClick}
          >
            <div className="gallery-cell">
              <img src={Mama} data-index={0} onClick={handleClick} />
              <div className="track-info"><div><p>Mama</p><h1>Kiss Daniel</h1></div><img src={playCircle} /></div>
            </div>
            <div className="gallery-cell">
              <div>
                <img src={Pami} data-index={1} onClick={handleClick} />
                <div className="track-info"><div><p>Pami</p><h1>Wizkid</h1></div><img src={playCircle} /></div>
              </div>
            </div>
            <div className="gallery-cell">
              <img src={Nobody} data-index={2} onClick={handleClick} />
              <div className="track-info"><div><p>Nobody</p><h1>Dremo</h1></div><img src={playCircle} /></div>
            </div>
            <div className="gallery-cell">
              <img src={JumpingShip} data-index={3} onClick={handleClick} />
              <div className="track-info"><div><p>Jumping Ship</p><h1>Amaarae</h1></div><img src={playCircle} /></div>
            </div>
            <div className="gallery-cell">
              <img src={ABT} data-index={4} onClick={handleClick} />
              <div className="track-info"><div><p>The Best</p><h1>Davido</h1></div><img src={playCircle} /></div>
            </div>
          </div>
        </div>

        <div className="browse-bottom">
          <p>New Releases</p>
          <div
            className="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
            data-list-name={"new"} onClick={handleListClick}
          >
            <div className="gallery-cell">
              <img src={Mama} data-index={0} onClick={handleClick} />
              <div className="track-info"><div><p>Mama</p><h1>Kiss Daniel</h1></div><img src={playCircle} /></div>
            </div>
            <div className="gallery-cell">
              <div>
                <img src={Pami} data-index={1} onClick={handleClick} />
                <div className="track-info"><div><p>Pami</p><h1>Wizkid</h1></div><img src={playCircle} /></div>
              </div>
            </div>
            <div className="gallery-cell">
              <img src={Nobody} data-index={2} onClick={handleClick} />
              <div className="track-info"><div><p>Nobody</p><h1>Dremo</h1></div><img src={playCircle} /></div>
            </div>
            <div className="gallery-cell">
              <img src={JumpingShip} data-index={3} onClick={handleClick} />
              <div className="track-info"><div><p>Jumping Ship</p><h1>Amaarae</h1></div><img src={playCircle} /></div>
            </div>
            <div className="gallery-cell">
              <img src={ABT} data-index={4} onClick={handleClick} />
              <div className="track-info"><div><p>The Best</p><h1>Davido</h1></div><img src={playCircle} /></div>
            </div>
          </div>
        </div>


        <div className="browse-bottom">
          <p>Top 100 Hot</p>
          <div
            className="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
            data-list-name={"hot100"} onClick={handleListClick}
          >
            <div className="gallery-cell">
              <img src={Mama} data-index={0} onClick={handleClick} />
              <div className="track-info"><div><p>Mama</p><h1>Kiss Daniel</h1></div><img src={playCircle} /></div>
            </div>
            <div className="gallery-cell">
              <div>
                <img src={Pami} data-index={1} onClick={handleClick} />
                <div className="track-info"><div><p>Pami</p><h1>Wizkid</h1></div><img src={playCircle} /></div>
              </div>
            </div>
            <div className="gallery-cell">
              <img src={Nobody} data-index={2} onClick={handleClick} />
              <div className="track-info"><div><p>Nobody</p><h1>Dremo</h1></div><img src={playCircle} /></div>
            </div>
            <div className="gallery-cell">
              <img src={JumpingShip} data-index={3} onClick={handleClick} />
              <div className="track-info"><div><p>Jumping Ship</p><h1>Amaarae</h1></div><img src={playCircle} /></div>
            </div>
            <div className="gallery-cell">
              <img src={ABT} data-index={4} onClick={handleClick} />
              <div className="track-info"><div><p>The Best</p><h1>Davido</h1></div><img src={playCircle} /></div>
            </div>
          </div>
        </div>

        <div className="browse-bottom" >
          <p>Top Artists</p>
          <div
            className="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
            data-list-name={"topArtists"} onClick={handleListClick}
          >
            <div className="gallery-cell">
              <img src={Mama} data-index={0} onClick={handleClick} />
              <div className="track-info"><div><p>Mama</p><h1>Kiss Daniel</h1></div><img src={playCircle} /></div>
            </div>
            <div className="gallery-cell">
              <div>
                <img src={Pami} data-index={1} onClick={handleClick} />
                <div className="track-info"><div><p>Pami</p><h1>Wizkid</h1></div><img src={playCircle} /></div>
              </div>
            </div>
            <div className="gallery-cell">
              <img src={Nobody} data-index={2} onClick={handleClick} />
              <div className="track-info"><div><p>Nobody</p><h1>Dremo</h1></div><img src={playCircle} /></div>
            </div>
            <div className="gallery-cell">
              <img src={JumpingShip} data-index={3} onClick={handleClick} />
              <div className="track-info"><div><p>Jumping Ship</p><h1>Amaarae</h1></div><img src={playCircle} /></div>
            </div>
            <div className="gallery-cell">
              <img src={ABT} data-index={4} onClick={handleClick} />
              <div className="track-info"><div><p>The Best</p><h1>Davido</h1></div><img src={playCircle} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
