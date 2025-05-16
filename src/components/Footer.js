import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Office Address</h3>
          <ul>
            <li>
              <span className="icon">📍</span>
              <span>Libali - 6, Bhaktapur</span>
            </li>
            <li>
              <span className="icon">📞</span>
              <span>9810052055</span>
            </li>
            <li>
              <span className="icon">📧</span>
              <span>Sathisahakari@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/calendar">Annual Calendar</Link></li>
            <li><Link to="/links">Important Links</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li><Link to="/services/transfer">Fund Transfer</Link></li>
            <li><Link to="/services/saving">Saving Scheme</Link></li>
            <li><Link to="/services/loan">Loan Schemes</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Newsletter</h3>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email"
              aria-label="Newsletter email input"
            />
            <button type="button" className="subscribe-btn">Subscribe</button>
          </div>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📱</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;