import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Revolutionizing Online Assessments with AI-Powered Technology</h1>
          <p>
            Streamline, Monitor, and Evaluate with 'Asses-Sir' — A Comprehensive Platform for Conducting Online and Offline Exams.
          </p>
          <a href="#product" className="hero-button">Explore Asses-Sir Portal</a>
        </div>
      </section>

      {/* Empowering Assessments Section */}
      <section className="empower-section">
        <div className="empower-wrapper">
          <h2>Asses-Sir: Empowering Assessments Nationwide</h2>
          <p>
            Asses-Sir is a cutting-edge online assessment platform, offers a seamless experience for admins, assessors, and candidates with features such as:
          </p>
          <ul>
            <li>• AI-Driven Cheating Detection</li>
            <li>• Real-Time Monitoring</li>
            <li>• Comprehensive Reporting</li>
          </ul>
          <p>
            Designed to support NSDC Assessment Agencies, Asses-Sir facilitates transparent, credible evaluations for candidates enrolled in skill courses under Ministry of Skill Development and Entrepreneurship.
          </p>
        </div>
      </section>
      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>AI-Powered Monitoring</h3>
            <p>Utilizes advanced AI algorithms to detect and prevent cheating during assessments.</p>
          </div>
          <div className="feature-item">
            <h3>Real-Time Analytics</h3>
            <p>Provides instant feedback and detailed reports on candidate performance.</p>
          </div>
          <div className="feature-item">
            <h3>User-Friendly Interface</h3>
            <p>Designed for ease of use, ensuring a smooth experience for all users.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Join the Future of Assessments</h2>
        <p>Experience the power of Asses-Sir today. Sign up now to streamline your assessment processes!</p>
        <a href="#signup" className="cta-button">Get Started</a>
      </section>
    </>
  );
};

export default Home;

