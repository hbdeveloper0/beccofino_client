import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './views/pages/Home';
import Media from './views/pages/media'
import Rreservation from './views/pages/reservation';
import Event from './views/pages/eventPage'
import Menu from './views/pages/Menu';
import Contact from './views/pages/contact';
import Checkout from './views/pages/reservation/checkout';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/media" element={<Media />} />
      <Route path="/reservation" element={<Rreservation/>} />
      <Route path="/events" element={<Event/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/checkout" element={<Checkout/>} />
    </Routes>
  );
}

export default App;
