import React from 'react'
import About from './About'
import Services from './Services'
import DesignProcess from './DesignProcess'
import HeroSection from './HeroSection'
import FieldStripSection from './FieldStripSection'
import LatestProjects from './LatestProjects'
import Testimonials from './Testimonials'


function Home() {
  return (
    <>
    <HeroSection/>
    <FieldStripSection/>
      <About />
      <Services />
      <DesignProcess />
      <LatestProjects/>
    <Testimonials/>
      
    </>
  )
}

export default Home
