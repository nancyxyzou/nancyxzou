import { React } from 'react'
import './About.css'
import NancyProfile from '../assets/NancyProfile.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import {TfiWorld} from 'react-icons/tfi'

const About = () => {

  return (
    <section id='about'>
      <h5>What should you know about me?</h5>  
      <h2>About Me</h2>

      <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={NancyProfile} alt="ProfilePicture" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <p className='about__card'>
                  <br />
                  <GiGraduateCap className='about__icon'/>
                  <h5>Education</h5>
                  <small>Honours BSc Biomedical Engineering <br /> <i>University of Waterloo</i></small>
              </p>

              <p className='about__card'>
                  <br />
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    Frontend/Backend Development <br />
                    Game Development <br />
                    Research
                  </small>
              </p>
              
              <p className='about__card'>
                  <br />
                  <BsFillBookmarkHeartFill className='about__icon'/>
                  <h5>Interests</h5>
                  <small>
                    Rock climbing <br />
                    VR/AR <br />
                    Trying to do one (1) pull-up
                  </small>
              </p>

            </div>
            {/* <p>
              Hey there, <b>I'm Nancy</b>! As a Biomedical Engineering student in my second year, I've had many opportunities to 
            </p> */}
          </div>
      </div>
    </section>
  )
}

export default About