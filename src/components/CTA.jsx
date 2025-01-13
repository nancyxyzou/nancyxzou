import React from 'react'
import Resume from '../assets/W25Resume.pdf'

const CTA = () => {

  return (
    <div className="cta">
        <a href = {Resume} target = "_blank" rel="noopener noreferrer" className='btn'>Download PDF</a>
        <a href="#contacts" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA