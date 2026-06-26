import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiUrl } from '../config';

const Registration = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Add vertical spacing between sections for clarity
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await fetch(apiUrl('/api/register'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Registration successful! Our team will contact you soon. Redirecting...');
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('Unable to connect to server. Please make sure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="register">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 pt-48 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Back to Home</span>
          </button>
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-full mb-6">
              <span className="text-white text-3xl font-bold">अ</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Account Registration</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join अग्रसर सहकारी and become part of our growing community. Fill out the form below to create your account.
            </p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Error and Success Messages */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg">
                <p className="font-medium">❌ Error</p>
                <p className="text-sm mt-1">{error}</p>
              </div>
            )}

            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-lg">
                <p className="font-medium">✅ Success</p>
                <p className="text-sm mt-1">{success}</p>
              </div>
            )}

            {/* Customer Details Section */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-emerald-500 px-8 py-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <span className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                    👤
                  </span>
                  Customer Details
                </h2>
              </div>

              <div className="p-8 space-y-6">
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      id="middleName"
                      name="middleName"
                      placeholder="Enter your middle name"
                      value={formData.middleName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      required
                    />
                  </div>
                </div>

                {/* Account & Date Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
                      Account Number
                    </label>
                    <input
                      type="text"
                      id="accountNumber"
                      name="accountNumber"
                      value={formData.accountNumber}
                      disabled
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      required
                    />
                  </div>
                </div>

                {/* Contact & Citizenship Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      placeholder="Enter mobile number"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="citizenshipNumber" className="block text-sm font-medium text-gray-700">
                      Citizenship Number *
                    </label>
                    <input
                      type="text"
                      id="citizenshipNumber"
                      name="citizenshipNumber"
                      placeholder="Enter citizenship number"
                      value={formData.citizenshipNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="citizenshipIssueDate" className="block text-sm font-medium text-gray-700">
                      Citizenship Issue Date *
                    </label>
                    <input
                      type="date"
                      id="citizenshipIssueDate"
                      name="citizenshipIssueDate"
                      value={formData.citizenshipIssueDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      required
                    />
                  </div>
                </div>

                {/* Personal Details Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                      Gender *
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      required
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
                      Nationality *
                    </label>
                    <select
                      id="nationality"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      required
                    >
                      <option value="">Select nationality</option>
                      <option value="nepali">Nepali</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">
                      Account Type *
                    </label>
                    <select
                      id="accountType"
                      name="accountType"
                      value={formData.accountType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      required
                    >
                      <option value="">Select account type</option>
                      <option value="savings">Savings Account</option>
                      <option value="current">Current Account</option>
                    </select>
                  </div>
                </div>

                {/* Profession & Files Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="profession" className="block text-sm font-medium text-gray-700">
                      Profession
                    </label>
                    <input
                      type="text"
                      id="profession"
                      name="profession"
                      placeholder="Your profession"
                      value={formData.profession}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="userImage" className="block text-sm font-medium text-gray-700">
                      Profile Photo
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="userImage"
                        name="userImage"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <span className="mr-2">📷</span>
                        Choose photo
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="citizenshipImage" className="block text-sm font-medium text-gray-700">
                      Citizenship Photo
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="citizenshipImage"
                        name="citizenshipImage"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <span className="mr-2">📄</span>
                        Choose document
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Details Section */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-emerald-500 px-8 py-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <span className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                    📍
                  </span>
                  Address Details
                </h2>
              </div>

              <div className="p-8 space-y-6">
                {/* Location Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                      Province *
                    </label>
                    <select
                      id="province"
                      name="province"
                      value={formData.province}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      required
                    >
                      <option value="">Select Province</option>
                      <option value="province1">Province 1</option>
                      <option value="province2">Province 2</option>
                      <option value="bagmati">Bagmati Province</option>
                      <option value="gandaki">Gandaki Province</option>
                      <option value="lumbini">Lumbini Province</option>
                      <option value="karnali">Karnali Province</option>
                      <option value="sudurpaschim">Sudurpaschim Province</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="district" className="block text-sm font-medium text-gray-700">
                      District *
                    </label>
                    <select
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      required
                    >
                      <option value="">Select District</option>
                      <option value="kathmandu">Kathmandu</option>
                      <option value="lalitpur">Lalitpur</option>
                      <option value="bhaktapur">Bhaktapur</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="localMunicipality" className="block text-sm font-medium text-gray-700">
                      Local Municipality *
                    </label>
                    <select
                      id="localMunicipality"
                      name="localMunicipality"
                      value={formData.localMunicipality}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      required
                    >
                      <option value="">Select Municipality</option>
                      <option value="kathmandu-metro">Kathmandu Metropolitan City</option>
                      <option value="lalitpur-metro">Lalitpur Metropolitan City</option>
                    </select>
                  </div>
                </div>

                {/* Ward & Tole Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="wardNo" className="block text-sm font-medium text-gray-700">
                      Ward No. *
                    </label>
                    <input
                      type="text"
                      id="wardNo"
                      name="wardNo"
                      placeholder="Enter Ward No."
                      value={formData.wardNo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="tole" className="block text-sm font-medium text-gray-700">
                      Tole *
                    </label>
                    <input
                      type="text"
                      id="tole"
                      name="tole"
                      placeholder="Enter Tole"
                      value={formData.tole}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                disabled={loading}
                className={`bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white font-bold py-4 px-12 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <span className="flex items-center">
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Registering...</span>
                    </>
                  ) : (
                    <>
                      <span className="mr-2">✅</span>
                      Register Account
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>

          {/* Footer Note */}
          <div className="text-center mt-12 p-6 bg-gray-50 rounded-xl">
            <p className="text-gray-600">
              By registering, you agree to our terms and conditions.
              <span className="text-blue-600 hover:underline cursor-pointer"> Learn more</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;