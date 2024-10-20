import React from 'react'
import LandingSectionHome from '../components/LandingSectionHome'
import DetailedWorkHomePage from '../components/DetailedWorkHomePage'
import AboutSection from '../components/AboutSection';
import ProgressBar from 'react-scroll-progress-bar';



function HomePage() {
  

  return (
    <>
      <ProgressBar  height="5" bgcolor='#f08a4b' duration='0.4'/>
      <main className='home-page'>
        <LandingSectionHome/>
        <DetailedWorkHomePage/>
        <AboutSection/>
      </main>
    </>
  )
}

export default HomePage