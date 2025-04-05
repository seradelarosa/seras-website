import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        // Scrolling up or at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and not at the top
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${!isVisible ? 'hidden' : ''}`}>
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#bio" onClick={closeMenu}>About</a></li>
          <li><a href="#deck" onClick={closeMenu}>Deck</a></li>
          <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
          <li><a href="#" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>

      <div className="logo">
        <a href="/" aria-label="Home">
          <img src="/images/logo.png" alt="Sera's Logo" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar; 