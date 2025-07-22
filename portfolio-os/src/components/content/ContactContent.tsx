import React from 'react';
import { Mail, Phone, Github, MapPin } from 'lucide-react';

const ContactContent: React.FC = () => {
  return (
    <>
      <h1>📞 Contact Information</h1>
      
      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <div style={{ fontSize: '64px', marginBottom: '20px' }}>📬</div>
        <h2>Let's Connect!</h2>
        <p style={{ fontSize: '18px', color: '#000000' }}>I'm always excited to discuss technology, innovation, and opportunities to create positive impact.</p>
      </div>
      
      <div className="contact-info">
        <div className="contact-item">
          <Mail size={20} style={{ marginRight: '12px' }} />
          <div>
            <strong>Email:</strong>
            <a href="mailto:pramsu.pandey@outlook.com">pramsu.pandey@outlook.com</a>
          </div>
        </div>
        
        <div className="contact-item">
          <Phone size={20} style={{ marginRight: '12px' }} />
          <div>
            <strong>Phone:</strong>
            <a href="tel:+16132043411">+1 (613) 204-3411</a>
          </div>
        </div>
        
        <div className="contact-item">
          <Github size={20} style={{ marginRight: '12px' }} />
          <div>
            <strong>GitHub:</strong>
            <a href="https://github.com/pjontop" target="_blank" rel="noopener noreferrer">github.com/pjontop</a>
          </div>
        </div>
        
        <div className="contact-item">
          <MapPin size={20} style={{ marginRight: '12px' }} />
          <div>
            <strong>Location:</strong>
            <span>Ottawa, Ontario, Canada<br/>207 Flowing Creek Circle, K2M0K1</span>
          </div>
        </div>
      </div>
      
      <h2>🤝 Let's Collaborate</h2>
      <div className="skill-grid">
        <div className="skill-card">
          <h3>💼 Professional Opportunities</h3>
          <p>Seeking internships, mentorship opportunities, and chances to contribute to meaningful technology projects.</p>
        </div>
        <div className="skill-card">
          <h3>🚀 Project Collaboration</h3>
          <p>Open to collaborating on AI/ML projects, hackathons, and innovative solutions to global challenges.</p>
        </div>
        <div className="skill-card">
          <h3>🎓 Speaking & Mentoring</h3>
          <p>Available for speaking at events, mentoring other young developers, and sharing insights on technology leadership.</p>
        </div>
        <div className="skill-card">
          <h3>🌟 Daydream Ottawa</h3>
          <p>Interested in sponsoring or participating in Canada's largest youth hackathon? Let's discuss partnership opportunities.</p>
        </div>
      </div>
      
      <h2>📱 Response Time</h2>
      <p>I typically respond to emails within 24-48 hours during school days, and often sooner. For urgent matters related to Daydream Ottawa or time-sensitive opportunities, feel free to call directly.</p>
      
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <a href="mailto:pramsu.pandey@outlook.com" className="btn">
          <Mail size={16} style={{ marginRight: '8px' }} />
          Send me an email
        </a>
      </div>
      
      <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(0, 0, 0, 0.05)', borderRadius: '12px' }}>
        <h3>🎯 What I'm Looking For</h3>
        <ul>
          <li><strong>Internship Opportunities:</strong> Summer or part-time positions in AI/ML, full-stack development, or hardware engineering</li>
          <li><strong>Mentorship:</strong> Guidance from experienced professionals in technology leadership and entrepreneurship</li>
          <li><strong>Research Collaborations:</strong> Opportunities to contribute to meaningful research in healthcare technology or educational innovation</li>
          <li><strong>Speaking Engagements:</strong> Chances to share my experiences with other young developers and inspire the next generation</li>
        </ul>
      </div>
    </>
  );
};

export default ContactContent;
