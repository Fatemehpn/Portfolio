import React from 'react';
import { Link } from "react-router-dom";

function DesktopNav() {
  return (
    <div className='desktop-nav general-nav'>
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
    </div>
    
  )
}

export default DesktopNav