import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Courses from './components/Courses'
import Podcasts from './components/Podcasts'
import { Feature } from 'framer-motion'
import FeaturedMedia from './components/FeaturedMedia'
function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Skills />
      <Experience />
      <Courses/>
      <FeaturedMedia  />
      <Podcasts />
      <Contact />
      <Footer />
    </>
  )
}

export default App
