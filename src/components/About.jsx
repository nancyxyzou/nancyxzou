import React from 'react'
import './About.css'
// import myImage from '../../assets/my-image2.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <p className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Education</h5>
                  <small>Honours BSc Biomedical Engineering <br /> <i>University of Waterloo</i></small>
              </p>

              <p className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Frontend Development</li>
                      <li>Game Development</li>
                    </ul>
                  </small>
              </p>
              
              <p className='about__card'>
                  <BsFillBookmarkHeartFill className='about__icon'/>
                  <h5>For Fun</h5>
                  <small>
                    Rock climbing <br />
                    R&B music <br />
                    trying to do a pull-up
                  </small>
              </p>

            </div>
            <p>
                personalized description
            </p>
          </div>
      </div>
    </section>
  )
}

export default About