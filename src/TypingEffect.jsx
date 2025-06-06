import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./index.css";
import profileImage from "../src/assets/joshna.jpeg"; 

function TypingEffect() {
  return (
    <div className="typing-wrapper">
      <div className="typing-left">
        <h5 className="typing-subtitle">Hello, my name is Joshna ...</h5>
        <h1 className="animate-typing">an aspiring Junior Software Developer</h1>
        <div className="social-buttons">
          <a
            href="https://www.linkedin.com/in/joshna-joshy-a724b11b6/"
            target="_blank"
            className="social-button linkedin-button"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="https://github.com/joshnajoshy"
            target="_blank"
            className="social-button github-button"
          >
            <FaGithub size={28} />
          </a>
        </div>
      </div>

      <div className="typing-right">
        <img src={profileImage} alt="Joshna" className="profile-image" />
      </div>
    </div>
  );
}

export default TypingEffect;



