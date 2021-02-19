import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { displaySignin, close } from '../ModalLogic';
import "../assets/css/Modal.css";
import SignupImg from '../assets/img/signup-artists-img.png';
import Logo from '../assets/img/udunkulu-brand.png';
import Facebook from '../assets/img/facebook-brand.png';
import Google from '../assets/img/google-brand.png';
import Loader from '../assets/img/loader.gif';

let ArtistSignUp = () => {
  let location = useLocation();
  let loaderRef = useRef();

  const [state, setState] = useState({
    email: '',
    fullname: '',
    password: '',
    confirmPass: '',
    stageName: '',
    category: '',
    agree: false,
    res: ''
  })

  let handleChange = (e) => {
    if (e.target.name === 'agree') {
      let agree = state.agree ? false : true;
      setState({...state, agree: agree});
      return 0;
    }
    setState({...state, [e.target.name]: e.target.value});
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    if (state.agree) {
    if (state.password === state.confirmPass) {
    loaderRef.current.setAttribute('class', 'loader')
    let user = {
              fullname: state.fullname,
              email: state.email,
              stageName: state.stageName,
              category: state.category,
              password: state.password
            };

    fetch('https://udunkulu.herokuapp.com/api/v1/artist/signup',{
      'method': 'POST',
      'headers': {
        'content-type': 'application/json'
      },
      'body': JSON.stringify({...user})
    })
    .then((res) => { return res.json() })
    .then((res) => {if (!res.success) {
      setState({...state, res: res.message ? res.message : res.error});
      loaderRef.current.setAttribute('class', 'none')
    } else {
      window.location = '/upload';
      }
    })
    .catch((e) => {
      setState({...state, res: 'Failed to signup. Try again.'});
      loaderRef.current.setAttribute('class', 'none')
    })
    } else setState({...state, res: 'Passwords do not match'});
    } else setState({...state, res: 'Agree to the Terms and Conditions.'});
  }

  let displaySigninModal = (e) => {
    close();
    displaySignin();   
  }

  let closeModal = (e) => {
    close();
  }

  return (
    <section id='modal-wrapper-arists-signup' onClick={closeModal}>
      <div ref={loaderRef} className='none'><img src={Loader} alt='Loader gif' /></div>
      <div id='modal-hidden-artists-signup' className='modal-hidden' onClick={e => e.stopPropagation()}>
        <div className='modal-form'>
            
          <section className="brand-wrapper">
            <img src={Logo} className="brand-logo" /><p className="brand-text">UDUNKULU</p>
          </section>

          <p>Welcome Awesome Creative</p>

          <form onSubmit={handleSubmit}>
            <input placeholder='Email Address' required name='email' type="email" value={state.email} pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b" onChange={handleChange} />
            <input placeholder='Full Name' required name='fullname'  value={state.fullname} onChange={handleChange} />
            <input placeholder='Stage Name' required name='stageName' value={state.stageName}  onChange={handleChange} />
            
            <label htmlFor="category" className="label">Artist Category</label>
            <select name="category" id="category" required onChange={handleChange}>
              <option value="Select" disabled>Select</option>
              <option value="edm" >EDM</option>
              <option value="afrobeat">Afrobeat</option>
              <option value="rap/hiphop">RapHiphop</option>
              <option value="afrotrap">Afrotrap</option>
              <option value="afrofusion">Afrofusion</option>
            </select>

            <input placeholder='Password' required name='password' type="password" value={state.password} onChange={handleChange} />
            <input placeholder='Retype Password' required name='confirmPass' type="password" value={state.confirmPass} onChange={handleChange} />
            
            <div className='label flex'>
              <input type='checkbox' name='agree' value={state.agree} onChange={handleChange} />
              <label htmlFor='agree'>Accept Term and Conditions</label>
            </div>

            <button>Sign up</button>
          </form>

          <p>{state.res}</p>

          <p>Already have account? <Link to={{pathname: '/signin', state: {background: location}}} onClick={displaySigninModal}>Sign in here</Link></p>
          <div className='iconContainer'>
            <img src={Facebook} alt='Facebook icon' />
            <img src={Google} alt='Google icon' />
          </div>
        </div>

        <img src={SignupImg} alt='Black boy wearing black heaphones' />
        <p className='closeIcon' onClick={closeModal}>X</p>
      </div>
    </section>
  );
}

export default ArtistSignUp;