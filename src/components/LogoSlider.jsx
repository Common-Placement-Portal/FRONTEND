import React from 'react';

const LogoSlider = () => {
  const companies = [
    { name: 'Accenture', logo: '>', color: '#A100FF' },
    { name: 'Cognizant', logo: 'Cognizant', color: '#0033A0', img: true },
    { name: 'IBM', logo: 'IBM', color: '#000' },
    { name: 'Microsoft', logo: 'Microsoft', color: '#737373', img: true },
    { name: 'Amazon', logo: 'amazon', color: '#000' },
    { name: 'Google', logo: 'Google', color: '#4285F4' }
  ];
  
  return (
    <section style={{padding: '60px 0', background: 'white'}}>
      <div className="container">
        <h2 style={{textAlign: 'center', marginBottom: '50px', fontSize: '36px', color: '#2c3e50'}}>Our Placement Partners</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '20px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {companies.map((company, index) => (
            <div key={index} style={{
              background: '#f8f9fa',
              padding: '40px 20px',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px',
              boxShadow: '0 3px 10px rgba(0,0,0,0.08)'
            }}>
              <div style={{
                fontSize: index === 0 ? '48px' : '24px',
                fontWeight: 'bold',
                color: company.color
              }}>
                {company.logo}
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: company.color
              }}>
                {company.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
