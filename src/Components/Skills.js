import React from 'react';
import '../Styles/Skills.css';

const Skills = () => {
  const frontendSkills = [ 'HTML', 'CSS', 'JavaScript','React.js'];
  const backendSkills = ['Spring Boot','Hibernate','MySQL','Java','Python (Basics)'];
  const tools = ['GitHub', 'Eclipse','Spring Tool Suite (STS)','Postman', 'VS Code'];

  return (
    <section className="skills-section">
      <h2>Skills</h2>

      {/* Frontend Section */}
      <div className="skill-category">
        <h3>Frontend</h3>
        <div className="skills-container">
          {frontendSkills.map(skill => (
            <div className="skill-card" key={skill}>{skill}</div>
          ))}
        </div>
      </div>

      {/* Backend Section */}
      <div className="skill-category">
        <h3>Backend</h3>
        <div className="skills-container">
          {backendSkills.map(skill => (
            <div className="skill-card" key={skill}>{skill}</div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="skill-category">
        <h3>Tools</h3>
        <div className="skills-container">
          {tools.map(skill => (
            <div className="skill-card" key={skill}>{skill}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
