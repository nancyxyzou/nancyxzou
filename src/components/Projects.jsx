import React from 'react'
import './Projects.css'
import personalsite from '../assets/personalsite.png'
import bcigaming from '../assets/bcigaming.png'
import dREMt from '../assets/dREMt.png'
import medinform from '../assets/medinform.png'
import osdsite from '../assets/osdsite.png'

const Myprojects = () => {
  return (
    <section id='projects'>

      <h5>What have I made?</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={personalsite} alt="" />
            </div>
            <h3>This Website</h3>
            <small className='text-light'>Javascript | ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/nancyxyzou/nancyxzou" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={osdsite} alt="" />
            </div>
            <h3>OpenSeadragon Viewer</h3>
            <small className='text-light'>Javascript | ReactJs | OpenSeadragon | Azure Cosmos DB</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/nancyxyzou/OSDViewerSite" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://nancyxyzou.github.io/nancyxzou/osdsite" target="_blank" rel='noreferrer' className='btn'>Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={bcigaming} alt="" />
            </div>
            <h3>MindFire</h3>
            <small className='text-light'>C# | Unity - 2024 IEEE GameSIG Top 10 Finalist</small>
            {/* style={{display: 'flex', flexDirection: 'column'}} */}
            <div className="portfolio__item-cta" >
              <a href="https://youtu.be/yWy99nkmm4I" target="_blank" rel='noreferrer' className='btn'>Demo</a>
              <a href="https://youtu.be/eM4WI_Grpx0" target="_blank" rel='noreferrer' className='btn'>IEEE GameSIG Pitch</a>
            </div>
        </article>
        
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={dREMt} alt="" />
            </div>
            <h3>dREMt</h3>
            <small className='text-light'>Javascript | React | GPT-3.5 Turbo API - TechNova .Tech Category Winner</small>
            {/* style={{display: 'flex', flexDirection: 'column'}} */}
            <div className="portfolio__item-cta">
              <a href="https://github.com/yaxinw04/dREMt" target="_blank" rel='noreferrer' className='btn'>GitHub</a>
              <a href="https://devpost.com/software/dremt" target="_blank" rel='noreferrer' className='btn'>DevPost</a>
            </div>
        </article>
        
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={medinform} alt="" />
            </div>
            <h3>Medi+Form</h3>
            <small className='text-light'>Javascript | HTML/CSS</small>
            {/* style={{display: 'flex', flexDirection: 'column'}} */}
            <div className="portfolio__item-cta">
              <a href="https://github.com/yaxinw04/HTGteam20" target="_blank" rel='noreferrer' className='btn'>GitHub</a>
              <a href="https://youtu.be/Ff2PQJ91fHE" target="_blank" rel='noreferrer' className='btn'>Autofill Demo</a>
            </div>
            <div>
              <a href="https://youtu.be/Q2erFr7FShs" target="_blank" rel='noreferrer' className='btn'>Jargon Translator Demo</a>
            </div>
        </article>
      </div>

      
    </section>
  )
}

export default Myprojects