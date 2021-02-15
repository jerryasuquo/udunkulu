import React, { useState } from "react";
import LibraryNav from '../components/LibraryNav';
import PlaylistMenu from '../components/PlaylistMenu';
import Player from '../components/Player';
import playIcon from '../assets/img/play-icon.png';
import line from '../assets/img/line.png';
import '../assets/css/Playlist.css';

let Playlist = () => {
  const [state, setState] = useState({
    playing: false,
    src: ''
  });

  let handleClick = (e) => {
    setState({...state, src: e.target.title, playing: true});
    console.log(e.target.title);
    e.stopPropagation();
  }

  return (
    <div>
      <LibraryNav />
      <PlaylistMenu />
      <div id='playlist'>
        <section className='list'>
        <h1>Now Playing</h1>
        <div>
          <li ><div className='flexBox'><p title='../assets/audio/FEM.mp3' onClick={handleClick}><span>01</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li ><div className='flexBox'><p title='../assets/audio/Jowo.mp3' onClick={handleClick}><span>02</span>Jowo</p><p>3:25</p></div><img src={line} alt=''/></li>
          <li ><div className='flexBox'><p title='../assets/audio/FEM.mp3' onClick={handleClick}><span>03</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li ><div className='flexBox'><p title='../assets/audio/Jowo.mp3' onClick={handleClick}><span>04</span>Jowo</p><p>3:25</p></div><img src={line} alt=''/></li>
          <li  ><div className='flexBox'><p title='../assets/audio/FEM.mp3' onClick={handleClick}><span>05</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li value='../assets/audio/FEM.mp3' onClick={handleClick}><div className='flexBox'><p><span>06</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li value='../assets/audio/FEM.mp3' onClick={handleClick}><div className='flexBox'><p><span>07</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li value='../assets/audio/FEM.mp3' onClick={handleClick}><div className='flexBox'><p><span>08</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li value='../assets/audio/FEM.mp3' onClick={handleClick} ><div className='flexBox'><p><span>09</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li value='../assets/audio/FEM.mp3' onClick={handleClick}><div className='flexBox'><p><span>10</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li value='../assets/audio/FEM.mp3' onClick={handleClick}><div className='flexBox'><p><span>11</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li value='../assets/audio/FEM.mp3' onClick={handleClick}><div className='flexBox'><p><span>12</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li value='../assets/audio/FEM.mp3' onClick={handleClick}><div className='flexBox'><p><span>13</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li value='../assets/audio/FEM.mp3' onClick={handleClick}><div className='flexBox'><p><span>14</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
        </div>
        </section>

        <section className='album-art'>
          <div>
            <h1>FEM</h1>
            <p>Davido</p>
            <p><strong>Album:</strong>  A Better Time</p>
            <p><strong>Released:</strong>  30 October, 2020</p>
            <div className='follow-button'><button>Follow</button><span><img src={playIcon} />5.6K</span></div>
          </div>
        </section>
      </div>

      { state.playing ? <Player src={state.src} playing={state.playing} /> :  '' }
    </div>
  );
}

export default Playlist;