import React, { useState } from "react";
import CompanySidebar from "../../components/CompanySidebar";
import "../../styles/company-layout.css";

const CompanyDashboard = () => {
  const [activeSection, setActiveSection] = useState("post-job");

  /* -------------------- POST JOB -------------------- */
  const [jobForm, setJobForm] = useState({
    title: "",
    type: "Full-time",
    description: "",
    requirements: "",
    location: "",
    salary: "",
  });

  const handleChange = (e) => {
    setJobForm({
      ...jobForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Job posted (UI only)");
  };

  /* -------------------- SHORTLIST -------------------- */
  const [filters, setFilters] = useState({
    course: "",
    minPercentage: "",
    year: "",
  });

  const [students] = useState([
    { id: 1, name: "Rahul Sharma", course: "PG-DAC", percentage: 78, year: 2024 },
    { id: 2, name: "Priya Patil", course: "DBDA", percentage: 82, year: 2023 },
    { id: 3, name: "Amit Kulkarni", course: "PG-DAC", percentage: 69, year: 2024 },
  ]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const filteredStudents = students.filter((student) => {
    return (
      (filters.course === "" || student.course === filters.course) &&
      (filters.year === "" || student.year.toString() === filters.year) &&
      (filters.minPercentage === "" ||
        student.percentage >= parseInt(filters.minPercentage))
    );
  });

  /* -------------------- SCHEDULE INTERVIEW -------------------- */

  const [interviewForm, setInterviewForm] = useState({
    studentId: "",
    interviewDate: "",
    mode: "Online",
    link: "",
    location: "",
  });

  const handleInterviewChange = (e) => {
    setInterviewForm({
      ...interviewForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleInterviewSubmit = (e) => {
  e.preventDefault();

  const newInterview = {
    id: Date.now(),
    ...interviewForm,
  };

  setScheduledInterviews([...scheduledInterviews, newInterview]);

  setInterviewForm({
    studentId: "",
    interviewDate: "",
    mode: "Online",
    link: "",
    location: "",
  });

  alert("Interview Scheduled Successfully");
};


const handleDeleteInterview = (id) => {
  const updatedList = scheduledInterviews.filter(
    (interview) => interview.id !== id
  );

  setScheduledInterviews(updatedList);
};


const [scheduledInterviews, setScheduledInterviews] = useState([]);

  return (
    <div className="company-dashboard">
      <CompanySidebar active={activeSection} onChange={setActiveSection} />

      <main className="company-main">
        <header className="company-header">
          <h1>Company Dashboard</h1>
          <button className="logout-btn">Logout</button>
        </header>

        <section className="company-content">

          {/* POST JOB */}
          {activeSection === "post-job" && (
            <>
              <h2>Post New Job</h2>
              <form className="job-form" onSubmit={handleSubmit}>
                <input name="title" placeholder="Job Title" value={jobForm.title} onChange={handleChange} required />
                <select name="type" value={jobForm.type} onChange={handleChange}>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Internship">Internship</option>
                </select>
                <textarea name="description" placeholder="Job Description" value={jobForm.description} onChange={handleChange} required />
                <input name="requirements" placeholder="Requirements" value={jobForm.requirements} onChange={handleChange} required />
                <input name="location" placeholder="Location" value={jobForm.location} onChange={handleChange} />
                <input name="salary" placeholder="Salary Range" value={jobForm.salary} onChange={handleChange} />
                <button type="submit" className="submit-btn">Post Job</button>
              </form>
            </>
          )}

          {/* SHORTLIST */}
          {activeSection === "shortlist" && (
            <>
              <h2>Shortlist Students</h2>

              <div className="filter-section">
                <div className="filter-row">
                  <select name="course" value={filters.course} onChange={handleFilterChange}>
                    <option value="">Select Course</option>
                    <option value="PG-DAC">PG-DAC</option>
                    <option value="DBDA">DBDA</option>
                  </select>

                  <input
                    type="number"
                    placeholder="Minimum Percentage"
                    name="minPercentage"
                    value={filters.minPercentage}
                    onChange={handleFilterChange}
                  />

                  <select name="year" value={filters.year} onChange={handleFilterChange}>
                    <option value="">Passout Year</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                  </select>
                </div>
              </div>

              <div className="students-list">
                {filteredStudents.map((student) => (
                  <div key={student.id} className="student-card">
                    <h4>{student.name}</h4>
                    <p>Course: {student.course}</p>
                    <p>Percentage: {student.percentage}%</p>
                    <button
                      className="schedule-btn"
                      onClick={() => {
                        setInterviewForm({ ...interviewForm, studentId: student.id });
                        setActiveSection("schedule");
                      }}
                    >
                      Schedule Interview
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* SCHEDULE */}
         {activeSection === "schedule" && (
  <>
    <h2>Schedule Interview</h2>

    <form className="job-form" onSubmit={handleInterviewSubmit}>
      <input
        type="number"
        name="studentId"
        placeholder="Student ID"
        value={interviewForm.studentId}
        onChange={handleInterviewChange}
        required
      />

      <input
        type="datetime-local"
        name="interviewDate"
        value={interviewForm.interviewDate}
        onChange={handleInterviewChange}
        required
      />

      <select
        name="mode"
        value={interviewForm.mode}
        onChange={handleInterviewChange}
      >
        <option value="Online">Online</option>
        <option value="Offline">Offline</option>
      </select>

      {interviewForm.mode === "Online" && (
        <input
          type="url"
          name="link"
          placeholder="Meeting Link"
          value={interviewForm.link}
          onChange={handleInterviewChange}
        />
      )}

      {interviewForm.mode === "Offline" && (
        <input
          type="text"
          name="location"
          placeholder="Interview Location"
          value={interviewForm.location}
          onChange={handleInterviewChange}
        />
      )}

      <button type="submit" className="submit-btn">
        Schedule Interview
      </button>
    </form>

    {/* INTERVIEW LIST */}
    {scheduledInterviews.length > 0 && (
      <div style={{ marginTop: "30px" }}>
        <h3>Scheduled Interviews</h3>
        {scheduledInterviews.map((interview) => (
          <div key={interview.id} className="student-card">
            <p><strong>Student ID:</strong> {interview.studentId}</p>
            <p><strong>Date:</strong> {interview.interviewDate}</p>
            <p><strong>Mode:</strong> {interview.mode}</p>
            {interview.mode === "Online" && (
              <p><strong>Link:</strong> {interview.link}</p>
            )}
            {interview.mode === "Offline" && (
              <p><strong>Location:</strong> {interview.location}</p>
            )}

             <button
    className="schedule-btn"
    style={{ background: "#dc3545", marginTop: "10px" }}
    onClick={() => handleDeleteInterview(interview.id)}
  >
    Delete
  </button>
          </div>
        ))}
      </div>
    )}
  </>
)}


        </section>
      </main>
    </div>
  );
};

export default CompanyDashboard;
