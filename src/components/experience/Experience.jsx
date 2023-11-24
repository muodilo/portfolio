import React from 'react'
import './experience.css'
import { HiBadgeCheck } from "react-icons/hi";

function Experience() {
  return (
    <section id='experience'>
      <h5>The skills I have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experince__frontend">
          <h3>Frontend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
          </div>
        </div>
        {/* end of frontend */}
        <div className="experince__backend">
        <h3>Backend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>MongoDb</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Experience