import React from 'react';
import '../styles/Admissions.css';

const Admissions = () => {
  return (
    <div className="admissions-container">
      <h1>Admissions</h1>
      <div className="admissions-section">
        <h2>How to Apply</h2>
        <p>To apply for admission, please follow these steps:</p>
        <ol>
          <li>Complete the online application form.</li>
          <li>Submit required documents including transcripts and identification.</li>
          <li>Attend an admission interview if required.</li>
          <li>Receive the admission decision.</li>
        </ol>
      </div>
      <div className="admissions-section">
        <h2>Admission Requirements</h2>
        <p>Applicants must meet the following requirements:</p>
        <ul>
          <li>Completed application form</li>
          <li>Proof of previous education</li>
          <li>Recommendation letters</li>
        </ul>
      </div>
      <div className="admissions-section">
        <h2>Contact Admissions Office</h2>
        <p>Email: admissions@school.com</p>
        <p>Phone: +123-456-7891</p>
        <p>Location: 456 Admission Ave, Education City</p>
      </div>
    </div>
  );
};

export default Admissions;
