import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // For demo purposes, using hardcoded credentials
    if (accountNumber === 'admin' && password === 'admin') {
      navigate('/admin');
    } else {
      setError('Invalid credentials. Try using admin/admin');
    }
  };

  const handleRoleClick = (role) => {
    setError('');
    if (role === 'Admin') {
      setAccountNumber('admin');
      setPassword('admin');
      navigate('/admin');
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <div className="logo">
          <div className="logo-text">
            <span className="nepali-logo">अग्रसर सहकारी</span>
            <span className="tagline">Our Quest To Make Banking Better Starts Here</span>
          </div>
          <div className="logo-icon">👐💰</div>
        </div>
      </header>

      <main className="login-main">
        <div className="login-form-container">
          <h2>Customer Login</h2>
          
          <form className="login-form" onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}
            <div className="form-group">
              <label htmlFor="accountNumber">Account Number</label>
              <input
                type="text"
                id="accountNumber"
                placeholder="02023780313"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          <div className="continue-as">
            <div className="divider">
              <span>continue as</span>
            </div>
            
            <div className="role-icons">
              <div className="role-option">
                <span className="role-icon">👨‍💼</span>
                <span className="role-label">Admin</span>
              </div>
              <div className="role-option">
                <span className="role-icon">💰</span>
                <span className="role-label">Cashier</span>
              </div>
              <div className="role-option" onClick={() => handleRoleClick('Admin')}>
                <span className="role-icon">👤</span>
                <span className="role-label">Customer</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="login-footer">
        <p>© Agarasar Sahakari - {new Date().getFullYear()} All rights reserved</p>
      </footer>
    </div>
  );
}

export default Login;