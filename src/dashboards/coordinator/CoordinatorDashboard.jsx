import React from 'react';
import '../../styles/dashboard.css';

const CoordinatorDashboard = () => {
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
          <div className="nav-item">
            <div className="nav-icon">👨🎓</div>
            <span>Add Student</span>
          </div>
          
          <div className="nav-item">
            <div className="nav-icon">🏢</div>
            <span>Add Company</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
      </div>
    </div>
  );
};

export default CoordinatorDashboard;