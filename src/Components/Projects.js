import React from "react";
import "../Styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "FresherPathfolio",
      description:
        "A full-stack platform where students manage their portfolios and admins oversee and verify their profiles.",
      link: "https://github.com/Ashok876/FresherPathfolio.git", // Update this
    },
    {
      title: "Portfolio",
      description:
        "Personal portfolio built with React.js to showcase my work and skills.",
      link: "https://ashok876.github.io/Portfolio/", // Update this
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="view-button">View Project</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
