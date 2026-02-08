import React, { useState } from "react";
import CompanySidebar from "../../components/CompanySidebar";
import "../../styles/company-layout.css";

const CompanyDashboard = () => {
  const [activeSection, setActiveSection] = useState("post-job");


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
    console.log("Job Data:", jobForm);
    alert("Job posted (UI only)");
  };



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





  return (
    <div className="company-dashboard">
      <CompanySidebar
        active={activeSection}
        onChange={setActiveSection}
      />

      <main className="company-main">
        <header className="company-header">
          <h1>Company Dashboard</h1>
          <button className="logout-btn">Logout</button>
        </header>

        <section className="company-content">
          {activeSection === "post-job" && (
            <>
              <h2>Post New Job</h2>

              <form className="job-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="title"
                  placeholder="Job Title"
                  value={jobForm.title}
                  onChange={handleChange}
                  required
                />

                <select
                  name="type"
                  value={jobForm.type}
                  onChange={handleChange}
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Internship">Internship</option>
                </select>

                <textarea
                  name="description"
                  placeholder="Job Description"
                  value={jobForm.description}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="requirements"
                  placeholder="Requirements"
                  value={jobForm.requirements}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={jobForm.location}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="salary"
                  placeholder="Salary Range"
                  value={jobForm.salary}
                  onChange={handleChange}
                />

                <button type="submit" className="submit-btn">
                  Post Job
                </button>
              </form>
            </>
          )}

          {activeSection === "shortlist" && (
  <>
    <h2>Shortlist Students</h2>

    <div className="filter-section">
      <div className="filter-row">
         <select
                    name="course"
                    value={filters.course}
                    onChange={handleFilterChange}
                  >
          <option value="">Select Course</option>
          <option value="PG-DAC">PG-DAC</option>
          <option value="DBDA">DBDA</option>
          <option value="DITISS">DITISS</option>
        </select>

        <input
          type="number"
          placeholder="Minimum Percentage"
          name="minPercentage"
          value={filters.minPercentage}
          onChange={handleFilterChange}
        />

        <select
                    name="year"
                    value={filters.year}
                    onChange={handleFilterChange}
                  >
          <option value="">Passout Year</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>

        <button className="search-btn">Search</button>
      </div>
    </div>

    <div className="students-list">
            

      {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => (
                    <div key={student.id} className="student-card">
                      <h4>{student.name}</h4>
                      <p>Course: {student.course}</p>
                      <p>Percentage: {student.percentage}%</p>
                      <p>Year: {student.year}</p>
                      <button className="schedule-btn">
                        Schedule Interview
                      </button>
                    </div>
                  ))
                ) : (
                  <p>No students match the criteria.</p>
                )}
              </div>
            </>
          )}

          {activeSection === "schedule" && <h2>Schedule Interview</h2>}
        </section>
      </main>
    </div>
  );
};

export default CompanyDashboard;
