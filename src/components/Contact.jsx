import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
// import { useRef } from 'react';
import { SiLinkedin } from "react-icons/si";

const Contacts = () => {
//   const form = useRef()

  return (
    <section id='contacts'>

      <h5>How can you reach me?</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5 style={{color: '#abd1c6'}}>nxyzou@uwaterloo.ca</h5>
            <a href="mailto:nxyzou@uwaterloo.ca">Send a message</a>
          </article>

          <article className='contact__option'>
            <SiLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5 style={{color: '#abd1c6'}}>linkedin.com/in/nancyxzou/</h5>
            <a href="https://www.linkedin.com/in/nancyxzou/">Connect with me</a>
          </article>
        </div>

        {/* <form ref={form}>
            <input type="text" name="name" placeholder="Your Full Name" required /> 
            <input type="email" name='email' placeholder='Your Email' required /> 
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
        </form> */}
      </div>    
    </section>
  )
}

export default Contacts