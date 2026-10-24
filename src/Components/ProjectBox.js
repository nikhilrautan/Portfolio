import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";

// Keys must match the projectName used in Projects.js exactly.
// Leave github/website as "" to hide that button.
const projects = {
  "PrepPilot": {
    desc: "A full-stack Generative AI app that analyzes a resume (PDF) against a job description and generates a match score, skill-gap analysis, tailored interview questions and a preparation plan. Uses the Gemini API with Zod validation for structured output, Puppeteer for ATS-friendly resume PDFs, and secure JWT auth with httpOnly cookies and token blacklisting.",
    github: "https://github.com/nikhilrautan/PrepPilot",
    website: "YOUR_PREPPILOT_DEPLOYED_LINK"
  },
  "LeetCode Clone": {
    desc: "A MERN coding practice platform with problem listings, difficulty/tag filters, an in-browser code editor, JWT auth and role-based access (user/admin). Includes Cloudinary-powered solution videos and an AI chatbot that answers doubts on problems and concepts.",
    github: "https://github.com/nikhilrautan/leetcode-clone",
    website: "YOUR_LEETCODE_CLONE_DEPLOYED_LINK"
  },
  "Swiggy Clone": {
    desc: "A responsive food delivery website inspired by Swiggy, built to practice React.js, reusable components, API integration, routing, and responsive UI development.",
    github: "https://github.com/nikhilrautan/swiggy-clone",
    website: "YOUR_SWIGGY_CLONE_DEPLOYED_LINK"
  },
  "Wildfire Tracker": {
    desc: "A responsive React web application that helps users track active wildfire incidents using location-based data and APIs. Focuses on API integration, dynamic data rendering, and responsive UI design.",
    github: "https://github.com/nikhilrautan/wildfire-tracker",
    website: "YOUR_WILDFIRE_TRACKER_DEPLOYED_LINK"
  }
};

const isValid = (link) => Boolean(link) && !link.startsWith("YOUR_");

const ProjectBox = ({projectPhoto, projectName}) => {
  const project = projects[projectName] || {desc: "", github: "", website: ""};

  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt={projectName} /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {project.desc}
            <br />

            {isValid(project.github) && (
              <a href={project.github} target='_blank' rel='noreferrer'>
                <button className='projectbtn'><FaGithub/> Github</button>
              </a>
            )}

            {isValid(project.website) && (
              <a href={project.website} target='_blank' rel='noreferrer'>
                <button className='projectbtn'><CgFileDocument/> Demo</button>
              </a>
            )}
        </div>
    </div>
  )
}

export default ProjectBox