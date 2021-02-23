import React from "react";
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

class Player extends React.Component {

  state = {
  playing: this.props.playing,
  title: this.props.title,
  artist: this.props.artist,
  loop: false,
  shuffle: false
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.x != this.props.x) {
      let audio = document.getElementById('player');
      audio.play();
      this.setState({...this.state, playing: true});
    }
  }

  handleTogglePlay = (e) => {
    let audio = document.getElementById('player');
    if(audio.paused && audio.currentTime > 0 && !audio.ended) {
      audio.play();
      this.setState({...this.state, playing: true});
   } else {
      audio.pause();
      this.setState({...this.state, playing: false});
   }
  }

  handleToggleNext = (e) => {
    document.getElementById('player').pause();
    let src = e.target.getAttribute('id') == 'back' ? this.props.prevSrc : this.props.nextSrc;
    document.getElementById('player').setAttribute('src', src);
    document.getElementById('player').play();

    let title = e.target.getAttribute('id') == 'back' ? this.props.prevTitle : this.props.nextTitle;
    let artist = e.target.getAttribute('id') == 'back' ? this.props.prevArtist : this.props.nextArtist;
    this.setState({...this.state, playing: true, title: title, artist: artist});
  }

  handleClickLoop = (e) => {
    document.getElementById('player').setAttribute('loop', true);
    !this.state.loop ? this.setState({...this.state, loop: true}) : this.setState({...this.state, loop: false});;
  }

  handleClickShuffle = (e) => {
    !this.state.shuffle ? this.setState({...this.state, shuffle: true}) : this.setState({...this.state, shuffle: false});
  }

  render() {
    return (
      <footer>
        <section>
          <audio src={this.props.src} id='player' autoPlay>
          </audio>
  
          <div id='control-panel'>
            <div>
              <img src={back} id='back' alt='Click to play previous' onClick={this.handleToggleNext} />
              {!this.state.playing ? <img src={play} alt='Click to play' onClick={this.handleTogglePlay}/> : <img src={pause} alt='Click to pause' onClick={this.handleTogglePlay}/>}
              <img id='forward' src={forward} alt='Click to play next' onClick={this.handleToggleNext} />
            </div>
            
            <div>
              <span></span>
              <div id='albumInfo'><img src={albumArt} alt='Album art' id='albumArt' /><div><h1>{this.state.title}</h1><p>{this.state.artist}</p></div></div>
              <ul><li>ABT</li><li>2017</li></ul>
            </div>
  
            <div>
              <img src={favorites} />
              <img src={volume} />
              {!this.state.loop ? <img src={loop} onClick={this.handleClickLoop} alt='Turn on loop' /> : <img src={loopOrng} onClick={this.handleClickLoop} alt='Turn off loop' />}
              {!this.state.shuffle? <img src={shuffle} onClick={this.handleClickShuffle} alt='Turn on shuffle' /> : <img src={shuffleOrng} onClick={this.handleClickShuffle} alt='Turn on shuffle' />}
            </div>
          </div>
        </section>  
      </footer>);
  }
}

export default Player;