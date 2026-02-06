import React, { useState } from 'react';
import '../../styles/dashboard.css';

const CoordinatorDashboard = () => {
  const [activeSection, setActiveSection] = useState('addStudent');

  return (
    <div className="dashboard-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-avatar">
            <div className="avatar-circle">
              C
            </div>
          </div>
          <div className="profile-info">
            <h3>Coordinator</h3>
            <p>coordinator@cdac.in</p>
            <span className="role-badge">Coordinator</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="nav-menu">
          <div 
            className={`nav-item ${activeSection === 'addStudent' ? 'active' : ''}`}
            onClick={() => setActiveSection('addStudent')}
          >
            <div className="nav-icon">👨🎓</div>
            <span>Add Student</span>
          </div>
          
          <div 
            className={`nav-item ${activeSection === 'addCompany' ? 'active' : ''}`}
            onClick={() => setActiveSection('addCompany')}
          >
            <div className="nav-icon">🏢</div>
            <span>Add Company</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {activeSection === 'addStudent' && (
          <div className="form-container">
            <h2>Add Student</h2>
            <form className="dashboard-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" className="form-input" placeholder="Enter first name" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" className="form-input" placeholder="Enter last name" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-input" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" className="form-input" placeholder="Enter phone number" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>PRN</label>
                  <input type="text" className="form-input" placeholder="Enter PRN" />
                </div>
                <div className="form-group">
                  <label>Course</label>
                  <select className="form-input">
                    <option>Select Course</option>
                    <option>PG-DAC</option>
                    <option>PG-DBDA</option>
                    <option>PG-DITISS</option>
                  </select>
                </div>
              </div>
              
              <button type="submit" className="submit-btn">Add Student</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoordinatorDashboard;