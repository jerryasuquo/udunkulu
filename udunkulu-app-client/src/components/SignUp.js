import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { displaySignin, close } from '../ModalLogic';
import "../assets/css/Modal.css";
import SignupImg from '../assets/img/signup-img.png';
import Logo from '../assets/img/udunkulu-brand.png';
import Facebook from '../assets/img/facebook-brand.png';
import Google from '../assets/img/google-brand.png';

let SignUp = () => {
  let location = useLocation();

  const [state, setState] = useState({
    email: '',
    fullname: '',
    password: '',
    res: ''
  })

  let handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value});
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    let user = {email: state.email, fullname: state.fullname, password: state.password};

    fetch('https://udunkulu.herokuapp.com/api/v1/signup',{
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
  }

  let displaySigninModal = (e) => {
    close();
    displaySignin();   
  }

  let closeModal = (e) => {
    close();
    window.location = '/';
  }

  return (
    <section id='modal-wrapper-signup' onClick={closeModal}>
      <div id='modal-hidden-signup' className='modal-hidden' onClick={e => e.stopPropagation()}>
        <div className='modal-form'>
            
          <section className="brand-wrapper">
            <img src={Logo} className="brand-logo" /><p className="brand-text">UDUNKULU</p>
          </section>

          <p>Hello Stranger, Let's be friends.</p>

          <form onSubmit={handleSubmit}>
            <input placeholder='Full Name' required name='fullname' value={state.fullname} onChange={handleChange} />
            <input placeholder='Email Address' required name='email' value={state.email} pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b" onChange={handleChange} />
            <input placeholder='Password' required name='password' value={state.password} onChange={handleChange} />
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

export default SignUp;
