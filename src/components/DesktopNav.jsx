import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

function DesktopNav() {
  return (
    <motion.div
      className='desktop-nav general-nav'
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: 400, opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className='header-nav'>
        <ul>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/#work-section'>
              Work
            </Link>
          </li>
          <li>
            <Link to='/#about-section'>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </motion.div>
    
  )
}

export default DesktopNav