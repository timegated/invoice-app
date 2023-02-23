import React, { useState } from 'react'
import logo from '../../assets/logo.svg';
import avatar from '../../assets/image-avatar.jpg';
import moon from '../../assets/icon-moon.svg';
import './navigation.css';

const Navigation = () => {
  const [first, setfirst] = useState("");

  return (
    <section
      className="nav-container"
    >
      <div className="nav-item-header">
        <div className="bg-color-1"></div>
        <div className="bg-color-2"></div>
        <a href="/">
          <img src={logo} alt="Invoice app logo" />
        </a>
      </div>
      <div className="nav-item-footer">
        <a href="#implement-dark-mode">
          <img className="icon-moon-img" src={moon} alt="" />
        </a>
        <div className="user-profile-area">
          <a href="#build-user-profile-page">
            <img className="user-profile-img" src={avatar} alt="User profile picture" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Navigation