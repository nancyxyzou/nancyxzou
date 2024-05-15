import React from 'react'
import Resume from '../assets/F24Resume.pdf'

const CTA = () => {

  return (
    
    <div className="cta">
        <a href = {Resume} target = "_blank" className='btn'>Download Pdf</a>
        <a href="#contacts" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA