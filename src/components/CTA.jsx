import React from 'react'
import Resume from '../assets/F24Resume.pdf'

const CTA = () => {

  return (
    
    <div className="cta">
        <a href = {Resume} target = "_blank" className='btn'>Download Pdf</a>
        {/* <a href="https://docs.google.com/document/d/1qRmF5-7zFDUQTAbEbbGYi7VcBOwQ3qi5YG1MzHt18fk/edit?usp=sharing" className='btn'>View CV</a> */}
        <a href="#contacts" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA