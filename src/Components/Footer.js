import React from "react";
import "../Styles/Footer.css";
import "font-awesome/css/font-awesome.min.css"; // Import FontAwesome icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-social">
        <a
          href="https://www.linkedin.com/in/k-ashok-1675a327b"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fa fa-linkedin"></i> LinkedIn
        </a>
        <a
          href="https://github.com/Ashok876"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fa fa-github"></i> GitHub
        </a>
      </div>
      <p className="footer-text">
        © {new Date().getFullYear()} Kuntumalle Ashok. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
