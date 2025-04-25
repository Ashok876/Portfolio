import React, { useState, useEffect } from "react";
import "../Styles/Header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const toggleResumeModal = () => {
    setShowResume(!showResume);
  };

  // Optional: Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShowResume(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="Logo" className="logo-image" />
          Ashok Portfolio
        </div>
        <nav>
          <ul
            className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setIsMobile(false)}
          >
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><button className="resume-btn" onClick={toggleResumeModal}>Resume</button></li>
          </ul>
          <button className="menu-icon" onClick={() => setIsMobile(!isMobile)}>☰</button>
        </nav>
      </header>

      {/* Resume Modal */}
      {showResume && (
        <div className="resume-modal" role="dialog" aria-modal="true" aria-labelledby="resume-title">
          <div className="resume-content">
            <button className="close-btn" onClick={toggleResumeModal}>✖</button>
            <h2 id="resume-title" style={{ display: "none" }}>Resume</h2>
            <iframe
              src={`${process.env.PUBLIC_URL}/AshokResume.pdf`}
              title="Resume"
              width="100%"
              height="500px"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
