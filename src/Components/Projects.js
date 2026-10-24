import React from 'react';
import ProjectBox from './ProjectBox';
import LeetCodeImage from '../images/LeetCodeImage.png';
import PrepPilotImage from '../images/PrepPilotImage.png';
import SwiggyImage from '../images/SwiggyImage.png';
import WildfireImage from '../images/WildfireImage.png';


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={PrepPilotImage} projectName="PrepPilot" />
        <ProjectBox projectPhoto={LeetCodeImage} projectName="LeetCode Clone" />
        <ProjectBox projectPhoto={SwiggyImage} projectName="Swiggy Clone" />
        <ProjectBox projectPhoto={WildfireImage} projectName="Wildfire Tracker" />
      </div>

    </div>
  )
}

export default Projects