import React from 'react';

const Marquee = () => {
  return (
    <div style={{
      background: '#007bff',
      color: 'white',
      padding: '15px 0',
      overflow: 'hidden'
    }}>
      <marquee behavior="scroll" direction="left" scrollamount="5">
        🎓 Admissions Open for 2024 Batch | 📢 Placement Drive Starting Soon | 🏆 100% Placement Assistance | 💼 Top Companies Hiring
      </marquee>
    </div>
  );
};

export default Marquee;
