import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/exchange" element={<Screen2 />} />
        <Route path="/screen4" element={<Screen3 />} />
      </Routes>
    
    </Router>

  );
}

export default App;
