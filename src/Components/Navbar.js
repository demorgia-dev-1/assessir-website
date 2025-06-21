import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <ScrollLink to="hero" smooth={true} duration={500} className="logo">
            Asses-Sir
          </ScrollLink>
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ScrollLink to="hero" smooth={true} duration={500} offset={-60}>Home</ScrollLink>
          <ScrollLink to="empowering-section" smooth={true} duration={500} offset={-60}>About</ScrollLink>
          <ScrollLink to="features" smooth={true} duration={500} offset={-60}>Features</ScrollLink>
          <ScrollLink to="evaluation" smooth={true} duration={500} offset={-70}>Product</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>Contact</ScrollLink>
          <ScrollLink to="cta" smooth={true} duration={500} offset={-60}>Get Started</ScrollLink>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


