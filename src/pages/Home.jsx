import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import AboutPreview from '../components/Home/AboutPreview'
import ProductCategories from '../components/Home/ProductCategories'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import BrandsSection from '../components/Home/BrandsSection'
import GalleryPreview from '../components/Home/GalleryPreview'
import Testimonials from '../components/Home/Testimonials'
import ContactCTA from '../components/Home/ContactCTA'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutPreview/>
      <ProductCategories/>
      <WhyChooseUs/>
      <BrandsSection/>
      <GalleryPreview/>
      <Testimonials/>
      <ContactCTA/>
    </div>
  )
}

export default Home
