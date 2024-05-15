import React from 'react'
import './Header.css'
import CTA from './CTA'

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

import Spline from '@splinetool/react-spline';


const Landing = () => {
  return (
      <header id='home'>
        <div className="container header__container">
          <h5>Hello, I'm</h5>
          <h1>Nancy Zou</h1>
          <h5 className="text-light">Biomedical Engineering Undergraduate</h5>
          <CTA />

          <div className="header__socials">
            <a href="https://www.linkedin.com/in/nancyxzou" target="_blank" rel='noreferrer'><BsLinkedin/></a>
            <a href="https://github.com/nancyxyzou" target="_blank" rel='noreferrer'><BsGithub/></a>
          </div>

          <div className='me'>
            <Spline scene="https://prod.spline.design/YlqllHOL9IG7Hx5N/scene.splinecode" />

            {/* <img src={NancyProfile} alt='me'/> */}
          </div>

          <a href="#contacts" className='scroll__down'>Scroll Down</a>
        </div>
      </header>
  )
}

export default Landing