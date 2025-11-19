
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";
import { FaGithub } from "react-icons/fa";

import studyBuddai from "../src/assets/studyBuddai.png";
import NCNews from "../src/assets/NC-NEWS.png";
import titanic from "../src/assets/titanicdatabaseproject.png";
import mongodb from "../src/assets/uploaded data into mongodb.png";

const projects = [
  {
    src: studyBuddai,
    alt: "Study Buddai",
    title: "Study Buddai",
    description: (
      <div style={{ textAlign: "left" }}>
        <p>
          <strong>Study BuddAI</strong> is a web app that allows users to upload their PDF study materials and automatically convert them into interactive quizzes for effective revision.
        </p>

        <h5>Key Features:</h5>
        <ul>
          <li><strong>PDF Upload:</strong> Users can upload their study material in PDF format.</li>
          <li><strong>Quiz Generation:</strong> Automatically converts uploaded materials into multiple-choice questions.</li>
          <li><strong>Revision Tracking:</strong> Track progress and performance for each quiz.</li>
          <li><strong>Responsive Design:</strong> Works seamlessly across desktop and mobile devices.</li>
        </ul>

        <h5>
          Backend Tech Stack:{" "}
          <a
            href="https://github.com/emerrafter1/study-buddAI-BE"
            target="_blank"
            rel="noopener noreferrer"
            className="github-icon"
          >
            <FaGithub size={28} />
          </a>
        </h5>
        <ul>
          <li>TypeScript</li>
          <li>MySQL</li>
          <li>Jest</li>
          <li>Gemini API</li>
        </ul>

        <h5>
          Frontend Tech Stack:{" "}
           <a
            href="https://github.com/nimashakaranahala/study-buddAI-FE"
            target="_blank"
            rel="noopener noreferrer"
            className="github-icon"
          >
            <FaGithub size={28} />
          </a>
        </h5>
        <ul>
          <li>TypeScript</li>
          <li>HTML & CSS</li>
          <li>Bootstrap</li>
          <li>Axios</li>
          <li>React + Vite</li>
          <li>Lottie</li>
        </ul>

        <h5>Hosting & Authentication:</h5>
        <ul>
          <li>AWS EC2 & Amplify</li>
          <li>Clerk</li>
        </ul>
      </div>
    )
  },
  {
    src: NCNews,
    alt: "NC News",
    title: "NC News",
    description: (
      <div style={{ textAlign: "left" }}>
        <p>
          <strong>NC News</strong> is an interactive news platform that lets users explore a curated collection of articles. Users can easily browse content and filter stories by most recent, most voted, or by topic.
        </p>

        <h5>Key Features:</h5>
        <ul>
          <li><strong>Article Filtering:</strong> Sort articles by date, votes, or topic category.</li>
          <li><strong>Voting System:</strong> Like or dislike articles to reflect user opinions and influence rankings.</li>
          <li><strong>Commenting Functionality:</strong> Post and delete comments for deeper engagement with articles.</li>
          <li><strong>Responsive Design:</strong> Mobile-first approach ensures a seamless experience across all devices.</li>
        </ul>

        <h5>
          Backend Tech Stack:{" "}
          <a
            href="https://github.com/joshnajoshy/nc_news_api"
            target="_blank"
            rel="noopener noreferrer"
            className="github-icon"
          >
            <FaGithub size={28} />
          </a>

        </h5>
        <ul>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>PSQL</li>
          <li>Jest</li>
        </ul>

        <h5>
          Frontend Tech Stack:{" "}
          <a
            href="https://github.com/joshnajoshy/nc-news"
            target="_blank"
            rel="noopener noreferrer"
            className="github-icon"
          >
            <FaGithub size={28} />
          </a>
        </h5>
        <ul>
          <li>React</li>
          <li>Vite</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
        </ul>

        <h5>Hosting:</h5>
        <ul>
          <li>Supabase</li>
          <li>Render</li>
        </ul>
      </div>
    )
    ,
  },
  {
    src: titanic,
    alt: "Titanic Data",
    title: "Titanic Data",
    description: (
      <div style={{ textAlign: "left" }}>
        <p>
          <strong>Titanic Data Analysis</strong> is a data project where I explored and analyzed the Titanic dataset from Seaborn using Python.
        </p>

        <h5>Key Features:</h5>
        <ul>
          <li><strong>Data Cleaning:</strong> Handled missing values and prepared the dataset for analysis.</li>
          <li><strong>Data Analysis:</strong> Explored patterns and trends in survival rates by passenger class, age, and gender.</li>
          <li><strong>Visualization:</strong> Created graphs and charts using Pandas and Seaborn to present insights clearly.</li>
        </ul>

        <h5>
          Tech Stack:{" "}
          <a
            href="https://github.com/joshnajoshy/Skills-Sprint-Day-1-Python-for-Data-"
            target="_blank"
            rel="noopener noreferrer"
            className="github-icon"
          >
            <FaGithub size={28} />
          </a>
        </h5>
        <ul>
          <li>Python</li>
          <li>Pandas</li>
          <li>NumPy</li>
          <li>Seaborn</li>
        </ul>
      </div>
    )
  },
  {
    src: mongodb,
    alt: "Smartwatch Data",
    title: "Smartwatch Data Cleaning & Upload to MongoDB on AWS EC2",
    description: (
      <div style={{ textAlign: "left" }}>
        <p>
          <strong>Smartwatch Data Cleaning & Upload to MongoDB</strong> is a data project where I processed raw smartwatch data, cleaned it, and uploaded it to a cloud MongoDB database hosted on AWS EC2.
        </p>

        <h5>Key Features:</h5>
        <ul>
          <li><strong>Data Cleaning:</strong> Handled missing or null values using Pandas, replacing acceptable values with the mean or dropping them if necessary.</li>
          <li><strong>Data Analysis:</strong> Explored trends and patterns in the smartwatch data and visualised insights with Seaborn.</li>
          <li><strong>Data Export & Upload:</strong> Exported cleaned data to a CSV file and uploaded it to a MongoDB database on AWS EC2 using Python.</li>
          <li><strong>Cloud Integration:</strong> Gained hands-on experience with AWS tools like EC2 and S3, understanding how cloud systems and databases work together.</li>
        </ul>

        <h5>
          Tech Stack:{" "}
          <a
            href="https://github.com/joshnajoshy/Skills-Sprint-Databases-and-Cloud/tree/main/final_project_databases_and_cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="github-icon"
          >
            <FaGithub size={28} />
          </a>
        </h5>
        <ul>
          <li>Python</li>
          <li>Pandas</li>
          <li>Seaborn</li>
          <li>MongoDB</li>
          <li>AWS EC2 & S3</li>
        </ul>
      </div>
    )
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.src} alt={project.alt} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="project-modal"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.src}
              alt={selectedProject.alt}
              className="project-modal-image"
            />

            <p className="project-modal-description">{selectedProject.description}</p>

            <button
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}


