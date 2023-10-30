import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './views/pages/Home';
import Media from './views/pages/Media'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/media" element={<Media />} />
    </Routes>
  );
}

export default App;
