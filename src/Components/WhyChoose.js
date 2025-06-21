import React from 'react';
import './WhyChoose.css';

const features = [
  'Aligned with NSDC Guidelines',
  'Designed for Assessment Agencies',
  'Secure and Scalable Platform'
];

const WhyChoose = () => {
  return (
    <section id="whychoose" className="why-choose-section">
      <h2>Why Choose 'Asses-Sir'</h2>
      <div className="feature-cards">
        {features.map((text, index) => (
          <div key={index} className="feature-card">
            {text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
