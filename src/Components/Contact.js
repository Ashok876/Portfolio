import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-card">
        <p><strong>Name:</strong> Ashok Kuntumalle</p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:kuntimallaashok@gmail.com">kuntimallaashok@gmail.com</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
