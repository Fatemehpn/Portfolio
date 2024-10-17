import React from 'react'
import LandingSectionHome from '../components/LandingSectionHome'
import DetailedWorkHomePage from '../components/DetailedWorkHomePage'
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';


function HomePage() {

  return (
    <>
      <main className='home-page'>
        <LandingSectionHome/>
        <DetailedWorkHomePage/>
        <AboutSection/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default HomePage