import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: '#2c3e50',
      color: 'white',
      padding: '40px 0 20px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '40px',
          marginBottom: '30px'
        }}>
          <div>
            <h3 style={{color: '#0088ff', marginBottom: '20px', fontSize: '18px'}}>CDAC Placement Portal</h3>
            <p style={{color: '#bbb', lineHeight: '1.8', fontSize: '14px'}}>
              Connecting talented students with leading companies. Your gateway to a successful career in technology.
            </p>
          </div>
          <div>
            <h3 style={{color: '#0088ff', marginBottom: '20px', fontSize: '18px'}}>Contact Information</h3>
            <p style={{color: '#bbb', lineHeight: '2', fontSize: '14px'}}>
              📍 CDAC Campus, Pune, Maharashtra<br/>
              📞 +91-20-1234-5678<br/>
              ✉️ placement@cdac.in
            </p>
          </div>
          <div>
            <h3 style={{color: '#0088ff', marginBottom: '20px', fontSize: '18px'}}>Quick Links</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
              <a href="#" style={{color: '#bbb', textDecoration: 'none', fontSize: '14px'}}>About CDAC</a>
              <a href="#" style={{color: '#bbb', textDecoration: 'none', fontSize: '14px'}}>Courses</a>
              <a href="#" style={{color: '#bbb', textDecoration: 'none', fontSize: '14px'}}>Placements</a>
              <a href="#" style={{color: '#bbb', textDecoration: 'none', fontSize: '14px'}}>Contact Us</a>
            </div>
          </div>
          <div>
            <h3 style={{color: '#0088ff', marginBottom: '20px', fontSize: '18px'}}>For Students</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
              <a href="#" style={{color: '#bbb', textDecoration: 'none', fontSize: '14px'}}>Student Login</a>
              <a href="#" style={{color: '#bbb', textDecoration: 'none', fontSize: '14px'}}>Placement Guidelines</a>
              <a href="#" style={{color: '#bbb', textDecoration: 'none', fontSize: '14px'}}>Career Resources</a>
              <a href="#" style={{color: '#bbb', textDecoration: 'none', fontSize: '14px'}}>FAQs</a>
            </div>
          </div>
        </div>
        <div style={{textAlign: 'center', paddingTop: '20px', borderTop: '1px solid #444', color: '#888', fontSize: '14px'}}>
          © 2024 CDAC Placement Portal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
