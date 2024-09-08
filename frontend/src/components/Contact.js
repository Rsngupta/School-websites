import React from 'react';
import '../styles/Contact.css';  // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-info">Email: contact@residentialschool.com</p>
      <p className="contact-info">Phone: +123-456-7890</p>
      <p className="contact-info">Address: 123 Main Street, Residential City, 12345</p>
      <p className="contact-message">
        Feel free to reach out to us for any inquiries regarding admissions or school programs.
      </p>
    </div>
  );
};

export default Contact;
