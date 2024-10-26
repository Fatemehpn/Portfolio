import React from 'react'
import LandingSectionHome from '../components/LandingSectionHome'
import DetailedWorkHomePage from '../components/DetailedWorkHomePage'
import AboutSection from '../components/AboutSection';
import ProgressBar from 'react-scroll-progress-bar';
import { ParallaxProvider,Parallax } from 'react-scroll-parallax';




function HomePage() {
  

  return (
    <>
      <ProgressBar  height="5" bgcolor='#f08a4b' duration='0.2'/>
      <a href="#site-main" class="screen-reader-text">skip to content</a>
      <main className='home-page' id='site-main'>
        <LandingSectionHome/>
        <DetailedWorkHomePage/>
        <AboutSection/>
      </main>
    </>
  )
}

export default HomePage