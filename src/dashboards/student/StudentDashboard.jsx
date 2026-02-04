import React, { useState } from 'react';
import '../../styles/dashboard.css';

const StudentDashboard = () => {
  const [showAcademics, setShowAcademics] = useState(false);
  const [student, setStudent] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '9876543210',
    course: 'PG-DAC',
    batch: '2024',
    photo: null,
    academics: {
      tenth: { year: '', percentage: '', board: '' },
      twelfth: { year: '', percentage: '', board: '' },
      diploma: { year: '', percentage: '', university: '' },
      graduation: { year: '', percentage: '', university: '' },
      postGraduation: { year: '', percentage: '', university: '' }
    }
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
    setShowAcademics(!showAcademics);
  };

  const handleAcademicChange = (level, field, value) => {
    setStudent({
      ...student,
      academics: {
        ...student.academics,
        [level]: {
          ...student.academics[level],
          [field]: value
        }
      }
    });
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Student Dashboard</h1>
        <p>Welcome, {student.name}</p>
        <button onClick={handleProfileUpdate} className="update-profile-btn">
          Update Profile
        </button>
      </div>

      <div className="dashboard-content">
        {!showAcademics ? (
          <div className="profile-section">
            <h2>Profile Information</h2>
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
          </div>
        ) : (
          <div className="academics-section">
            <h2>Academic Details</h2>
            
            <div className="academic-level">
              <h3>10th Standard</h3>
              <div className="academic-fields">
                <input placeholder="Year" value={student.academics.tenth.year} onChange={(e) => handleAcademicChange('tenth', 'year', e.target.value)} />
                <input placeholder="Percentage" value={student.academics.tenth.percentage} onChange={(e) => handleAcademicChange('tenth', 'percentage', e.target.value)} />
                <input placeholder="Board" value={student.academics.tenth.board} onChange={(e) => handleAcademicChange('tenth', 'board', e.target.value)} />
              </div>
            </div>
            
            <div className="academic-level">
              <h3>12th Standard</h3>
              <div className="academic-fields">
                <input placeholder="Year" value={student.academics.twelfth.year} onChange={(e) => handleAcademicChange('twelfth', 'year', e.target.value)} />
                <input placeholder="Percentage" value={student.academics.twelfth.percentage} onChange={(e) => handleAcademicChange('twelfth', 'percentage', e.target.value)} />
                <input placeholder="Board" value={student.academics.twelfth.board} onChange={(e) => handleAcademicChange('twelfth', 'board', e.target.value)} />
              </div>
            </div>
            
            <div className="academic-level">
              <h3>Diploma</h3>
              <div className="academic-fields">
                <input placeholder="Year" value={student.academics.diploma.year} onChange={(e) => handleAcademicChange('diploma', 'year', e.target.value)} />
                <input placeholder="Percentage" value={student.academics.diploma.percentage} onChange={(e) => handleAcademicChange('diploma', 'percentage', e.target.value)} />
                <input placeholder="University" value={student.academics.diploma.university} onChange={(e) => handleAcademicChange('diploma', 'university', e.target.value)} />
              </div>
            </div>
            
            <div className="academic-level">
              <h3>Graduation</h3>
              <div className="academic-fields">
                <input placeholder="Year" value={student.academics.graduation.year} onChange={(e) => handleAcademicChange('graduation', 'year', e.target.value)} />
                <input placeholder="Percentage" value={student.academics.graduation.percentage} onChange={(e) => handleAcademicChange('graduation', 'percentage', e.target.value)} />
                <input placeholder="University" value={student.academics.graduation.university} onChange={(e) => handleAcademicChange('graduation', 'university', e.target.value)} />
              </div>
            </div>
            
            <div className="academic-level">
              <h3>Post Graduation</h3>
              <div className="academic-fields">
                <input placeholder="Year" value={student.academics.postGraduation.year} onChange={(e) => handleAcademicChange('postGraduation', 'year', e.target.value)} />
                <input placeholder="Percentage" value={student.academics.postGraduation.percentage} onChange={(e) => handleAcademicChange('postGraduation', 'percentage', e.target.value)} />
                <input placeholder="University" value={student.academics.postGraduation.university} onChange={(e) => handleAcademicChange('postGraduation', 'university', e.target.value)} />
              </div>
            </div>
            
            <button className="save-academics-btn" onClick={() => alert('Academic details saved!')}>Save Academic Details</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;