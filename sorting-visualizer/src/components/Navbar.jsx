import React from 'react';
import "../assets/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <h2>Sorting Visualizer</h2>
        </div>
        <div className="list">
            <li>BUBBLE</li>
            <li>SELECTION</li>
            <li>RADIX</li>
            <li>QUICK</li>
            <li>INSERTION</li>
            <li>HEAP</li>
            <li>MERGE</li>
        </div>
    </div>
  )
};

export default Navbar;