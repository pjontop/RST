import React from 'react';

const HomeContent: React.FC = () => {
  return (
    <>
      <h1>🚀 Welcome to Pramsu's Portfolio OS</h1>
      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <div style={{ fontSize: '72px', marginBottom: '20px' }}>👨‍💻</div>
        <h2>Visionary Grade 9 Developer</h2>
        <p style={{ fontSize: '20px', color: '#000000', fontWeight: 600 }}>
          AI/ML Enthusiast • Full-Stack Developer • Hackathon Organizer
        </p>
      </div>
      
      <div className="skill-grid">
        <div className="skill-card">
          <h3>🧠 AI/ML Innovation</h3>
          <p>Developing cutting-edge AI solutions like "Mesa" healthcare prototype and autonomous drone systems.</p>
        </div>
        <div className="skill-card">
          <h3>💻 Full-Stack Development</h3>
          <p>Expert in Python, JavaScript, React, Node.js, and modern development frameworks.</p>
        </div>
        <div className="skill-card">
          <h3>🏆 Leadership Excellence</h3>
          <p>Organizing Canada's largest youth hackathon and mentoring fellow developers.</p>
        </div>
        <div className="skill-card">
          <h3>🎯 Academic Achievement</h3>
          <p>3.9 GPA in Pre-IB Program while pursuing ambitious technical projects.</p>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <p style={{ fontSize: '18px', fontStyle: 'italic' }}>
          "Uniquely combining technical mastery with humanitarian vision to drive transformative change through technology."
        </p>
      </div>
    </>
  );
};

export default HomeContent;
