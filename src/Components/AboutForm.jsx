import React from 'react'
import './AboutForm.css'
import {RiAngularjsLine} from 'react-icons/ri'
import {GrReactjs} from 'react-icons/gr'
import {TbBrandJavascript} from 'react-icons/tb'
import { Link } from 'react-router-dom';
import hari from '../assets/HARIKRISHNAN.V.V.pdf'
import img1 from '../assets/propic.jpg'
function AboutForm() {

  return (
    <div className='about m-5'>
      <h5  style={{  color:"white"}} >Get To Know</h5>
      <h2 style={{  color:"white"}}>About Me</h2>

      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me-image">
            <img style={{width:'300px',height:'389px'}}  src={img1}alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <RiAngularjsLine className='about_icon'/>
              <h5>Angular</h5>
              
            </article>
            <article className='about_card'>
              <GrReactjs className='about_icon'/>
              <h5>React</h5>
              
            </article>
            <article className='about_card'>
              <TbBrandJavascript className='about_icon'/>
              <h5>JavaScript</h5>
              
            </article>
          </div>

          <p >
          I am a passionate and results-driven MEARN (MongoDB, Express.js, Angular,React, Node.js) developer with a strong foundation in full-stack web development. 
          My journey in the world of programming began with a fascination for creating interactive and dynamic web applications.
           Over the years, I've honed my skills and accumulated valuable experience that has allowed me to craft robust and efficient solutions.
          </p>
          <div className='btns1' >
          <Link to={"/contact"}>
          <a  className='btn btn-primary'>Let's Talk</a>
          </Link>
          <a href={hari} download>  <button  className='btn btn-light '>  Hire me</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutForm