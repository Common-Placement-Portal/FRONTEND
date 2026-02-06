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

          {activeSection === "shortlist" && <h2>Shortlist Students</h2>}
          {activeSection === "schedule" && <h2>Schedule Interview</h2>}
        </section>
      </main>
    </div>
  );
};

export default CompanyDashboard;
