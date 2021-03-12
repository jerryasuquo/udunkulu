import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {replacePlaylist} from '../redux/actions/replacePlaylist';
import LibraryNav from '../components/LibraryNav';
import PlaylistMenu from '../components/PlaylistMenu';
import Player from '../components/Player';
import playIcon from '../assets/img/play-icon.png';
import line from '../assets/img/line.png';
import '../assets/css/Playlist.css';


//Playlist Component
let Playlist = () => {
  const dispatch = useDispatch();
  const componentRef = useRef(false);
  const [state, setState] = useState({
    src: '',
    title: '',
    artist: '',
    deetsList: [
      {title: 'FEM', src: '/audio/ABetterTime/FEM.mp3', artist: 'Davido', cover: '/audio/ABetterTime/fem-album-art.png', album: 'ABT', releaseDate: '2017'},
      {title: 'Jowo', src: '/audio/ABetterTime/Jowo.mp3', artist: 'Davido', cover: '/audio/ABetterTime/fem-album-art.png', album: 'ABT', releaseDate: '2017'},
      {title: 'Something Fishy', src: '/audio/ABetterTime/SomethingFishy.mp3', artist: 'Davido', cover: '/audio/ABetterTime/fem-album-art.png', album: 'ABT', releaseDate: '2017'},
      {title: 'Holy Ground', src: '/audio/ABetterTime/HolyGround.mp3', artist: 'Davido, Nicki Minaj', cover: '/audio/ABetterTime/fem-album-art.png', album: 'ABT', releaseDate: '2017'},
      {title: 'Heaven', src: '/audio/ABetterTime/Heaven.mp3', artist: 'Davido', cover: '/audio/ABetterTime/fem-album-art.png', album: 'ABT', releaseDate: '2017'},
      {title: 'Very Special', src: '/audio/ABetterTime/VerySpecial.mp3', artist: 'Davido', cover: '/audio/ABetterTime/fem-album-art.png', album: 'ABT', releaseDate: '2017'},
      {title: 'The Best', src: '/audio/ABetterTime/TheBest.mp3', artist: 'Davido, Mayorkun', cover: '/audio/ABetterTime/fem-album-art.png', album: 'ABT', releaseDate: '2017'},
      {title: 'Shopping Spree', src: '/audio/ABetterTime/ShoppingSpree.mp3', artist: 'Davido, Chris Brown, Young Thug', cover: '/audio/ABetterTime/fem-album-art.png', album: 'ABT', releaseDate: '2017'},
      {title: 'Sunlight', src: '/audio/ABetterTime/Sunlight.mp3', artist: 'Davido', cover: '/audio/ABetterTime/fem-album-art.png', album: 'ABT', releaseDate: '2017'},
      {title: 'Tanana', src: '/audio/ABetterTime/Tanana.mp3', artist: 'Davido, Tiwa Savage', cover: '/audio/ABetterTime/fem-album-art.png', album: 'ABT', releaseDate: '2017'},
      {title: 'Mebe', src: '/audio/ABetterTime/Mebe.mp3', artist: 'Davido, Mugeez', cover: '/audio/ABetterTime/fem-album-art.png', album: 'ABT', releaseDate: '2017'},
      {title: 'La La', src: '/audio/ABetterTime/LaLa.mp3', artist: 'Davido, CKay', cover: '/audio/ABetterTime/fem-album-art.png', album: 'ABT', releaseDate: '2017'},
      {title: 'So Crazy', src: '/audio/ABetterTime/SoCrazy.mp3', artist: 'Davido, Lil Baby', cover: '/audio/ABetterTime/fem-album-art.png', album: 'ABT', releaseDate: '2017'},
      {title: 'Birthday Cake', src: '/audio/ABetterTime/BirthdayCake.mp3', artist: 'Davido, Nas, Hit-Boy', cover: '/audio/ABetterTime/fem-album-art.png', album: 'ABT', releaseDate: '2017'},
      {title: 'I Got a Friend', src: '/audio/ABetterTime/IGotAFriend.mp3', artist: 'Davido, Mayorkun, Sho Madjozi', cover: '/audio/ABetterTime/fem-album-art.png', album: 'ABT', releaseDate: '2017'},
      {title: 'Fade', src: '/audio/ABetterTime/Fade.mp3', artist: 'Davido, Bella Shmurda', cover: '/audio/ABetterTime/fem-album-art.png', album: 'ABT', releaseDate: '2017'},
      {title: 'On My Way', src: '/audio/ABetterTime/OnMyWay.mp3', artist: 'Davido, Sauti Sol', cover: '/audio/ABetterTime/fem-album-art.png', album: 'ABT', releaseDate: '2017'},
    ],
    playing: false,
    index: 0,
    x: 0
  });

  useEffect(() => {
    componentRef.current ? dispatch(replacePlaylist(state)) : componentRef.current = true;  
  })

  let handleClick = (e, props) => {
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
    });
    
    document.getElementById('list').setAttribute('class', 'list-shorter');
  }

 return (
    <div>
      <LibraryNav />
      <PlaylistMenu />
      <div id='playlist'>
        <section className='list-container'>
        <section className='list'>
        <h1>Now Playing</h1>
        <div id='list' className='list-longer'>
          <li><div className='flexBox' data-index={0} onClick={handleClick}><p data-index={0}><span>01</span>FEM</p><p data-index={0}>3:22</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox' data-index={1} onClick={handleClick}><p data-index={1}><span>02</span>Jowo</p><p data-index={1}>2:56</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox' data-index={2} onClick={handleClick}><p data-index={2}><span>03</span>Something Fishy</p><p data-index={2}>2:53</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox' data-index={3} onClick={handleClick}><p data-index={3}><span>04</span>Holy Ground</p><p data-index={3}>2:42</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox' data-index={4} onClick={handleClick}><p data-index={4}><span>05</span>Heaven</p><p data-index={4}>2:44</p></div><img src={line} alt=''/></li>
          <li ><div className='flexBox' data-index={5} onClick={handleClick}><p data-index={5}><span>06</span>Very Special</p><p data-index={5}>3:10</p></div><img src={line} alt=''/></li>
          <li ><div className='flexBox' data-index={6} onClick={handleClick}><p data-index={6}><span>07</span>The Best</p><p data-index={6}>2:44</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox' data-index={7} onClick={handleClick}><p data-index={7}><span>08</span>Shopping Spree</p><p data-index={7}>2:51</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox' data-index={8} onClick={handleClick}><p data-index={8}><span>09</span>Sunlight</p><p data-index={8}>3:33</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox' data-index={9} onClick={handleClick}><p data-index={9}><span>10</span>Tanana</p><p data-index={9}>3:42</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox' data-index={10} onClick={handleClick}><p data-index={10}><span>11</span>Mebe</p><p data-index={10}>4:00</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox' data-index={11} onClick={handleClick}><p data-index={11}><span>12</span>La La</p><p data-index={11}>3:07</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox' data-index={12} onClick={handleClick}><p data-index={12}><span>13</span>So Crazy</p><p data-index={12}>2:50</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox' data-index={13} onClick={handleClick}><p data-index={13}><span>14</span>Birthday Cake</p><p data-index={13}>2:50</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox' data-index={14} onClick={handleClick}><p data-index={14}><span>15</span>I Got a Friend</p><p data-index={14}>4:38</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox' data-index={15} onClick={handleClick}><p data-index={15}><span>16</span>Fade</p><p data-index={15}>3:26</p></div><img src={line} alt=''/></li>
          <li><div className='flexBox' data-index={16} onClick={handleClick}><p data-index={16}><span>17</span>On My Way</p><p data-index={16}>3:50</p></div><img src={line} alt=''/></li>
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

      {/*{state.playing ? 
      <Player 
        deetsList={state.deetsList} playing={state.playing} 
        cover={state.cover} title={state.title} artist={state.artist}
        x={state.x} index={state.index} src={state.src} 
        album={state.album} album={state.album} releaseDate={state.releaseDate}
      /> 
      :  
      ''}*/}
    </div>
  );
}

export default Playlist;