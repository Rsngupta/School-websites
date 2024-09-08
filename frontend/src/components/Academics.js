import React from 'react';
import '../styles/Academics.css';

const Academics = () => {
  return (
    <div className="academics-container">
      <h1>Academics</h1>
      <div className="academic-section">
        <h2>Our Curriculum</h2>
        <p>We offer a comprehensive curriculum that ensures students receive a well-rounded education. Our programs include:</p>
        <ul>
          <li>Mathematics and Science</li>
          <li>Language Arts</li>
          <li>Social Studies</li>
          <li>Physical Education</li>
        </ul>
      </div>
      <div className="academic-section">
        <h2>Faculty</h2>
        <p>Our dedicated faculty members are highly qualified and experienced in their respective fields. They are committed to providing the best education and support for our students.</p>
      </div>
      <div className="academic-section">
        <h2>Extracurricular Activities</h2>
        <p>We believe in the holistic development of our students. Therefore, we offer a range of extracurricular activities including:</p>
        <ul>
          <li>Sports</li>
          <li>Music and Arts</li>
          <li>Debate and Public Speaking</li>
        </ul>
      </div>
    </div>
  );
};

export default Academics;
