import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Myskills from '../Components/Myskills'
import SkillForm from '../Components/SkillForm'


function Skills() {
  return (
    <div>
    <Navbar/>
      <Myskills/>
      <SkillForm/>
      <Footer/>
    </div>
  )
}

export default Skills