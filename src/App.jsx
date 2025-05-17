import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/About'
import ServicesSection from './components/Services'
import FAQSection from './components/FAQ'
import WhyChooseUs from './components/OurCommitment'
import ContactUs from './components/ContactUs'
import { Link } from 'lucide-react'
import ContactHero from './components/ContactHero'
import Footer from './components/Footer'
import PlansSection from './components/Plans'
import Classes from './components/Classes'
import Trainers from './components/Trainers'
import Gallery from './components/Gallery'
import MouseTrail from './components/MouseTrail'
import MouseParticles from './components/MouseTrail'
import ScrollToTop from './components/ScrolltoTop'
import DarkModeToggle from './components/DarkModeToggle'

const App = () => {
  return (
    <>
      <DarkModeToggle/>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <ServicesSection />
      <Classes/>
      <Trainers/>
      <PlansSection/>
      <Gallery/>
      <FAQSection />
      <ContactHero/>
      <ContactUs />
      <MouseParticles/>
      <ScrollToTop/>
      <Footer/>
    </>
  )
}

export default App
