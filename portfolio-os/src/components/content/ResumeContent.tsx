import React from 'react';
import { Mail, Phone, Github, MapPin, Download, FileText, ExternalLink } from 'lucide-react';

const ResumeContent: React.FC = () => {
  return (
    <>
      <h1>📄 Resume & Cover Letter</h1>
      
      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <div style={{ fontSize: '64px', marginBottom: '20px' }}>📋</div>
        <h2>Professional Documents</h2>
        <p style={{ fontSize: '18px', color: '#000000' }}>Download my comprehensive resume and cover letter.</p>
        
        <div className="download-links" style={{ marginTop: '30px' }}>
          <a href="/Resume.pdf" download="Pramsu_Pandey_Resume.pdf" className="download-btn resume-btn">
            <span className="download-icon">📄</span>
            <div className="download-content">
              <strong>Download Resume</strong>
              <span>Complete professional background and experience</span>
            </div>
          </a>
          
          <a href="/CoverLetter.pdf" download="Pramsu_Pandey_Cover_Letter.pdf" className="download-btn cover-letter-btn">
            <span className="download-icon">✉️</span>
            <div className="download-content">
              <strong>Download Cover Letter</strong>
              <span>Personalized introduction and career objectives</span>
            </div>
          </a>
        </div>
      </div>
      
      <h2>📊 Resume Highlights</h2>
      <div className="skill-grid">
        <div className="skill-card">
          <h3>🎓 Education</h3>
          <ul>
            <li><strong>Lisgar Collegiate Institute</strong> - Pre-IB Program</li>
            <li><strong>Current GPA:</strong> 3.9/4.0</li>
            <li><strong>Expected Graduation:</strong> 2027</li>
            <li><strong>Key Courses:</strong> Advanced Computer Science, Calculus, Physics</li>
          </ul>
        </div>
        
        <div className="skill-card">
          <h3>💻 Technical Skills</h3>
          <ul>
            <li><strong>Languages:</strong> Python, JavaScript/TypeScript, Java, C++</li>
            <li><strong>Frameworks:</strong> React, Node.js, TensorFlow, PyTorch</li>
            <li><strong>Tools:</strong> Git, Docker, KiCad, AWS, Google Cloud</li>
            <li><strong>Specialties:</strong> AI/ML, Computer Vision, Full-Stack Development</li>
          </ul>
        </div>
        
        <div className="skill-card">
          <h3>🏆 Key Achievements</h3>
          <ul>
            <li><strong>Nokia Hackathon Winner</strong> (2024)</li>
            <li><strong>Stanford Qualia Global Scholars</strong> - Research Excellence Award</li>
            <li><strong>Beaver Computing Contest</strong> - Top 25% Nationally</li>
            <li><strong>Daydream Ottawa</strong> - Founding Organizer</li>
          </ul>
        </div>
        
        <div className="skill-card">
          <h3>🚀 Notable Projects</h3>
          <ul>
            <li><strong>Mesa Healthcare AI</strong> - Emergency resource optimization</li>
            <li><strong>Autonomous Drone System</strong> - Computer vision & navigation</li>
            <li><strong>360 Education Platform</strong> - Student management system</li>
            <li><strong>Daydream Ottawa</strong> - Canada's largest youth hackathon</li>
          </ul>
        </div>
      </div>
      
      <h2>✉️ Contact Information</h2>
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
            <span>Ottawa, Ontario, Canada</span>
          </div>
        </div>
      </div>
      
      <h2>📋 Additional Documents</h2>
      <div className="skill-grid">
        <div className="skill-card">
          <h3>🎓 Academic Transcripts</h3>
          <p>Official transcripts and grade reports available upon request. All academic achievements are verified and documented.</p>
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <button className="btn" style={{ background: '#666666' }} disabled>
              <ExternalLink size={16} style={{ marginRight: '8px' }} />
              Available on Request
            </button>
          </div>
        </div>
        
        <div className="skill-card">
          <h3>🏆 Certificates & Awards</h3>
          <p>Digital copies of competition certificates, achievement awards, and program completion certificates.</p>
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <a href="#" className="btn">
              <Download size={16} style={{ marginRight: '8px' }} />
              Download Portfolio
            </a>
          </div>
        </div>
        
        <div className="skill-card">
          <h3>👥 References</h3>
          <p>Professional and academic references available upon request. Includes contacts from Stanford, hackathon sponsors, and academic mentors.</p>
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <a href="mailto:pramsu.pandey@outlook.com" className="btn">
              <Mail size={16} style={{ marginRight: '8px' }} />
              Request References
            </a>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(0, 0, 0, 0.05)', borderRadius: '12px' }}>
        <h3>📌 Note</h3>
        <p>All documents are regularly updated to reflect my latest achievements and experiences. For the most current version or specific document requests, please contact me directly.</p>
        
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <a href="mailto:pramsu.pandey@outlook.com?subject=Document Request" className="btn">
            <Mail size={16} style={{ marginRight: '8px' }} />
            Request Specific Documents
          </a>
        </div>
      </div>
    </>
  );
};

export default ResumeContent;
