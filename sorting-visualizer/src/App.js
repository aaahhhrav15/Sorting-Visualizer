import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Selection from './components/Selection';
import Bubble from './components/Bubble';
import Radix from './components/Radix';
import Quick from './components/Quick';
import Insertion from './components/Insertion';
import Heap from './components/Heap';
import Merge from './components/Merge';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/selection" element={<Selection/>}/>
        <Route path="/bubble" element={<Bubble />} />
        <Route path="/radix" element={<Radix />} />
        <Route path="/quick" element={<Quick />} />
        <Route path="/insertion" element={<Insertion />} />
        <Route path="/heap" element={<Heap />} />
        <Route path="/merge" element={<Merge />} />
      </Routes>
    </Router>
  )
};

export default App;