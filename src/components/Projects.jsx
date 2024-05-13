import React from 'react'
import './Projects.css'
// import IMG1 from '../../assets/img5.jpg'
// import IMG2 from '../../assets/img2.png'
// import IMG3 from '../../assets/img3.png'
// import IMG4 from '../../assets/img4.png'

const Myprojects = () => {
  return (
    <section id='projects'>

      <h5>What have I made?</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                {/* <img src={IMG1} alt="" /> */}
            </div>
            <h3>This Website</h3>
            <small className='text-light'>Javascript | ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Myprojects