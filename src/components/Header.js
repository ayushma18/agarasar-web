import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="top-banner">
        <div className="logo-section">
          <div className="logo">
            <div className="logo-text">
              <span className="nepali-logo">अग्रसर सहकारी</span>
              <span className="tagline">Our Quest To Make Banking Better Starts Here</span>
            </div>
            <div className="logo-icon">👐💰</div>
          </div>
          
          <div className="geometric-shapes">
            <div className="shape blue"></div>
            <div className="shape white"></div>
            <div className="shape orange"></div>
          </div>
        </div>

        <div className="right-section">
          <div className="nepali-slogan">
            <p>हाम्रो नेपाल</p>
            <p>हाम्रो सहकारी</p>
            <p>हाम्रो भविष्य</p>
          </div>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <span className="icon">📱</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <span className="icon">🐦</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <span className="icon">💼</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <span className="icon">📷</span>
            </a>
          </div>
        </div>
      </div>

      <nav className="main-nav">
        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/news">NEWS & ACTIVITIES</Link></li>
          <li><Link to="/gallery">GALLERY</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
          <li><Link to="/register">REGISTER</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;