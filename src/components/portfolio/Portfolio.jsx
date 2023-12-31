import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/P1.jpg'
import IMG2 from '../../assets/P2.jpg'
import IMG3 from '../../assets/P3.jpg'
import IMG4 from '../../assets/P4.webp'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='__blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>

        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='__blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='__blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='__blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio