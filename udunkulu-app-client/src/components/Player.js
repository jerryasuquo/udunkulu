import React from "react";
import back from '../assets/img/back.png';
import play from '../assets/img/play.png';
import mute from '../assets/img/mute.png';
import pause from '../assets/img/pause.png';
import forward from '../assets/img/forward.png';
import shuffle from '../assets/img/shuffle.png';
import shuffleOrng from '../assets/img/shuffle-orange.png';
import favorites from '../assets/img/favorites.png';
import favoritesOrng from '../assets/img/favorites-orange.png';
import loop from '../assets/img/loop.png';
import loopOrng from '../assets/img/loop-orange.png';
import volume from '../assets/img/volume.png';
import '../assets/css/Player.css';


class Player extends React.Component {

  state = {
  src: this.props.src,
  deetsList: this.props.deetsList,
  index: this.props.index,
  playing: this.props.playing,
  title: this.props.title,
  artist: this.props.artist,
  cover: this.props.cover,
  album: this.props.album,
  releaseDate: this.props.releaseDate,
  muted: false,
  volume: 0.5,
  duration: 0,
  currentTime: 0,
  loop: 0,
  shuffle: false
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.x != this.props.x) {
      let audio = document.getElementById('player');
      audio.play();
      this.setState({
        ...this.state, playing: true, index: this.props.index, src: this.props.src,
        artist: this.props.artist, title: this.props.title, deetsList: this.props.deetsList,
        cover: this.props.cover, album: this.props.album, releaseDate: this.props.releaseDate,
      });
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
    let audio = document.getElementById('player');

    //Sets index of current song navigated to in state
    if(e.target.getAttribute('id') == 'back') {
      this.props.deetsList[this.state.index - 1] ? this.state.index-- : this.state.index = this.props.deetsList.length - 1; 
    } else {
        this.props.deetsList[this.state.index + 1] ? this.state.index++ : this.state.index = 0; 
      }     
    
    //Sets new src to play current song
    let src = this.props.deetsList[this.state.index].src;
    audio.pause();
    audio.setAttribute('src', src);
    audio.play();

    //Sets current songs deets
    let title = this.props.deetsList[this.state.index].title;
    let artist = this.props.deetsList[this.state.index].artist;
    let cover = this.props.deetsList[this.state.index].cover;
    let releaseDate = this.props.deetsList[this.state.index].releaseDate;
    let album = this.props.deetsList[this.state.index].album;
    this.setState({...this.state, playing: true, title: title, artist: artist, cover: cover, releaseDate: releaseDate, album: album});
  }


  handleEnded = () => {
    let audio = document.getElementById('player');

    //Sets index to random song's index if in shuffle and not in loop
    if(this.state.shuffle && this.state.loop !== 2) {
      this.state.index = Math.floor(Math.random() * (this.props.deetsList.length - 1));
    }

    if (this.state.loop == 2) {
      audio.setAttribute('loop', true);
      
    }

    //Sets index to next song if not in song loop
    if (this.state.loop == 1) {
      audio.setAttribute('loop', false);
      this.props.deetsList[this.state.index + 1] ? this.state.index++ : this.state.index = 0;
    }

    //Sets song to next song if not in playlist loop and stops playlist at last song
    if (this.state.loop == 0) {
      audio.setAttribute('loop', false);
      if (this.props.deetsList[this.state.index + 1]) {
        this.state.index++;
      } else {
        audio.pause();
        this.setState({...this.state, playing: false})
      }
    }

    if (this.props.deetsList[this.state.index + 1]) {
      let src = this.props.deetsList[this.state.index].src;
      audio.setAttribute('src', src);
      let title = this.props.deetsList[this.state.index].title;
      let artist = this.props.deetsList[this.state.index].artist;
      let cover = this.props.deetsList[this.state.index].cover;
      let releaseDate = this.props.deetsList[this.state.index].releaseDate;
      let album = this.props.deetsList[this.state.index].album;
      this.setState({...this.state, playing: true, title: title, artist: artist, cover: cover, releaseDate: releaseDate, album: album});
    } 
  }


