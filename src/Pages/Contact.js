import React from 'react';
import './Contact.css';
import contactImg from '../assets/contact-illustration.png';
import contactImage from '../assets/contact-illustration.png';


const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Let’s Connect For Questions Or Demo? Reach Out To Us!</h2>
      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="E-mail" required />
          <input type="tel" placeholder="Phone" required />
          <textarea placeholder="Enter your message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-image">
          <img src={contactImg} alt="Contact Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Contact;

