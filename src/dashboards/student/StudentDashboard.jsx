import React, { useState } from 'react';
import '../../styles/dashboard.css';

const StudentDashboard = () => {
  const [student, setStudent] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '9876543210',
    course: 'PG-DAC',
    batch: '2024',
    photo: null
  });

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setStudent({ ...student, photo: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileUpdate = () => {
    alert('Profile updated successfully!');
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Student Dashboard</h1>
        <p>Welcome, {student.name}</p>
      </div>

      <div className="dashboard-content">
        <div className="profile-section">
          <h2>Update Profile</h2>
          <form>
            <div className="photo-upload">
              <div className="photo-preview">
                {student.photo ? (
                  <img src={student.photo} alt="Profile" />
                ) : (
                  <div className="photo-placeholder">No Photo</div>
                )}
              </div>
              <input type="file" accept="image/*" onChange={handlePhotoUpload} />
            </div>
            
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                value={student.name} 
                onChange={(e) => setStudent({...student, name: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                value={student.email} 
                onChange={(e) => setStudent({...student, email: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label>Phone</label>
              <input 
                type="tel" 
                value={student.phone} 
                onChange={(e) => setStudent({...student, phone: e.target.value})}
              />
            </div>
          </form>
          
          <button onClick={handleProfileUpdate} className="btn btn-primary update-btn">Update Profile</button>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;