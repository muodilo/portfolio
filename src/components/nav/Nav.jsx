import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import './nav.css'

function Nav() {
  return (
    <nav>
      <a href="#"><IoHomeOutline/></a>
      <a href="#about"><FaRegUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><MdOutlineMessage/></a>
    </nav>
  )
}

export default Nav