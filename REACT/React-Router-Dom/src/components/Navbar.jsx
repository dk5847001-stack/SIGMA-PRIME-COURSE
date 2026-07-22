import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className='Navbar'>
      <ul>
        <Link to="/" >Home</Link>
        <Link to="/contact" >Contact</Link>
        <Link to="/about" >About</Link>
        <Link to="/" >Service</Link>
      </ul>
    </div>
  );
}
