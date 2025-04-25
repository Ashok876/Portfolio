import React from 'react';
import '../Styles/Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "Electronics and Communication Engineering (ECE) ",
      institution: "KSRM College Of Engineering, Kadapa",
      year: 2025,
      cgpa: "B TECH CGPA: 8.84"
    },
    {
      degree: "Intermediate",
      institution: "Rao's Junior College",
      year: 2021,
      cgpa: "INTER CGPA: 8.45"
    },
    {
      degree: "SSC (Secondary School Education)",
      institution: "Icon e-Learning English School",
      year: 2019,
      cgpa: "SSC CGPA: 9.0"
    }
  ];

  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="education-header">
              <h3>{edu.degree}</h3>
              <span className="year">{edu.year}</span>
            </div>
            <p className="institution">{edu.institution}</p>
            <p className="cgpa">{edu.cgpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