  handleClickLoop = (e) => {
    if (this.state.loop == 0) {
      this.setState({...this.state, loop: 1});
    } 

    if(this.state.loop == 1) {
      this.setState({...this.state, loop: 2, shuffle: false});
      document.getElementById('player').setAttribute('loop', true);
    }

    if(this.state.loop == 2) {
      this.setState({...this.state, loop: 0});
      document.getElementById('player').setAttribute('loop', false);
    }
  }


  handleClickShuffle = (e) => {
    !this.state.shuffle ? 
    this.state.loop == 2 ? this.setState({...this.state, shuffle: true, loop: 0}) : this.setState({...this.state, shuffle: true, loop: this.state.loop})
    : this.setState({...this.state, shuffle: false});
  }


  handleClickFavorite = (e) => {
    !this.state.favorites ? this.setState({...this.state, favorites: true}) : this.setState({...this.state, favorites: false});
  }

  handleTimelineChange = (e) => {
    document.getElementById('player').currentTime = e.target.value;
    
  }

  handleTimeUpdate = (e) => {
    let duration = Math.ceil(e.target.duration);
    let currentTime = e.target.currentTime;
    this.setState({...this.state, currentTime: currentTime, duration: duration, durationUnCeil: e.target.duration});

    if(currentTime > 0 && duration == Math.ceil(currentTime)) {
      this.handleEnded();
    }
  }

  handleVolumeChange = (e) => {
    let volume = Number(e.target.value);
    volume === 0 ? this.setState({...this.state, volume: volume, muted: true}) : this.setState({...this.state, volume: volume, muted: false});
    document.getElementById('player').volume = this.state.volume;  
  }

  handleToggleMute = (e) => {
    !this.state.muted ? this.setState({...this.state, muted: true}) : this.setState({...this.state, muted: false});
  }

  render() {
    return (
      <footer>
        <section>
          <audio src={this.state.src} id='player' autoPlay muted={this.state.muted} preload='auto'onPlay={this.handlePlay} onTimeUpdate={this.handleTimeUpdate}>
          </audio>
  
          <div id='control-panel'>
            <input type='range' id='timeline' min='0' max={`${this.state.duration}`} value={this.state.currentTime} onChange={this.handleTimelineChange} />
            <div>
              <img src={back} id='back' alt='Click to play previous' onClick={this.handleToggleNext} />
              {!this.state.playing ? 
                <img src={play} alt='Click to play' onClick={this.handleTogglePlay} /> 
              : <img src={pause} alt='Click to pause' onClick={this.handleTogglePlay} />
              }
              <img id='forward' src={forward} alt='Click to play next' onClick={this.handleToggleNext} />
            </div>
            
            <section id='albumInfo-container'>
              <div id='albumInfo'><img src={this.state.cover} alt='Album art' id='albumArt' /><div><h1>{this.state.title}</h1><p>{this.state.artist}</p></div></div>
              <ul><li>{this.state.album}</li><li>{this.state.releaseDate}</li></ul>
            </section>
  
            <div>

              {!this.state.favorites ?
                <img src={favorites} onClick={this.handleClickFavorite} alt='Add to favorites' /> 
              : <img src={favoritesOrng} onClick={this.handleClickFavorite} alt='Remove from favorites' />
              }

              <div id='volume-container'>
                <input type='range' id='volume-range' min='0' max='1' step='0.1' value={`${this.state.volume}`} onChange={this.handleVolumeChange} />
                {!this.state.muted ?
                  <img src={volume} onClick={this.handleToggleMute} />
                :
                  <img src={mute} onClick={this.handleToggleMute} />
                }
              </div>
          
              {this.state.loop == 0 ?
                <img src={loop} onClick={this.handleClickLoop} alt='Turn on loop' /> 
              : <div>
                  <img src={loopOrng} onClick={this.handleClickLoop} alt='Turn off loop' />
                  {this.state.loop == 2 ? <span id='loop-superscript'>1</span> : ''}
                </div>
              }

              {!this.state.shuffle ? 
                <img src={shuffle} onClick={this.handleClickShuffle} alt='Turn on shuffle' /> 
              : 
                <img src={shuffleOrng} onClick={this.handleClickShuffle} alt='Turn on shuffle' />
              }
            </div>
          </div>
        </section>  
      </footer>
    );
  }
}

export default (Player);