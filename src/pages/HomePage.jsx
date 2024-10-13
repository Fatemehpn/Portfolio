import React from 'react'
import LandingSectionHome from '../components/LandingSectionHome'
import DetailedWorkHomePage from '../components/DetailedWorkHomePage'
import AboutSection from '../components/AboutSection'


function HomePage() {

  return (
    <main className='home-page'>
      <LandingSectionHome/>
      <DetailedWorkHomePage/>
      <AboutSection/>
    </main>
  )
}

export default HomePage