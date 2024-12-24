import React from 'react'
import AboutNavebar from '../Components/AboutNavebar'
import AboutHeroSection from '../Components/AboutHeroSection'
import Footer from '../Components/Footer'
import OurTeam from "../Components/OurTeam"
import OurClient from '../Components/OurClient'
import State from '../Components/State'
import VideoCard from '../Components/VideoCard'
import Content from '../Components/Content'

function About() {
  return (
    <div className='overflow-hidden'>
     <AboutNavebar/>
     <AboutHeroSection/>
     <Content/> 
     <State/>
     <VideoCard/>
     <OurTeam/>
     <OurClient/>
     <Footer/>
    </div>
  )
}

export default About
