import React, { useState } from 'react';
import '../../styles/dashboard.css';

const StudentDashboard = () => {
  const [showAcademics, setShowAcademics] = useState(false);
  const [showInterviews, setShowInterviews] = useState(false);
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
  };

  const handleShowInterviews = () => {
    setShowInterviews(!showInterviews);
    setShowAcademics(false);
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

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      setShowAcademics(false);
      setShowInterviews(false);
      alert('Logged out successfully!');
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Student Dashboard</h1>
        <p>Welcome, {student.firstName} {student.lastName}</p>
        <div className="header-buttons">
          <button onClick={handleProfileUpdate} className="update-profile-btn">
            Update Profile
          </button>
          <button onClick={handleShowInterviews} className="interviews-btn">
            Scheduled Interviews
          </button>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>

      <div className="dashboard-content">
        {showInterviews ? (
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
          <div className="profile-section">
            <h2>Profile Information</h2>
            <form>
              <div className="photo-upload">
                <div className="photo-preview">
                  {student.photo ? (
                    <img src={student.photo} alt="Profile" />
                  ) : (
                    <div className="photo-placeholder">{student.firstName.charAt(0)}{student.lastName.charAt(0)}</div>
                  )}
                </div>
                <button type="button" className="change-photo-btn" onClick={() => document.getElementById('photoInput').click()}>Change Photo</button>
                <input id="photoInput" type="file" accept="image/*" onChange={handlePhotoUpload} style={{display: 'none'}} />
              </div>
              
              <div className="form-group">
                <label>PRN</label>
                <input 
                  type="text" 
                  value={student.prn} 
                  onChange={(e) => setStudent({...student, prn: e.target.value})}
                />
              </div>
              
              <div className="form-group">
                <label>Name</label>
                <input 
                  type="text" 
                  value={student.firstName + ' ' + student.lastName} 
                  onChange={(e) => setStudent({...student, firstName: e.target.value.split(' ')[0], lastName: e.target.value.split(' ')[1] || ''})}
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
            </form>
          </div>
        ) : (
          <div className="academics-section">
            <div className="photo-upload">
              <div className="photo-preview">
                {student.photo ? (
                  <img src={student.photo} alt="Profile" />
                ) : (
                  <div className="photo-placeholder">{student.firstName.charAt(0)}{student.lastName.charAt(0)}</div>
                )}
              </div>
              <button type="button" className="change-photo-btn" onClick={() => document.getElementById('photoInput2').click()}>Change Photo</button>
              <input id="photoInput2" type="file" accept="image/*" onChange={handlePhotoUpload} style={{display: 'none'}} />
            </div>
            
            <h2>Personal Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>First Name</label>
                <input value={student.firstName} onChange={(e) => setStudent({...student, firstName: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input value={student.lastName} onChange={(e) => setStudent({...student, lastName: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input value={student.email} onChange={(e) => setStudent({...student, email: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input value={student.phone} onChange={(e) => setStudent({...student, phone: e.target.value})} />
              </div>
              <div className="form-group">
                <label>PRN</label>
                <input value={student.prn} onChange={(e) => setStudent({...student, prn: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input type="date" value={student.dob} onChange={(e) => setStudent({...student, dob: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select value={student.gender} onChange={(e) => setStudent({...student, gender: e.target.value})}>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label>Address</label>
              <textarea value={student.address} onChange={(e) => setStudent({...student, address: e.target.value})} />
            </div>
            
            <div className="form-grid">
              <div className="form-group">
                <label>City</label>
                <input value={student.city} onChange={(e) => setStudent({...student, city: e.target.value})} />
              </div>
              <div className="form-group">
                <label>State</label>
                <input value={student.state} onChange={(e) => setStudent({...student, state: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Pincode</label>
                <input value={student.pincode} onChange={(e) => setStudent({...student, pincode: e.target.value})} />
              </div>
            </div>

            <h2>Academic Information</h2>
            
            <h3>10th Class</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Board</label>
                <input value={student.academics.tenth.board} onChange={(e) => handleAcademicChange('tenth', 'board', e.target.value)} />
              </div>
              <div className="form-group">
                <label>School</label>
                <input value={student.academics.tenth.school} onChange={(e) => handleAcademicChange('tenth', 'school', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Year of Completion</label>
                <input value={student.academics.tenth.year} onChange={(e) => handleAcademicChange('tenth', 'year', e.target.value)} />
              </div>
              <div className="form-group">
                <label>CGPA</label>
                <input value={student.academics.tenth.cgpa} onChange={(e) => handleAcademicChange('tenth', 'cgpa', e.target.value)} />
              </div>
            </div>

            <h3>12th Class</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Board</label>
                <input value={student.academics.twelfth.board} onChange={(e) => handleAcademicChange('twelfth', 'board', e.target.value)} />
              </div>
              <div className="form-group">
                <label>School</label>
                <input value={student.academics.twelfth.school} onChange={(e) => handleAcademicChange('twelfth', 'school', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Year of Completion</label>
                <input value={student.academics.twelfth.year} onChange={(e) => handleAcademicChange('twelfth', 'year', e.target.value)} />
              </div>
              <div className="form-group">
                <label>CGPA</label>
                <input value={student.academics.twelfth.cgpa} onChange={(e) => handleAcademicChange('twelfth', 'cgpa', e.target.value)} />
              </div>
            </div>

            <h3>Diploma</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>University</label>
                <input value={student.academics.diploma.university} onChange={(e) => handleAcademicChange('diploma', 'university', e.target.value)} />
              </div>
              <div className="form-group">
                <label>College</label>
                <input value={student.academics.diploma.college} onChange={(e) => handleAcademicChange('diploma', 'college', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Branch</label>
                <input value={student.academics.diploma.branch} onChange={(e) => handleAcademicChange('diploma', 'branch', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Year of Completion</label>
                <input value={student.academics.diploma.year} onChange={(e) => handleAcademicChange('diploma', 'year', e.target.value)} />
              </div>
              <div className="form-group">
                <label>CGPA</label>
                <input value={student.academics.diploma.cgpa} onChange={(e) => handleAcademicChange('diploma', 'cgpa', e.target.value)} />
              </div>
            </div>

            <h3>Degree</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>University</label>
                <input value={student.academics.degree.university} onChange={(e) => handleAcademicChange('degree', 'university', e.target.value)} />
              </div>
              <div className="form-group">
                <label>College</label>
                <input value={student.academics.degree.college} onChange={(e) => handleAcademicChange('degree', 'college', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Branch</label>
                <input value={student.academics.degree.branch} onChange={(e) => handleAcademicChange('degree', 'branch', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Year of Completion</label>
                <input value={student.academics.degree.year} onChange={(e) => handleAcademicChange('degree', 'year', e.target.value)} />
              </div>
              <div className="form-group">
                <label>CGPA</label>
                <input value={student.academics.degree.cgpa} onChange={(e) => handleAcademicChange('degree', 'cgpa', e.target.value)} />
              </div>
            </div>

            <h3>Post Graduation</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>University</label>
                <input value={student.academics.postGraduation.university} onChange={(e) => handleAcademicChange('postGraduation', 'university', e.target.value)} />
              </div>
              <div className="form-group">
                <label>College</label>
                <input value={student.academics.postGraduation.college} onChange={(e) => handleAcademicChange('postGraduation', 'college', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Course</label>
                <input value={student.academics.postGraduation.course} onChange={(e) => handleAcademicChange('postGraduation', 'course', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Year of Completion</label>
                <input value={student.academics.postGraduation.year} onChange={(e) => handleAcademicChange('postGraduation', 'year', e.target.value)} />
              </div>
            </div>

            <h2>Project</h2>
            {student.projects.map((project, index) => (
              <div key={index} className="project-section">
                <h3>Project {index + 1}</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Title</label>
                    <input value={project.title} onChange={(e) => handleProjectChange(index, 'title', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Technology Used</label>
                    <input value={project.technology} onChange={(e) => handleProjectChange(index, 'technology', e.target.value)} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea value={project.description} onChange={(e) => handleProjectChange(index, 'description', e.target.value)} />
                </div>
              </div>
            ))}
            
            <button className="save-academics-btn" onClick={() => alert('Profile updated successfully!')}>Save Profile</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;