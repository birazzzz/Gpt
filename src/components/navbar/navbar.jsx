import React from 'react';
import './navbar.css';
import {RiMenuline, RiCloseline } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

//BEM  > Block Element Modifier

const Navbar = () => {
  return (
    <div className="Gpt3__navbar">
      <div className="Gpt3__navbar-links">
        <div className="gpt3">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar