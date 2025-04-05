// src/components/Base.jsx
import React from 'react';
import Bio from './Bio/Bio';
import './Base.css';
import Navbar from './Navbar/Navbar';
import Deck from './Deck/Deck';
import Portfolio from './Portfolio/Portfolio';
import Footer from './Footer/Footer';

const Base = () => {
  return (
    <div className="base-container">
      <Navbar />
      <main className="main-content">
        <section id="bio">
          <Bio />
        </section>
        <section id="deck">
          <Deck />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default Base;
