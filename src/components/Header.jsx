import React from 'react'
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import { useState, useEffect } from 'react';
function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobileSize, setIsMobileSize] = useState(window.innerWidth <= 800);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  useEffect(()=>{
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setIsMobileSize(true);
      } else {
        setIsMobileSize(false);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[isMobileSize])
  

  const closeIcon = 
    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
  

  return (
  <header>
    <img src='/logo.svg' className='logo'/>
    <div className='nav-and-button-wrapper'>
    <button onClick={toggleMenu}>
      {
        isMenuOpen ? closeIcon : 'Menu'
      }
    </button>
    {
      isMenuOpen? isMobileSize ?  <MobileNav closeMenu={() => setMenuOpen(false)}/> : <DesktopNav closeMenu={() => setMenuOpen(false)}/> : ''
    }
    </div>
    
  </header>
  )
}   

export default Header