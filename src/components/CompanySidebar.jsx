import React from "react";
import "../styles/company-layout.css";

const CompanySidebar = ({ active, onChange }) => {
  return (
    <aside className="company-sidebar">
      <div className="company-profile">
        <div className="company-avatar">T</div>
        <h3>TCS</h3>
        <p>hr@tcs.com</p>
      </div>

      <nav className="company-nav">
        <button
          className={active === "post-job" ? "active" : ""}
          onClick={() => onChange("post-job")}
        >
          Post Job
        </button>

        <button
          className={active === "shortlist" ? "active" : ""}
          onClick={() => onChange("shortlist")}
        >
          Shortlist Students
        </button>

        <button
          className={active === "schedule" ? "active" : ""}
          onClick={() => onChange("schedule")}
        >
          Schedule Interview
        </button>
      </nav>
    </aside>
  );
};

export default CompanySidebar;
