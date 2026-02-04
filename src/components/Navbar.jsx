import React from 'react';

const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src="/assets/cdac-logo.png" alt="CDAC" className="navbar-logo" />
          <div className="navbar-links">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#placement">Placement</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
        <button className="login-btn" onClick={onLoginClick}>
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;