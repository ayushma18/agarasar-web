import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('intro');

  const renderStars = (count) => {
    return Array(5).fill(0).map((_, index) => (
      <span key={index} className={`star ${index < count ? 'filled' : 'outline'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="about-page">
      <h1 className="page-title">ABOUT US</h1>

      <section className="founders-message">
        <div className="message-block">
          <h2>Message from the founders</h2>
          <div className="mascot">
            <div className="mascot-image"></div>
            <div className="mascot-text">
              <p>FABFL</p>
              <p>Founders</p>
            </div>
          </div>
          <p>
            We extend our heartfelt gratitude to all our valued members and partners. 
            Our organization is dedicated to utilizing local resources effectively, 
            ensuring good governance, and providing quality financial services to our 
            community. We strive to create sustainable growth and prosperity for all 
            our stakeholders.
          </p>
        </div>

        <div className="info-tabs">
          <div className="tab-buttons">
            <button 
              className={activeTab === 'intro' ? 'active' : ''}
              onClick={() => setActiveTab('intro')}
            >
              Intro
            </button>
            <button 
              className={activeTab === 'vision' ? 'active' : ''}
              onClick={() => setActiveTab('vision')}
            >
              Vision
            </button>
            <button 
              className={activeTab === 'goals' ? 'active' : ''}
              onClick={() => setActiveTab('goals')}
            >
              Goals
            </button>
          </div>
          <div className="tab-content">
            {activeTab === 'intro' && (
              <div>
                <h3>Introduction</h3>
                <p>
                  Agrasar sahakari was established on October 7th, 2022, by Computer 
                  Department 5th-semester students. Our aim is to promote economic 
                  development and self-reliance among our members while fostering a 
                  culture of financial responsibility and growth.
                </p>
              </div>
            )}
            {activeTab === 'vision' && (
              <div>
                <h3>Vision</h3>
                <p>
                  Our vision is to become a leading cooperative institution that 
                  empowers our community through financial inclusion and sustainable growth.
                </p>
              </div>
            )}
            {activeTab === 'goals' && (
              <div>
                <h3>Goals</h3>
                <p>
                  We aim to provide accessible financial services, promote savings 
                  culture, and contribute to the economic well-being of our members 
                  through innovative solutions and community-focused initiatives.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="founders-section">
        <h2>The Founders</h2>
        <p className="subtitle">Message from the founders and the Board of Directors</p>
        
        <div className="founders-grid">
          <div className="founder-card">
            <div className="founder-image"></div>
            <h3>Anjan Prajapati</h3>
            <p>
              Committed to excellence in education and providing unwavering support 
              to our community through innovative financial solutions.
            </p>
            <div className="rating">{renderStars(4)}</div>
          </div>

          <div className="founder-card">
            <div className="founder-image"></div>
            <h3>Dipen Shrestha</h3>
            <p>
              Dedicated to fostering growth and prosperity in our community through 
              sustainable financial practices and member-focused services.
            </p>
            <div className="rating">{renderStars(3)}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;