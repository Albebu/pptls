// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex justify-center space-x-8">
      <Link to="/" className="hover:text-blue-400 transition-colors">
        Home
      </Link>
      <Link to="/game" className="hover:text-blue-400 transition-colors">
        Game
      </Link>
      <Link to="/contact" className="hover:text-blue-400 transition-colors">
        Contact
      </Link>
    </nav>
  );
  
}
