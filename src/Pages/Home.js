import React from 'react';
import './Home.css';
import WhyChoose from '../Components/WhyChoose';
import { motion } from 'framer-motion';
import Evaluation from '../Components/Evaluation';
import ImageSlider from '../Components/ImageSlider'; 
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero">
  <div className="hero-grid">
    {/* Image Slider Left */}
    <div className="hero-image-slider">
      <ImageSlider />
    </div>

    {/* Hero Text Right */}
    <div className="hero-content">
      <h1>Revolutionizing Online Assessments with AI-Powered Technology</h1>
      <p>
        Streamline, Monitor, and Evaluate with 'Asses-Sir' — A Comprehensive Platform for Conducting Online and Offline Exams.
      </p>
      <a href="#features" className="hero-button">Explore Asses-Sir Portal</a>
    </div>
  </div>
</section>

      {/* Empowering Assessments Section */}
      <section id="empowering-section" className="empowering-section">
        <h2 className="empowering-heading">Asses-Sir: Empowering Assessments Nationwide</h2>
        <div className="empowering-wrapper">
          <div className="empowering-content">
            <p>
              Asses-Sir is a cutting-edge online assessment platform, offering a seamless experience for admins, assessors,
              and candidates with features such as:
            </p>
            <ul>
              <li><strong>• AI-Driven Cheating Detection</strong></li>
              <li><strong>• Real-Time Monitoring</strong></li>
              <li><strong>• Comprehensive Reporting</strong></li>
            </ul>
            <p>
              Designed to support <strong>NSDC Assessment Agencies</strong>, Asses-Sir facilitates transparent, credible
              evaluations for candidates enrolled in skill courses under
              <strong> Ministry of Skill Development and Entrepreneurship</strong>.
            </p>
          </div>
          <div className="empowering-image">
            <img src={require('../Assets/education2.png')} alt="Empowering Illustration" />
          </div>
        </div>
      </section>


      <WhyChoose />
      {/* Features Section */}
      <section id="features" className="features">
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
      <section id="evaluation" className="evaluation-section">
        <Evaluation />
      </section>
     {/*contact information*/}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions or need support? We're here to help.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="cta">
        <h2>Join the Future of Assessments</h2>
        <p>Experience the power of Asses-Sir today. Sign up now to streamline your assessment processes!</p>
        <a href="#signup" className="cta-button">Get Started</a>
      </section>
    </>
    
  );
};
export default Home;

