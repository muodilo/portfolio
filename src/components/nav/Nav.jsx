import React,{useState} from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import './nav.css'

function Nav() {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav ==='#'? 'active':''}><IoHomeOutline/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav ==='#about'? 'active':''}><FaRegUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav ==='#experience'? 'active':''}><BiBook/></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav ==='#services'? 'active':''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav ==='#contact'? 'active':''}><MdOutlineMessage/></a>
    </nav>
  )
}

export default Nav