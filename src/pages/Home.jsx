import React from 'react'
import StudentCarousel from '../components/StudentCarousel'
import Marquee from '../components/Marquee'
import '../styles/home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo-container">
            <div className="cdac-logo">
              <div className="logo-circle">CDAC</div>
            </div>
            <div className="brand-text">
              <div className="brand-title">CDAC Placement Portal</div>
              <div className="brand-subtitle">Centre for Development of Advanced Computing</div>
            </div>
          </div>
          <div className="navbar-nav">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#placement" className="nav-link">Placement</a>
            <a href="#contact" className="nav-link">Contact Us</a>
            <a href="/login" className="nav-link login-btn">Login</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home" style={{marginTop: '80px'}}>
        <div className="container">
          <div className="hero-content">
            <div className="welcome-text">Welcome To</div>
            <h1>Centre for Development of Advanced Computing</h1>
            <h2>Institute for Advanced Computing and Software Development</h2>
            <p className="celebration-text">Celebrating Glorious 38+ years of Academic Excellence</p>
            <div className="reviews">
              <div className="google-logo">Google</div>
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <span>(588+ reviews)</span>
            </div>
          </div>
          <div className="hero-carousel">
            <StudentCarousel />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

    {/* ================= ABOUT SECTION ================= */}
<section className="info-section" id="about">
  <div className="container">
    <h2>About CDAC Placement Portal</h2>

    <div className="info-cards">
      <div className="info-card">
        <h3>🎯 Our Objective</h3>
        <p>
          To connect talented students with leading companies and ensure
          successful placements in the IT industry.
        </p>
      </div>

      <div className="info-card">
        <h3>👨‍🎓 For Students</h3>
        <p>
          Students can update profiles, check job postings, and track
          interview status through the portal.
        </p>
      </div>

      <div className="info-card">
        <h3>🏢 For Companies</h3>
        <p>
          Companies can post jobs, shortlist candidates, and schedule
          interviews easily.
        </p>
      </div>
    </div>
  </div>
</section>


{/* ================= PLACEMENT SECTION ================= */}
<section className="placement-section" id="placement">
  <div className="container">
    <h2>Placement Statistics</h2>

    <div className="stats-overview">
      <div className="stat-item">
        <h3>95%</h3>
        <p>Overall Placement Rate</p>
      </div>

      <div className="stat-item">
        <h3>500+</h3>
        <p>Students Placed</p>
      </div>

      <div className="stat-item">
        <h3>150+</h3>
        <p>Partner Companies</p>
      </div>

      <div className="stat-item">
        <h3>12 LPA</h3>
        <p>Highest Package</p>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Home
