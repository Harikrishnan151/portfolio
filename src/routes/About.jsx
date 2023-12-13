import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Abouts from '../Components/Abouts'
import AboutForm from '../Components/AboutForm'

function About() {
  return (
    <div>
      <Navbar/>
      <Abouts/>
      <AboutForm/>
      <Footer/>
    </div>
  )
}

export default About