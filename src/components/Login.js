import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiUrl } from '../config';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await fetch(apiUrl('/api/login'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accountNumber,
          password
        })
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Login successful! Redirecting...');
        // Send email notification to admin
        setTimeout(() => {
          if (data.role === 'admin') {
            navigate('/admin');
          } else {
            navigate('/');
          }
        }, 1500);
      } else {
        setError(data.message || 'Invalid credentials. Try using admin/admin');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Unable to connect to server. Please make sure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleRoleClick = (role) => {
    if (role === 'Admin') {
      setAccountNumber('admin');
      setPassword('admin');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-md w-full space-y-8">

        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium">Back to Home</span>
        </button>

        {/* Header Section */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-full mb-6">
            <span className="text-white text-3xl font-bold">अ</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your अग्रसर सहकारी account</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-4">
            <h2 className="text-xl font-bold text-white text-center">Customer Login</h2>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                  {success}
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
                  Account Number
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  placeholder="Enter your account number"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
                  <span className="ml-2 text-gray-600">Remember me</span>
                </label>
                <button className="text-blue-600 hover:text-blue-500">Forgot password?</button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <span className="flex items-center justify-center">
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Signing In...</span>
                    </>
                  ) : (
                    <>
                      <span className="mr-2">🔐</span>
                      Sign In
                    </>
                  )}
                </span>
              </button>
            </form>

            {/* Divider */}
            <div className="mt-8 mb-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or continue as</span>
                </div>
              </div>
            </div>

            {/* Role Options */}
            <div className="grid grid-cols-3 gap-4">
              <div
                className="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all duration-200"
                onClick={() => handleRoleClick('Admin')}
              >
                <div className="text-2xl mb-2">👨‍💼</div>
                <div className="text-sm font-medium text-gray-700">Admin</div>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 cursor-pointer transition-all duration-200">
                <div className="text-2xl mb-2">💰</div>
                <div className="text-sm font-medium text-gray-700">Cashier</div>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 cursor-pointer transition-all duration-200">
                <div className="text-2xl mb-2">👤</div>
                <div className="text-sm font-medium text-gray-700">Customer</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-gray-600">
            Don't have an account?
            <button
              onClick={() => navigate('/register')}
              className="ml-1 text-blue-600 hover:text-blue-500 font-medium"
            >
              Sign up here
            </button>
          </p>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>© अग्रसर सहकारी - {new Date().getFullYear()} All rights reserved</p>
          <p className="mt-1">Secure banking for a better future</p>
        </div>
      </div >
    </div >
  );
}

export default Login;