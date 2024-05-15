import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'

const Footer = () => {
  return (
    <footer>
        <a href="#footer" className='footer__logo'>NANCY ZOU</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#timeline">Experiences</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/nancyxzou"><BsLinkedin/></a>
          <a href="https://github.com/nancyxyzou"><BsGithub/></a>
          <a href="mailto:nxyzou@uwaterloo.ca"><MdOutlineEmail/></a>
        </div>

        <div className="footer__copyright">
            <small>Original Template Copyright &copy; 2023 Thakshila Bandara. All Rights Reserved. <br />
            Modifications and Additional Content Copyright &copy; 2024 Nancy Zou. All Rights Reserved. </small>
        </div>
    </footer>
  )
}

export default Footer