import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './ContactForm.css'




function ContactForm() {

    const form=useRef()
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_w9th8o9', 'template_us8yt1l', form.current, 'OExyzXmAWtWyYavi3')
    alert("Message send")
    e.target.reset()
  };

    return (

       <div className='form'>
        <form ref={form} onSubmit={sendEmail} >
            <label htmlFor="">Your Name</label>
            <input type="text"></input>
            <label htmlFor="">Email</label>
            <input type="text"></input>
            <label htmlFor="">Subject</label>
            <input type="text"></input>
            <label htmlFor="">Message</label>
            <textarea  rows="6" placeholder='Type your message'></textarea>
            <button className='btn'>Submit</button>
        </form>
        
       </div>
    )
}

export default ContactForm