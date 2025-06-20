import React, { useEffect } from 'react';
import './WhyChoose.css';
import { motion } from 'framer-motion';

const WhyChoose = () => {
  useEffect(() => {
    console.log("WhyChoose component mounted");
  }, []);

  return (
    <motion.section 
      className="why-choose"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Why Choose 'Asses-Sir'</h2>
      <ul>
        <li>Aligned with NSDC Guidelines</li>
        <li>Designed for Assessment Agencies</li>
        <li>Secure and Scalable Platform</li>
      </ul>
    </motion.section>
  );
};

export default WhyChoose;
