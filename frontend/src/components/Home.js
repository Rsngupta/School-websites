import React, { useEffect, useState } from 'react';
import '../styles/Home.css';  // Import the CSS file

const Home = () => {
  const [schoolInfo, setSchoolInfo] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/api/school-info')
      .then((response) => response.json())
      .then((data) => setSchoolInfo(data));
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to {schoolInfo.name || "SSVM Residential School"}</h1>
      <p className="home-description">{schoolInfo.description || "We aim to shape the leaders of tomorrow."}</p>
      <p className="home-established">Established: {schoolInfo.established || "Year of establishment"}</p>
    </div>
  );
};

export default Home;
