import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {FaLaptopCode} from 'react-icons/fa'
import {GoChecklist} from 'react-icons/go'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  
  return (  
    <nav>
       <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
       <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><BiUser/></a>
       <a href="#timeline" onClick={() => setActiveNav('#timeline')} className={activeNav === '#timeline' ? 'active': ''}><FaLaptopCode/></a>
       <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active': ''}><GoChecklist/></a>
       <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active': ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav