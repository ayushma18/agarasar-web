import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to Agrasar Sahakari</h1>
            <p>Growing Your Wealth, Nurturing Your Future</p>
          </div>
          <div className="coin-jar">
            {/* Coin jar image with plant will be added via CSS */}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <h2>Welcome to Agrasar Sahakari</h2>
          <div className="welcome-content">
            <div className="founders-message">
              <h3>Message from the founders</h3>
              <p>
                Welcome to our cooperative, where we are dedicated to fostering financial growth
                and community development. Our commitment to excellence and member satisfaction
                drives us to provide innovative financial solutions that help our members thrive.
              </p>
            </div>
            <div className="info-tabs">
              <div className="tab-buttons">
                <button className="active">Intro</button>
                <button>Vision</button>
                <button>Goals</button>
              </div>
              <div className="tab-content">
                <h4>Introduction</h4>
                <p>
                  We are a modern cooperative institution focused on providing comprehensive
                  financial services to our community. Our innovative approach and commitment
                  to excellence make us your ideal financial partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <div className="container">
          <div className="stat-card orange">
            <div className="stat-icon">📈</div>
            <h3>60000+</h3>
            <p>Incoming Money</p>
          </div>
          <div className="stat-card teal">
            <div className="stat-icon">💰</div>
            <h3>10000+</h3>
            <p>Outgoing Money</p>
          </div>
          <div className="stat-card purple">
            <div className="stat-icon">👥</div>
            <h3>100+</h3>
            <p>Total Users</p>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="featured-services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">🏦</div>
              <h4>Saving Accounts</h4>
              <p>Secure your future with our competitive savings options.</p>
            </div>
            <div className="service-item">
              <div className="service-icon">💳</div>
              <h4>Checking Accounts</h4>
              <p>Easy access to your funds with modern banking features.</p>
            </div>
            <div className="service-item">
              <div className="service-icon">💵</div>
              <h4>Loans</h4>
              <p>Flexible lending solutions for your financial needs.</p>
            </div>
            <div className="service-item">
              <div className="service-icon">↔️</div>
              <h4>Fund Transfers</h4>
              <p>Quick and secure money transfer services.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;