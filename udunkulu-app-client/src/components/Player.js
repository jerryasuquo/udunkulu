import React, { useState } from "react";
import src from '../assets/audio/FEM.mp3';
import back from '../assets/img/back.png';
import play from '../assets/img/play.png';
import pause from '../assets/img/pause.png';
import forward from '../assets/img/forward.png';
import shuffle from '../assets/img/shuffle.png';
import shuffleOrng from '../assets/img/shuffle-orange.png';
import albumArt from '../assets/img/album-art.png';
import favorites from '../assets/img/favorites.png';
import loop from '../assets/img/loop.png';
import loopOrng from '../assets/img/loop-orange.png';
import volume from '../assets/img/volume.png';
import '../assets/css/Player.css';

let Player = (props) => {

  const [state, setState] = useState({
    playing: props.playing,
    loop: false,
    shuffle:false
  });
  
  let handleClickPlay = (e) => {
    document.getElementById('player').play();
    setState({...state, playing: true});
  }

  let handleClickPause = (e) => {
    document.getElementById('player').pause();
    setState({...state, playing: false});
  }

  let handleClickLoop = (e) => {
    document.getElementById('player').setAttribute('loop', true);
    !state.loop ? setState({...state, loop: true}) : setState({...state, loop: false});;
  }

  let handleClickShuffle = (e) => {
    !state.shuffle ? setState({...state, shuffle: true}) : setState({...state, shuffle: false});
  }

  return (
    <footer>
      <section>
        <audio id='player' autoPlay>
          <source src={src} />
        </audio>

        <div id='control-panel'>
          <div>
            <img src={back} alt='Click to play previous' />
            {!state.playing ? <img src={play} alt='Click to play' onClick={handleClickPlay}/> : <img src={pause} alt='Click to pause' onClick={handleClickPause}/>}
            <img src={forward} alt='Click to play next' />
          </div>
          
          <div>
            <span></span>
            <div id='albumInfo'><img src={albumArt} alt='Album art' id='albumArt' /><div><h1>FEM</h1><p>Davido</p></div></div>
            <ul><li>ABT</li><li>2017</li></ul>
          </div>

          <div>
            <img src={favorites} />
            <img src={volume} />
            {!state.loop ? <img src={loop} onClick={handleClickLoop} alt='Turn on loop' /> : <img src={loopOrng} onClick={handleClickLoop} alt='Turn off loop' />}
            {!state.shuffle? <img src={shuffle} onClick={handleClickShuffle} alt='Turn on shuffle' /> : <img src={shuffleOrng} onClick={handleClickShuffle} alt='Turn on shuffle' />}
          </div>
        </div>
      </section>  
    </footer>);
}

export default Player;