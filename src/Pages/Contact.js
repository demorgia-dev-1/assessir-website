import React from 'react';
import './Contact.css';
import contactImg from '../Assets/contact-illustration.png';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <img src={contactImg} alt="Contact Illustration" />
        </div>
        <div className="contact-right">
          <h1>Contact Us</h1>
          <p>Have questions or need support? We're here to help.</p>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;


