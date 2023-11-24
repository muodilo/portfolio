import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/odilo.jpg'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Odilo Murindahabi</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials/>
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        
        <a href="#contact" className='scroll__down'>scroll Down</a>
      </div>
    </header>
  )
}

export default Header