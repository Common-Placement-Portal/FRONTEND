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
    </div>
  )
}

export default Home
