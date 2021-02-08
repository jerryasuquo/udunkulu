import React, { Component } from "react";
import { Link } from "react-router-dom";
import {displaySignupModal, closeModal} from '../ModalLogic';
import "../assets/css/Modal.css";
import SigninImg from '../assets/img/signin-img.png';
import Logo from '../assets/img/udunkulu-brand.png';
import Facebook from '../assets/img/facebook-brand.png';
import Google from '../assets/img/google-brand.png';

export class SignIn extends Component {

  displaySignupModal = (e) => {
    e.stopPropagation();
    closeModal();
    displaySignupModal(); 
  }

  closeModal = (e) => {
    e.stopPropagation();
    closeModal();
  }

  render() {
    return (
      <section id='modal-wrapper-signin'>
        <div id='modal-hidden-signin' className='modal-hidden' /*onBlur={this.closeModal}*/>
          <div className='modal-form'>
          <section className="brand-wrapper">
              <img src={Logo} className="brand-logo" /><p className="brand-text">UDUNKULU</p>
            </section>
            
            <p>Dear Friend, Welcome Back!!</p>

            <form>
              <input placeholder='Full Name' />
              <input placeholder='Password' />
              <button>Sign in</button>
            </form>

            <p>Don't have an account? <Link to='/signup' onClick={this.displaySignupModal}>Sign up here</Link></p>
            <div className='iconContainer'>
              <img src={Facebook} alt='Facebook icon' />
              <img src={Google} alt='Google icon' />
            </div>
          </div>

          <img src={SigninImg} alt='Side view of black woman wearing white heaphones' />
          <p className='closeIcon' onClick={this.closeModal}>X</p>
        </div>
      </section>
    );
  }
}

export default SignIn;
