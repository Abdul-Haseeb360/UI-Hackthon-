import React from 'react'
import AboutNavbar from "@/app/Components/AboutNavebar"
import PricingHeroSection from '../Components/PricingHeroSection'
import PricingCards from '../Components/PricingCards'
import Footer from '../Components/Footer'
import ComponySection from '../Components/ComponySection'
import FAQSection from '../Components/FaqSection'
import FreeTrail from '../Components/FreeTrail'
function page() {
  return (
    <div>
        <AboutNavbar/>
        <PricingHeroSection/>
        <PricingCards/>
        <ComponySection showText={false}/>
        <FAQSection/>
        <FreeTrail/>
        <Footer/>
    </div>
  )
}

export default page