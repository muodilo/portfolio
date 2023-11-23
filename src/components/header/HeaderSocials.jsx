import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FaSquareDribbble } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https:/linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin/></a>
      <a href="https://github.com/muodilo" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
      <a href="https:/dribble.com" target="_blank" rel="noreferrer"><FaSquareDribbble/></a>
      <a href="https:/upwork.com" target="_blank" rel="noreferrer"><SiUpwork/></a>
    </div>
  )
}

export default HeaderSocials