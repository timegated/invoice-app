import React, { useState } from 'react'
import logo from '../../assets/logo.svg';
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
        <img src={logo} alt="Invoice app logo" />
      </div>
      <div className="nav-item-footer">Nav2</div>
    </section>
  )
}

export default Navigation