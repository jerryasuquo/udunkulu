import React, { useState } from "react";
import { Link, useLocation} from "react-router-dom";
import { displaySignup, close } from '../ModalLogic';
import "../assets/css/Modal.css";
import SigninImg from '../assets/img/signin-img.png';
import Logo from '../assets/img/udunkulu-brand.png';
import Facebook from '../assets/img/facebook-brand.png';
import Google from '../assets/img/google-brand.png';

let SignIn = () => {
  let location = useLocation();

  const [state, setState] = useState({
    email: '',
    password: '',
    res: ''
  });

  let handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value});
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    let user = {email: state.email, password: state.password};

    fetch('https://udunkulu.herokuapp.com/api/v1/login',{
      'method': 'POST',
      'headers': {
        'content-type': 'application/json'
      },
      'body': JSON.stringify({...user})
    })
    .then((res) => { return res.json()})
    .then((res) => {if (!res.success) {
      console.log(res.message);
      this.setState({...state, res: res.message});
    } else {
      window.location = '/recmds';
      }
    })
    .catch((e) => {
      console.log(e.message);
      setState({...state, res: 'Failed to login. Try again.'});
    })  
  }

  let displaySignupModal = (e) => {
    e.stopPropagation();
    close();
    displaySignup(); 
  }

  let closeModal = (e) => {
    close();
  }

  return (
    <section id='modal-wrapper-signin' onClick={closeModal}>
      <div id='modal-hidden-signin' className='modal-hidden' onClick={e => e.stopPropagation()}>
        <div className='modal-form'>

          <section className="brand-wrapper">
            <img src={Logo} className="brand-logo" /><p className="brand-text">UDUNKULU</p>
          </section>
            
          <p>Dear Friend, Welcome Back!!</p>

          <form onSubmit={handleSubmit}>
            <input placeholder='Email' required name='email' value={state.email}  pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b" onChange={handleChange} />
            <input placeholder='Password' required value={state.password} name='password'  onChange={handleChange} />
            <button>Sign in</button>
          </form>

          <p>{state.res}</p>

          <p>Don't have an account? <Link to={{pathname:'/signup', state: {background: location}}} onClick={displaySignupModal}>Sign up here</Link></p>
            
          <div className='iconContainer'>
            <img src={Facebook} alt='Facebook icon' />
            <img src={Google} alt='Google icon' />
          </div>
        </div>

        <img src={SigninImg} alt='Side view of black woman wearing white heaphones' />
        <p className='closeIcon' onClick={closeModal}>X</p>
      </div>
    </section>
  );
}

export default SignIn;
