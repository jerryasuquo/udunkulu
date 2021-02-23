import React, { useState } from "react";
import LibraryNav from '../components/LibraryNav';
import PlaylistMenu from '../components/PlaylistMenu';
import Player from '../components/Player';
import playIcon from '../assets/img/play-icon.png';
import line from '../assets/img/line.png';
import '../assets/css/Playlist.css';

let Playlist = () => {

  const [state, setState] = useState({
    src: '',
    prevSrc: '',
    nextSrc: '',
    title: '',
    prevTitle: '',
    nextTitle: '',
    artist: '',
    prevArtist: '',
    nextArtist: '',
    playing: false,
    x: 0
  });

  let handleClick = (e) => {

    let src = e.target.getAttribute('data-src');
    let title = e.target.getAttribute('data-title');
    let artist = e.target.getAttribute('data-artist');


    setState({
      ...state, 
      src: src, prevSrc: prevSrc, nextSrc: nextSrc,  
      title: title, prevTitle: prevTitle, nextTitle: nextTitle,
      artist: artist, prevArtist: prevArtist, nextArtist: nextArtist,
      playing: true, x: state.x + 1
    });

    e.stopPropagation();
  }

 return (
    <div>
      <LibraryNav />
      <PlaylistMenu />
      <div id='playlist'>
        
        <section className='list-container'>
        <section className='list'>
        <h1>Now Playing</h1>
        <div>
          <li><div className='flexBox'><p data-src='/audio/ABetterTime/FEM.mp3' data-title='FEM' data-artist='Davido' onClick={handleClick}><span>01</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox'><p data-src='/audio/ABetterTime/Jowo.mp3' data-title='Jowo' data-artist='Davido' onClick={handleClick}><span>02</span>Jowo</p><p>3:25</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox'><p data-src='/audio/ABetterTime/FEM.mp3' data-title='FEM' data-artist='Davido' onClick={handleClick}><span>03</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox'><p data-src='/audio/ABetterTime/Jowo.mp3' data-title='Jowo' data-artist='Davido' onClick={handleClick}><span>04</span>Jowo</p><p>3:25</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox'><p data-src='/audio/ABetterTime/FEM.mp3' data-title='FEM' data-artist='Davido' onClick={handleClick}><span>05</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox'><p data-src='/audio/ABetterTime/FEM.mp3' data-title='FEM' data-artist='Davido' onClick={handleClick}><span>06</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox'><p data-src='/audio/ABetterTime/FEM.mp3' data-title='FEM' data-artist='Davido' onClick={handleClick}><span>07</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox'><p data-src='/audio/ABetterTime/FEM.mp3' data-title='FEM' data-artist='Davido' onClick={handleClick}><span>08</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox'><p data-src='/audio/ABetterTime/FEM.mp3' data-title='FEM' data-artist='Davido' onClick={handleClick}><span>09</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox'><p data-src='/audio/ABetterTime/FEM.mp3' data-title='FEM' data-artist='Davido' onClick={handleClick}><span>10</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox'><p data-src='/audio/ABetterTime/FEM.mp3' data-title='FEM' data-artist='Davido' onClick={handleClick}><span>11</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox'><p data-src='/audio/ABetterTime/FEM.mp3' data-title='FEM' data-artist='Davido' onClick={handleClick}><span>12</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox'><p data-src='/audio/ABetterTime/FEM.mp3' data-title='FEM' data-artist='Davido' onClick={handleClick}><span>13</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox'><p data-src='/audio/ABetterTime/FEM.mp3' data-title='FEM' data-artist='Davido' onClick={handleClick}><span>14</span>FEM</p><p>3:22</p></div><img src={line} alt=''/></li>
        </div>
        </section>
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

      { state.playing ? 
      <Player src={state.src} prevSrc={state.prevSrc} nextSrc={state.nextSrc} 
      title={state.title} prevTitle={state.prevTitle} nextTitle={state.nextTitle}
      artist={state.artist} prevArtist={state.prevArtist} nextArtist={state.nextArtist}
      playing={state.playing} x={state.x} /> 
       :  
       '' }
    </div>
  );
}

export default Playlist;