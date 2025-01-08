import React from 'react'
import AboutNavebar from '../Components/AboutNavebar'
import AboutHeroSection from '../Components/AboutHeroSection'
import Footer from '../Components/Footer'
import OurTeam from "../Components/OurTeam"
import OurClient from '../Components/ComponySection'
import State from '../Components/State'
import VideoCard from '../Components/VideoCard'
import Content from '../Components/Content'
import WorkWithUs from '../Components/WorkWithUs'

function About() {
  return (
    <div >
     <AboutNavebar/>
     <AboutHeroSection/>
     <Content/> 
     <State/>
     <VideoCard/>
     <OurTeam/>
     <OurClient/>
     <WorkWithUs/>
     <Footer bgColor="white"/>
    </div>
  )
}

export default About
