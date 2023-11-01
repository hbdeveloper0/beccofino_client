import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './views/pages/Home';
import Media from './views/pages/Media'
import Rreservation from './views/pages/reservation';
import Event from './views/pages/Event'
import Menu from './views/pages/Menu';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/media" element={<Media />} />
      <Route path="/reservation" element={<Rreservation/>} />
      <Route path="/events" element={<Event/>} />
      <Route path="/menu" element={<Menu/>} />
    </Routes>
  );
}

export default App;
