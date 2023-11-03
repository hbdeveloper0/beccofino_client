
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './views/pages/Home';
import Media from './views/pages/media'
import Rreservation from './views/pages/reservation';
import Event from './views/pages/eventPage'
import Menu from './views/pages/Menu';

import ModelState from './context/ModelState';


function App() {
  return (
    <ModelState>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/media" element={<Media />} />
      <Route path="/reservation" element={<Rreservation/>} />
      <Route path="/events" element={<Event/>} />
      <Route path="/menu" element={<Menu/>} />
    </Routes>
    </ModelState>
  );
}

export default App;
