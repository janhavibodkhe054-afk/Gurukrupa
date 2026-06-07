import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import AboutPreview from '../components/Home/AboutPreview'
import ProductCategories from '../components/Home/ProductCategories'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import BrandsSection from '../components/Home/BrandsSection'
import GalleryPreview from '../components/Home/GalleryPreview'
import Testimonials from '../components/Home/Testimonials'
import ContactCTA from '../components/Home/ContactCTA'
import StatsSection from '../components/Home/StatsSection'
import ServicesCircle from '../components/Home/ServicesCircle'
import VisionMission from '../components/Home/VisionMission'



const Home = () => {
  return (
    <div>
      <HeroSection/>
      
      <AboutPreview/>
      
      <ProductCategories/>
      <WhyChooseUs/>
      <BrandsSection/>
      <StatsSection/>
      <VisionMission/>
      <Testimonials/>
      <ContactCTA/>
    </div>
  )
}

export default Home
