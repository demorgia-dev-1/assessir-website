import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    console.log("About page mounted");
  }, []);

  return (
    <div className="about-page">
      <section className="about-header">
        <h1>About Us</h1>
        <p>
          Asses-Sir is a cutting-edge online assessment platform that simplifies and streamlines the process of conducting online and offline exams. 
          With advanced AI features, real-time monitoring, and a user-friendly interface, we are transforming how assessments are conducted across India.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To empower Training and Assessment Agencies with secure, scalable, and smart technology for evaluating skills with credibility and transparency.
        </p>
      </section>

      <section className="about-highlights">
        <h2>Why Asses-Sir?</h2>
        <ul>
          <li>NSDC-aligned assessment workflow</li>
          <li>AI-powered cheating detection</li>
          <li>Real-time exam proctoring</li>
          <li>Detailed batch-wise reports</li>
          <li>Offline & online exam capability</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
