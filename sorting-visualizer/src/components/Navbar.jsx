import React from 'react';
import "../assets/navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <h2>Sorting Visualizer</h2>
        </Link>
      </div>
      <div className="list">
        <Link to="/selection">
          <li>SELECTION</li>
        </Link>
        <Link to="/bubble">
          <li>BUBBLE</li>
        </Link>
        <Link to="/radix">
          <li>RADIX</li>
        </Link>
        <Link to="/quick">
          <li>QUICK</li>
        </Link>
        <Link to="/insertion">
          <li>INSERTION</li>
        </Link>
        <Link to="/heap">
          <li>HEAP</li>
        </Link>
        <Link to="/merge">
          <li>MERGE</li>
        </Link>
      </div>
    </div>
  )
};

export default Navbar;