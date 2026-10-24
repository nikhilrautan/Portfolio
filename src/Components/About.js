import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, I'm <b>Nikhil Rautan</b> from Uttarakhand, India.
            I'm a <b>Full Stack (MERN) developer</b> and a final year student pursuing <b>B.Tech in Computer Science Engineering</b> (2023 – 2027). <br/><br/>
            I build and deploy web apps with <b>React.js, Next.js, Node.js, Express.js and MongoDB</b>,
            with a focus on RESTful APIs, <b>JWT authentication</b>, role-based authorization and
            <b> AI/LLM API integration</b>. My projects include <b>PrepPilot</b>, an AI interview preparation platform,
            and a <b>LeetCode Clone</b> with an AI chatbot, both live in the projects section.<br/><br/>
            I have a strong foundation in <b>DSA and OOP</b> and have solved <b>250+ LeetCode/GfG problems</b>.
            Outside of coding, I'm the <b>Vice President of NSS</b>, where I lead 100+ volunteers, and I
            coordinated the <b>NASA Space Apps Challenge</b>, mentoring 15+ teams.<br/><br/>
            I am <b>open</b> to internships, collaborations and work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Next' />
        <Skills skill='Redux' />
        <Skills skill='Tailwind' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Postman' />
        <Skills skill='Cloudinary' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='GenAI'/>
      </div>
    </>
  )
}

export default About