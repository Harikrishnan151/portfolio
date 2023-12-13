import React from 'react'
import './SkillForm.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
function SkillForm() {
  return (
    <div className='container my-5'>
        <section id='skills'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3 >Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
            <BsFillPatchCheckFill style={{color:"white"}}  className='experience_details-icon'/>
           <div>
           <h4>HTML</h4>
            <small style={{color:"white"}} className='text-white'>Experienced</small>
           </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill style={{color:"white"}} className='experience_details-icon'/>
          <div>
          <h4>CSS</h4>
            <small style={{color:"white"}} className='text-light'>Intermediate</small>
          </div>
            </article>
            <article style={{color:"white"}} className='experience_details'>
            <BsFillPatchCheckFill style={{color:"white"}}  className='experience_details-icon'/>
            <div>
            <h4>JAVASCRIPT</h4>
            <small style={{color:"white"}} className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill style={{color:"white"}}  className='experience_details-icon'/>
            <div>
            <h4>BOOTSTRAP</h4>
            <small style={{color:"white"}} className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill style={{color:"white"}}  className='experience_details-icon'/>
            <div>
            <h4>ANGULAR</h4>
            <small style={{color:"white"}} className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill style={{color:"white"}}  className='experience_details-icon'/>
          <div>
          <h4>REACT</h4>
            <small style={{color:"white"}} className='text-light'>Intermediate</small>
          </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
            <BsFillPatchCheckFill style={{color:"white"}}  className='experience_details-icon'/>
           <div>
           <h4>Node JS</h4>
            <small style={{color:"white"}} className='text-light'>Intermediate</small>
           </div>
            </article>
            <article style={{color:"white"}} className='experience_details'>
            <BsFillPatchCheckFill style={{color:"white"}}  className='experience_details-icon'/>
           <div>
           <h4>MongoDB</h4>
            <small style={{color:"white"}} className='text-light'>Intermediate</small>
           </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill style={{color:"white"}}  className='experience_details-icon'/>
            <div>
            <h4>JAVASCRIPT</h4>
            <small style={{color:"white"}} className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill style={{color:"white"}}  className='experience_details-icon'/>
           <div>
           <h4>Express</h4>
            <small style={{color:"white"}} className='text-light'>Intermediate</small>
           </div>
            </article>
            
          </div>
        </div>
        </div> 

    </section>

    </div>
  )
}

export default SkillForm