import React from 'react';
import Base from './components/Base.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Deck from './components/Deck/Deck.jsx';
import { Route, Routes } from 'react-router';

import '../src/App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/deck" element={<Deck />} />
      </Routes>
    </>
  );
};

export default App;

