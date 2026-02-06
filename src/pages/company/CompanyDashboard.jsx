import React, { useState } from "react";
import CompanySidebar from "../../components/CompanySidebar";
import "../../styles/company-layout.css";

const CompanyDashboard = () => {
  const [activeSection, setActiveSection] = useState("post-job");

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
          {activeSection === "post-job" && <h2>Post Job</h2>}
          {activeSection === "shortlist" && <h2>Shortlist Students</h2>}
          {activeSection === "schedule" && <h2>Schedule Interview</h2>}
        </section>
      </main>
    </div>
  );
};

export default CompanyDashboard;
