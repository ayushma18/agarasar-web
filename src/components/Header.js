import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu} 
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
          <li><Link to="/about" onClick={closeMenu}>ABOUT US</Link></li>
          <li><Link to="/services" onClick={closeMenu}>SERVICES</Link></li>
          <li><Link to="/news" onClick={closeMenu}>NEWS & ACTIVITIES</Link></li>
          <li><Link to="/gallery" onClick={closeMenu}>GALLERY</Link></li>
          <li><Link to="/login" onClick={closeMenu}>LOGIN</Link></li>
          <li><Link to="/register" onClick={closeMenu}>REGISTER</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>CONTACT US</Link></li>
        </ul>
      </nav>
      {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </header>
  );
}

export default Header;