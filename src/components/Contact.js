import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Agrasar Sahakari</h2>
          
          <div className="info-item">
            <h3>Office Address</h3>
          </div>

          <div className="info-item">
            <span className="icon">📍</span>
            <p>Chabahil,kathmandu</p>
          </div>
          
          <div className="info-item">
            <span className="icon">📞</span>
            <p>9828722469</p>
          </div>

          <div className="operating-hours">
            <p>Operating Hours:</p>
            <p>Sunday to Friday, 10AM to 5PM</p>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Enter your subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>

          <div className="map-container">
            <div className="map">
              <div className="map-placeholder">
                <p>Map of Libali</p>
                <p className="address">Our Office: Chabahil, kathmandu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;