import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="footer-logo-img" />
        </div>
        <nav className="footer-nav">
          <a href="#bio">About</a>
          <a href="#deck">Deck</a>
          <a href="#portfolio">Portfolio</a>
        </nav>
        <div className="footer-social">
          <a href="https://github.com/seradelarosa" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.svg" alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/sera-de-la-rosa/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 