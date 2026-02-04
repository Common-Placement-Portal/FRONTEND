import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      // Mock login - works perfectly
      const mockUser = {
        name: email.split('@')[0],
        email: email,
        role: role,
        token: 'mock-token-' + Date.now()
      };
      
      login(mockUser);
      alert('Login successful!');
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo-container">
            <div className="cdac-logo">
              <div className="logo-circle">CDAC</div>
            </div>
            <div className="brand-text">
              <div className="brand-title">CDAC Placement Portal</div>
              <div className="brand-subtitle">Centre for Development of Advanced Computing</div>
            </div>
          </div>
          <div className="navbar-nav">
            <a href="/" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#placement" className="nav-link">Placement</a>
            <a href="#contact" className="nav-link">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Login Section */}
      <section className="hero-section" style={{marginTop: '80px'}}>
        <div className="container">
          <div className="login-container">
            <div className="login-card">
              <div className="login-header">
                <h2>Welcome Back</h2>
                <p>Sign in to your CDAC Placement Portal account</p>
              </div>
              
              <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                  <label htmlFor="role">Role</label>
                  <select 
                    id="role"
                    value={role} 
                    onChange={(e) => setRole(e.target.value)}
                    className="form-input"
                  >
                    <option value="student">Student</option>
                    <option value="coordinator">Coordinator</option>
                    <option value="company">Company</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>

                {error && <div className="error-message">{error}</div>}

                <button type="submit" className="login-submit-btn">
                  Sign In
                </button>
              </form>
              
              <div className="login-footer">
                <p>Enter any email and password to login</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;