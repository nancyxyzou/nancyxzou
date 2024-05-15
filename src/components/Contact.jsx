import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { BsLinkedin } from "react-icons/bs";
import { BsFiletypePdf } from "react-icons/bs";
import Resume from '../assets/F24Resume.pdf'

const Contacts = () => {
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
            <a href="mailto:nxyzou@uwaterloo.ca"><b>Send a message</b></a>
          </article>

          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5 style={{color: '#abd1c6'}}>linkedin.com/in/nancyxzou/</h5>
            <a href="https://www.linkedin.com/in/nancyxzou/"><b>Connect with me</b></a>
          </article>
          
          <article className='contact__option'>
            <BsFiletypePdf className='contact__option-icon'/>
            <h4>Resume</h4>
            <h5 style={{color: '#abd1c6'}}>Last but not least...</h5>
            <a href={Resume} target = "_blank"><b>Check out my resume</b></a>
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