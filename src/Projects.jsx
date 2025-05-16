import React from 'react';
import studyBuddaiImage from '../src/assets/studyBuddai.png';

function Projects() {
  return (
    <div className="projectCard">
      <h5>Most Recent Project</h5>
      <div className="projectsContent">
        <div className="textContent">
          <h4>Study BuddAI</h4>
          <p>
            Our team built an app that lets users upload their PDF study notes. 
            The app then creates quizzes based on the content, helping users review and test their knowledge.
          </p>
          <a href="https://github.com/emerrafter1/study-buddAI-BE" target="_blank" className='link'><h6>Backend Tech Stack:</h6></a>
            <li>Typescript</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>Gemini API</li>
            <li>Jest</li>
            <br></br>
            <a href="https://github.com/nimashakaranahala/study-buddAI-FE" target="_blank" className='link'><h6>Frontend Tech Stack:</h6></a>
            <li>React</li>
            <li>Vite</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Lottie</li>
            <li>Bootstrap</li>
            <br></br>
            <h6>Authentication & Hosting:</h6>
            <li>AWS: EC2 & Amplify</li>
            <li>Clerk</li>
        </div>
        <img src={studyBuddaiImage} alt="Study BuddAI project screenshot" className="projectImage" />
      </div>
    </div>
  );
}

export default Projects;
