import React from 'react'
import './services.css'
import { PiCheckBold } from "react-icons/pi";

function Service() {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <PiCheckBold className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <PiCheckBold className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <PiCheckBold className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <PiCheckBold className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <PiCheckBold className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
          </ul>
        </article>
        {/* end of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web development</h3>
          </div>
          <ul className="service__list">
            <li>
              <PiCheckBold className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <PiCheckBold className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <PiCheckBold className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <PiCheckBold className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <PiCheckBold className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
          </ul>
        </article>
        {/* end of Web development */}
        <article className="service">
          <div className="service__head">
            <h3>Content creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <PiCheckBold className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <PiCheckBold className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <PiCheckBold className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <PiCheckBold className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <PiCheckBold className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
          </ul>
        </article>
        {/* end of CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Service
