import React from 'react'
import "./Footer.css"
import {FaHome,FaPhone,FaMailBulk,FaLinkedin,} from "react-icons/fa"
import {BsGithub} from 'react-icons/bs'
import {BiLogoWhatsapp} from 'react-icons/bi'
function Footer() {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:'2rem'}}/>
                    <div>
                        <p>Thrissur,Kerala</p>
                        
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                    <FaPhone size={20} style={{color:"#fff", marginRight:'2rem'}}/>+91 8921087732
                    </h4>
            
                </div>
                <div className="email">
                <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight:'2rem'}}/>harivijukumar@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <h4>About Me</h4>
                <p>This is me Harikrishnan FREELANCE MEARN Stack Developer.I enjoy discussing new projects and design challanges. </p>
                <div className='social'>
               
                <a href="https://api.whatsapp.com/send?phone=8921087732">    <BiLogoWhatsapp size={30} style={{color:"#fff", marginRight:'1rem'}}/> </a>
                 <a href="https://github.com/Harikrishnan151">  <BsGithub size={30} style={{color:"#fff", marginRight:'1rem'}}/> </a> 
              <a href="https://www.linkedin.com/in/hari-krishnan-v-v/">  <FaLinkedin size={30} style={{color:"#fff", marginRight:'1rem'}}/> </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer