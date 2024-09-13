// Contact.jsx
import React from 'react';
import { FaLinkedin, FaFacebookSquare, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <div className="contact-card">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>
                <FaEnvelope className="contact-icon" />
                <span>ranjithmarimuthu21@gmail.com</span>
              </p>
              <p>
                <FaPhone className="contact-icon" />
                <span>+91 9786399441</span>
              </p>
            </div>
            <div className="social-links">
              <h3>Connect with Me</h3>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/ranjith-m-2188ba328/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookSquare />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4"></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
