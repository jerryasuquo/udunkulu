import React, { Component } from "react";
import { Link } from "react-router-dom";
import {displaySigninModal, closeModal} from '../ModalLogic';
import "../assets/css/Modal.css";
import SignupImg from '../assets/img/signup-img.png';
import Logo from '../assets/img/udunkulu-brand.png';
import Facebook from '../assets/img/facebook-brand.png';
import Google from '../assets/img/google-brand.png';

class SignUp extends Component {

  displaySigninModal = (e) => {
    closeModal();
    displaySigninModal(); 
    e.stopPropagation();
  }

  closeModal = (e) => {
    closeModal();
    e.stopPropagation();
  }

  render() {
    return (
      <section id='modal-wrapper-signup'>
        <div id='modal-hidden-signup' className='modal-hidden' /*onBlur={this.closeModal}*/>
          <div className='modal-form'>
            <section className="brand-wrapper">
              <img src={Logo} className="brand-logo" /><p className="brand-text">UDUNKULU</p>
            </section>

            <p>Hello Stranger, Let's be friends.</p>
            <form>
              <input placeholder='Full Name' />
              <input placeholder='Email Address' />
              <input placeholder='Password' />
              <button>Sign up</button>
            </form>

            <p>Already have account? <Link to='/signin' onClick={this.displaySigninModal}>Sign in here</Link></p>
            <div className='iconContainer'>
              <img src={Facebook} alt='Facebook icon' />
              <img src={Google} alt='Google icon' />
            </div>
          </div>

          <img src={SignupImg} alt='Black boy wearing black heaphones' />
          <p className='closeIcon' onClick={this.closeModal}>X</p>
        </div>
      </section>
    );
  }
}

export default SignUp;
