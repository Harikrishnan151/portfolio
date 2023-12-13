import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Contactme from '../Components/Contactme'
import ContactForm from '../Components/ContactForm'

function Contact() {
  return (
    <div>
      <Navbar/>
      <Contactme/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact