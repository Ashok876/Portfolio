import React from 'react';
import '../Styles/Certificates.css';

const Certificates = () => {
  const certificates = [
    "Python Foundation Certificate by Infosys Springboard",
    "Data Science for Beginners by NASSCOM",
    "Certificate for NPTEL 'Design and Analysis of VLSI Subsystems'"
  ];

  return (
    <section className="certificates-section">
      <h2> Certificates</h2>
      <ul className="certificates-list">
        {certificates.map((cert, index) => (
          <li key={index} className="certificate-item">
            {cert}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certificates;
