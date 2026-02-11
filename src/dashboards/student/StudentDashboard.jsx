import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/dashboard.css';

const StudentDashboard = () => {
  const [showAcademics, setShowAcademics] = useState(false);
  const [showInterviews, setShowInterviews] = useState(false);
  const [showSelections, setShowSelections] = useState(false);
  const [student, setStudent] = useState({
    firstName: 'Rahul',
    lastName: 'Sharma',
    email: 'rahul.sharma@gmail.com',
    phone: '9823456789',
    prn: '2024001234',
    dob: '1999-08-20',
    gender: 'Male',
    address: '45, Kothrud, Pune',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '411038',
    course: 'PG-DAC',
    batch: '2024',
    photo: null,
    academics: {
      tenth: { board: '', school: '', year: '', cgpa: '' },
      twelfth: { board: '', school: '', year: '', cgpa: '' },
      diploma: { university: '', college: '', branch: '', year: '', cgpa: '' },
      degree: { university: '', college: '', branch: '', year: '', cgpa: '' },
      postGraduation: { university: '', college: '', course: '', year: '' }
    },
    projects: [
      {
        title: '',
        technology: '',
        description: ''
      }
    ]
  });

  const [interviews] = useState([
    {
      company: 'Infosys',
      date: '2024-01-25',
      time: '10:00 AM',
      round: 'Technical Round'
    },
    {
      company: 'Accenture',
      date: '2024-01-28',
      time: '2:00 PM',
      round: 'HR Round'
    },
    {
      company: 'TCS',
      date: '2024-02-02',
      time: '11:30 AM',
      round: 'Technical Round'
    },
    {
      company: 'Wipro',
      date: '2024-02-05',
      time: '3:00 PM',
      round: 'Managerial Round'
    }
  ]);

  const [selections] = useState([
    {
      company: 'TCS',
      position: 'Software Developer',
      package: '4.5 LPA',
      bond: '2 years',
      year: '2024',
      status: 'SELECTED'
    }
  ]);

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
    setShowInterviews(false);
    setShowSelections(false);
  };

  const handleShowInterviews = () => {
    setShowInterviews(!showInterviews);
    setShowAcademics(false);
    setShowSelections(false);
  };

  const handleShowSelections = () => {
    setShowSelections(!showSelections);
    setShowAcademics(false);
    setShowInterviews(false);
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

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...student.projects];
    updatedProjects[index][field] = value;
    setStudent({ ...student, projects: updatedProjects });
  };

  const addProject = () => {
    setStudent({
      ...student,
      projects: [...student.projects, { title: '', technology: '', description: '' }]
    });
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="profile-section">
          <div className="profile-avatar">
            <div className="avatar-circle">
              {student.photo ? (
                <img src={student.photo} alt="Profile" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
              ) : (
                `${student.firstName.charAt(0)}${student.lastName.charAt(0)}`
              )}
            </div>
          </div>
          <div className="profile-info">
            <h3>{student.firstName} {student.lastName}</h3>
            <p>{student.email}</p>
            <span className="role-badge">Student</span>
          </div>
        </div>
        
        <div className="nav-menu">
          <div 
            className={`nav-item ${!showAcademics && !showInterviews && !showSelections ? 'active' : ''}`}
            onClick={() => {
              setShowAcademics(false);
              setShowInterviews(false);
              setShowSelections(false);
            }}
          >
            <div className="nav-icon">👤</div>
            <span>My Profile</span>
          </div>
          <div 
            className={`nav-item ${showAcademics ? 'active' : ''}`}
            onClick={handleProfileUpdate}
          >
            <div className="nav-icon">✏️</div>
            <span>Update Profile</span>
          </div>
          <div 
            className={`nav-item ${showInterviews ? 'active' : ''}`}
            onClick={handleShowInterviews}
          >
            <div className="nav-icon">📅</div>
            <span>Interviews</span>
          </div>
          <div 
            className={`nav-item ${showSelections ? 'active' : ''}`}
            onClick={handleShowSelections}
          >
            <div className="nav-icon">📋</div>
            <span>Selections</span>
          </div>
          <div 
            className="nav-item"
            onClick={handleLogout}
          >
            <div className="nav-icon">🚪</div>
            <span>Logout</span>
          </div>
        </div>
      </div>

      <div className="main-content">
        {showSelections ? (
          <div className="selections-section">
            <h2>My Selections</h2>
            <div className="selections-grid">
              {selections.map((selection, index) => (
                <div key={index} className="selection-card">
                  <div className="selection-header">
                    <h3>{selection.company}</h3>
                    <span className="status-badge">{selection.status}</span>
                  </div>
                  <p><strong>Position:</strong> {selection.position}</p>
                  <p><strong>Package:</strong> {selection.package}</p>
                  <p><strong>Bond:</strong> {selection.bond}</p>
                  <p><strong>Year:</strong> {selection.year}</p>
                </div>
              ))}
            </div>
          </div>
        ) : showInterviews ? (
          <div className="interviews-section">
            <h2>Scheduled Interviews</h2>
            <div className="interviews-grid">
              {interviews.map((interview, index) => (
                <div key={index} className="interview-card">
                  <h3>{interview.company}</h3>
                  <p><strong>Date:</strong> {interview.date}</p>
                  <p><strong>Time:</strong> {interview.time}</p>
                  <p><strong>Round:</strong> {interview.round}</p>
                </div>
              ))}
            </div>
          </div>
        ) : !showAcademics ? (
          <div className="form-container">
            <h2>Profile Information</h2>
            <form className="dashboard-form">
              <div className="form-row">
                <div className="form-group">
                  <label>PRN</label>
                  <input 
                    className="form-input"
                    type="text" 
                    value={student.prn} 
                    onChange={(e) => setStudent({...student, prn: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input 
                    className="form-input"
                    type="text" 
                    value={student.firstName + ' ' + student.lastName} 
                    onChange={(e) => setStudent({...student, firstName: e.target.value.split(' ')[0], lastName: e.target.value.split(' ')[1] || ''})}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    className="form-input"
                    type="email" 
                    value={student.email} 
                    onChange={(e) => setStudent({...student, email: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input 
                    className="form-input"
                    type="text" 
                    value={student.phone} 
                    onChange={(e) => setStudent({...student, phone: e.target.value})}
                  />
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="form-container">
            <h2>Update Profile</h2>
            <form className="dashboard-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input className="form-input" value={student.firstName} onChange={(e) => setStudent({...student, firstName: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input className="form-input" value={student.lastName} onChange={(e) => setStudent({...student, lastName: e.target.value})} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input className="form-input" value={student.email} onChange={(e) => setStudent({...student, email: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input className="form-input" value={student.phone} onChange={(e) => setStudent({...student, phone: e.target.value})} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>PRN</label>
                  <input className="form-input" value={student.prn} onChange={(e) => setStudent({...student, prn: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input className="form-input" type="date" value={student.dob} onChange={(e) => setStudent({...student, dob: e.target.value})} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Gender</label>
                  <select className="form-input" value={student.gender} onChange={(e) => setStudent({...student, gender: e.target.value})}>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Course</label>
                  <input className="form-input" value={student.course} onChange={(e) => setStudent({...student, course: e.target.value})} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input className="form-input" value={student.city} onChange={(e) => setStudent({...student, city: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input className="form-input" value={student.state} onChange={(e) => setStudent({...student, state: e.target.value})} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Pincode</label>
                  <input className="form-input" value={student.pincode} onChange={(e) => setStudent({...student, pincode: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input className="form-input" value={student.address} onChange={(e) => setStudent({...student, address: e.target.value})} />
                </div>
              </div>

              <h2 style={{marginTop: '30px'}}>Academic Information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>10th Board</label>
                  <input className="form-input" value={student.academics.tenth.board} onChange={(e) => handleAcademicChange('tenth', 'board', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>10th CGPA</label>
                  <input className="form-input" value={student.academics.tenth.cgpa} onChange={(e) => handleAcademicChange('tenth', 'cgpa', e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>12th Board</label>
                  <input className="form-input" value={student.academics.twelfth.board} onChange={(e) => handleAcademicChange('twelfth', 'board', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>12th CGPA</label>
                  <input className="form-input" value={student.academics.twelfth.cgpa} onChange={(e) => handleAcademicChange('twelfth', 'cgpa', e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Degree University</label>
                  <input className="form-input" value={student.academics.degree.university} onChange={(e) => handleAcademicChange('degree', 'university', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Degree CGPA</label>
                  <input className="form-input" value={student.academics.degree.cgpa} onChange={(e) => handleAcademicChange('degree', 'cgpa', e.target.value)} />
                </div>
              </div>
              
              <button type="button" className="submit-btn" onClick={() => alert('Profile updated successfully!')}>Save Profile</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;