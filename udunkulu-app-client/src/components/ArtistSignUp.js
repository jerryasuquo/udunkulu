import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { displaySignin, close } from '../ModalLogic';
import "../assets/css/Modal.css";
import SignupImg from '../assets/img/signup-artists-img.png';
import Logo from '../assets/img/udunkulu-brand.png';
import Facebook from '../assets/img/facebook-brand.png';
import Google from '../assets/img/google-brand.png';

let ArtistSignUp = () => {
  let location = useLocation();

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
      console.log(state);
      return 0;
    }
    setState({...state, [e.target.name]: e.target.value});
    console.log(state);
  }

  let handleSubmit = (e) => {
    e.preventDefault();

    if (state.agree) {
    let user = {
              email: state.email,
              fullname: state.fullname,
              password: state.password, 
              stageName: state.stageName,
              category: state.category
            };

    fetch('https://udunkulu.herokuapp.com/api/v1/signup-artists',{
      'method': 'POST',
      'headers': {
        'content-type': 'application/json'
      },
      'body': JSON.stringify({...user})
    })
    .then((res) => { return res.json()})
    .then((res) => {if (!res.success) {
      console.log(res);
      setState({...state, res: res.message});
    } else {
      displaySigninModal();
      }
    })
    .catch((e) => {
      console.log(e.message);
      setState({...state, res: 'Failed to signup. Try again.'});
    })
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
      <div id='modal-hidden-artists-signup' className='modal-hidden' onClick={e => e.stopPropagation()}>
        <div className='modal-form'>
            
          <section className="brand-wrapper">
            <img src={Logo} className="brand-logo" /><p className="brand-text">UDUNKULU</p>
          </section>

          <p>Welcome Awesome Creative</p>

          <form onSubmit={handleSubmit}>
            <input placeholder='Email Address' required name='email' value={state.email} pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b" onChange={handleChange} />
            <input placeholder='Full Name' required name='fullname' value={state.fullname} onChange={handleChange} />
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

            <input placeholder='Password' required name='password' value={state.password} onChange={handleChange} />
            <input placeholder='Retype Password' required name='confirmPass' value={state.confirmPass} onChange={handleChange} />
            
            <div className='label flex'>
              <input type='checkbox' id='agree' name='agree' value={state.agree} onChange={handleChange} />
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