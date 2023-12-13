import "./Herostyle.css";
import React from 'react'
import IntroImg from '../assets/intro-bg.jpg'
import {Link} from "react-router-dom"
function Heroimg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p className="name ">Hi , I'M  HARIKRISHNAN.V.V</p>
        <h1 className="animation">MEARN STACK DEVELOPER.</h1>
        <div>
          <Link to={"/contact"} className="btn btn-light"> CONTACT</Link>
          <Link to={"/project"} className=" btn ">PROJECTS </Link>
        </div>
        
        <div>

        </div>
      </div>
    </div>
  )
}

export default Heroimg