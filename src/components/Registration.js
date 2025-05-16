import React, { useState } from 'react';
import './Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    accountNumber: 'For Bank Use Only',
    dateOfBirth: '',
    email: '',
    mobileNumber: '',
    citizenshipNumber: '',
    citizenshipIssueDate: '',
    gender: '',
    nationality: '',
    accountType: '',
    profession: '',
    userImage: null,
    citizenshipImage: null,
    province: '',
    district: '',
    localMunicipality: '',
    wardNo: '',
    tole: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        
        {/* Customer Details Section */}
        <div className="form-section">
          <h3>Customer Details</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="middleName">Middle Name</label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                placeholder="Enter your middle name"
                value={formData.middleName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="accountNumber">Account Number</label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Enter mobile number"
                value={formData.mobileNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="citizenshipNumber">Citizenship Number</label>
              <input
                type="text"
                id="citizenshipNumber"
                name="citizenshipNumber"
                placeholder="Enter your citizen no"
                value={formData.citizenshipNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="citizenshipIssueDate">Citizenship Issue Date</label>
              <input
                type="date"
                id="citizenshipIssueDate"
                name="citizenshipIssueDate"
                value={formData.citizenshipIssueDate}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="nationality">Nationality</label>
              <select
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
              >
                <option value="">Your Nationality</option>
                <option value="nepali">Nepali</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="accountType">Account Type</label>
              <select
                id="accountType"
                name="accountType"
                value={formData.accountType}
                onChange={handleInputChange}
              >
                <option value="">Select type</option>
                <option value="savings">Savings</option>
                <option value="current">Current</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="profession">Profession</label>
              <input
                type="text"
                id="profession"
                name="profession"
                placeholder="Your Profession..."
                value={formData.profession}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="userImage">Upload Your Image</label>
              <input
                type="file"
                id="userImage"
                name="userImage"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="citizenshipImage">Upload Your Citizenship Photo</label>
              <input
                type="file"
                id="citizenshipImage"
                name="citizenshipImage"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>

        {/* Address Details Section */}
        <div className="form-section">
          <h3>Address Details</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="province">Province</label>
              <select
                id="province"
                name="province"
                value={formData.province}
                onChange={handleInputChange}
              >
                <option value="">Select Province</option>
                {/* Add province options */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="district">District</label>
              <select
                id="district"
                name="district"
                value={formData.district}
                onChange={handleInputChange}
              >
                <option value="">Select District</option>
                {/* Add district options */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="localMunicipality">Local Municipality</label>
              <select
                id="localMunicipality"
                name="localMunicipality"
                value={formData.localMunicipality}
                onChange={handleInputChange}
              >
                <option value="">Select Local Municipality</option>
                {/* Add municipality options */}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="wardNo">Ward No.</label>
              <input
                type="text"
                id="wardNo"
                name="wardNo"
                placeholder="Enter Ward No."
                value={formData.wardNo}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="tole">Tole</label>
              <input
                type="text"
                id="tole"
                name="tole"
                placeholder="Enter Tole"
                value={formData.tole}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;