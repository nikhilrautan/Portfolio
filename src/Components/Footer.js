import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Nikhil Rautan</h4>
      <h4>Copyright &copy; 2026 NR</h4>
      <div className='footerLinks'>
        <a href="https://github.com/nikhilrautan" target='_blank'rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/nikhil-rautan/" target='_blank'rel="noreferrer"><FaLinkedin/></a>
        <a href='mailTo:nikhilrautan1@gmail.com' target='_blank'rel="noreferrer"><GrMail/></a>
        <a href="https://leetcode.com/u/nikhil_rautan/" target="_blank"rel="noreferrer"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer