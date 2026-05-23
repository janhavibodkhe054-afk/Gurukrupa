import React from 'react'
import AboutBanner from '../components/About/AboutBanner'
import AboutCompanySection from '../components/About/AboutCompanySection'
import StatsSection from '../components/About/StatsSection'
import WhyChooseSection from '../components/About/WhyChooseSection'
import VisionMissionSection from '../components/About/VisionMissionSection'
import FounderMessageSection from '../components/About/FounderMessageSection'
import CTASection from '../components/About/CTASection'

const About = () => {
  return (
    <div>
      <AboutBanner/>
      <AboutCompanySection/>
      <StatsSection/>
      <WhyChooseSection/>
      <VisionMissionSection/>
      <FounderMessageSection/>
      <CTASection/>
    </div>
  )
}

export default About
