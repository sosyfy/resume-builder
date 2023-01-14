
import React from 'react'
import Header from '../../components/Header'
import FaqSection from './FaqSection'
import FeaturedResume from './FeaturedResume'
import Features from './Features'
import HeroSection from './HeroSection'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'

function Home() {
  return (
    <main className='scroll-smooth'>
      <Header />
      <HeroSection />
      <Features />
      <HowItWorks />
      <FeaturedResume />
      <Testimonials />
      <FaqSection />  
    </main>
  )
}

export default Home