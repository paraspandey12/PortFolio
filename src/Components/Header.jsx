import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

function Header() {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold"><Link to="/">Paras</Link></h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
            <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
            <li><Link to="/skills" className="hover:text-gray-400">Skills</Link></li>
            <li><Link to="/experience" className="hover:text-gray-400">Experience</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
