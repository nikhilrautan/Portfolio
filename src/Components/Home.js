import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import pdf from "../Resume.pdf";
import { CiCoffeeCup } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

// Simple count-up animation, no extra packages needed
const Counter = ({ end, suffix = "+" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.max(1, Math.ceil(end / 60));
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(current);
    }, 25);
    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}{suffix}</span>;
};

const stats = [
  { end: 250, label: "Problems Solved" },
  { end: 4, label: "Projects Built" },
  { end: 100, label: "Volunteers Led" },
  { end: 15, label: "Teams Mentored" },
];

const techChips = ["React", "Next.js", "Node.js", "MongoDB", "Gemini API", "Tailwind"];

const Home = () => {
  return (
    <div>
      <div className='HomePage'>

        <div className='HomeText'>
          <h1 className='fadeUp'>Hi There! <span className='wave'>👋</span></h1>
          <h1 className='fadeUp delay1'>I'M <b className='glowName'>NIKHIL RAUTAN</b></h1>
          <div className='fadeUp delay2'><Typed/></div>

          <p className='heroTagline fadeUp delay3'>
            I turn ideas into full-stack, AI-powered web apps.
          </p>

          <div className='heroButtons fadeUp delay3'>
            <Link to="/project" className='heroBtn primary'>View Projects</Link>
            <a href={pdf} download="Nikhil_Rautan_Resume.pdf" className='heroBtn outline'>
              <BsDownload/>&nbsp; Resume
            </a>
          </div>

          <div className='heroSocials fadeUp delay4'>
            <a href="https://github.com/nikhilrautan" target="_blank" rel="noreferrer" title="GitHub"><FaGithub/></a>
            <a href="https://linkedin.com/in/nikhil-rautan" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedin/></a>
            <a href="mailto:nikhilrautan1@gmail.com" title="Email"><FaEnvelope/></a>
          </div>
        </div>

        <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} glareEnable={true} glareMaxOpacity={0.15}>
          <Lottie 
            className="illustration" 
            animationData={SpaceBoy} 
            loop={true} 
          />
        </Tilt>
        
      </div>

      <div className='statsRow'>
        {stats.map((s) => (
          <div className='statCard' key={s.label}>
            <h2><Counter end={s.end} /></h2>
            <p>{s.label}</p>
          </div>
        ))}
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love the process of changing a raw idea into a website or a product 
            that impacts lives. 
            I want to do work that challenges me as a developer & work that I can 
            be proud of.<br /><br />
            I build full-stack apps with the <b>MERN</b> stack and <b>Next.js</b>, 
            from secure <b>JWT</b> authentication and REST APIs to polished React interfaces.<br />
            I also enjoy building with <b>GenAI</b>, integrating <b>Gemini/LLM APIs</b> into real products 
            like an AI interview prep platform and a coding practice site with an AI chatbot. <br /><br />
            I solve problems in <b>C++</b> (250+ LeetCode/GfG problems) and keep a strong grip on <b>DSA</b> and <b>OOP</b>.<br /><br />
            Also, I love <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>

          <div className='chipRow'>
            {techChips.map((t) => (
              <span className='chip' key={t}>{t}</span>
            ))}
          </div>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="Nikhil Rautan" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home