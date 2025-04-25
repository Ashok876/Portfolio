import React from "react";
import "../Styles/About.css";
// Option 1: If image is in public folder
 const profileImage = `${process.env.PUBLIC_URL}/picture.jpg`;



const About = () => {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="My Profile" />
        </div>
        <div className="about-content">
          <h2 id="about-heading">About Me</h2>
          <p>
            Hi! I’m a passionate and dedicated <strong>Full-Stack Java Developer</strong> 
            with a strong foundation in both frontend and backend technologies.
          </p>
          <p>
            I specialize in building responsive and interactive web applications 
            using <strong>HTML, CSS, JavaScript, React.js</strong>. On the backend, 
            I work with <strong>Spring Boot</strong>, <strong>Hibernate</strong>, and 
            <strong>MySQL</strong> for robust and scalable server-side development.
          </p>
          <p>
            I enjoy crafting clean, efficient code and designing user-friendly interfaces
            that deliver great experiences. I'm always eager to learn new tools and 
            frameworks, and I thrive in environments where I can grow, collaborate, and 
            contribute to impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
