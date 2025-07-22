import React from 'react';
import { MessageSquare, Mail } from 'lucide-react';

const CredentialsContent: React.FC = () => {
  return (
    <>
      <h1>🏆 Credentials & Achievements</h1>
      
      <h2>Major Achievements</h2>
      
      <div className="achievement-card">
        <h4>🥇 Nokia Hackathon Winner (2024)</h4>
        <p><strong>Achievement:</strong> First place winner in competitive hackathon environment</p>
        <p><strong>Recognition:</strong> Recognized for exceptional technical innovation and problem-solving</p>
        <p><strong>Impact:</strong> Demonstrated ability to deliver innovative solutions under pressure while competing against experienced developers</p>
        <p><strong>Skills Demonstrated:</strong> Rapid prototyping, team leadership, technical presentation, innovative problem-solving</p>
      </div>
      
      <div className="achievement-card">
        <h4>🎓 Excellent Research Award – Qualia Global Scholars Program (Stanford University) (2022)</h4>
        <p><strong>Achievement:</strong> Recognized for outstanding research leadership and innovation in competitive global summer program</p>
        <p><strong>Project:</strong> Developed "Mesa," an AI-powered healthcare management prototype aimed at improving emergency medical response systems worldwide</p>
        <p><strong>Recognition:</strong> Selected from thousands of global applicants and recognized among top performers</p>
        <p><strong>Impact:</strong> Research focused on addressing critical global healthcare inefficiencies through innovative AI/ML solutions</p>
        <p><strong>Skills Demonstrated:</strong> Advanced research methodology, AI/ML implementation, global health analysis, technical writing</p>
      </div>
      
      <div className="achievement-card">
        <h4>💻 Top 25% – Beaver Computing Contest (BCC) (2023)</h4>
        <p><strong>Achievement:</strong> National distinction for scoring in top 25% of participants</p>
        <p><strong>Competition:</strong> Prestigious computer science and logic competition hosted by University of Waterloo</p>
        <p><strong>Recognition:</strong> Demonstrated exceptional computational thinking and problem-solving abilities</p>
        <p><strong>Impact:</strong> Competed against thousands of students nationwide, showcasing advanced algorithmic thinking</p>
        <p><strong>Skills Demonstrated:</strong> Algorithmic problem-solving, computational logic, time management under pressure</p>
      </div>
      
      <h2>Additional Recognitions</h2>
      
      <div className="achievement-card">
        <h4>📚 Excellence in Social Studies Award (2023)</h4>
        <p>Recognized for exceptional performance in Grade 8 Social Studies, demonstrating advanced understanding of historical, political, and social systems with strong critical thinking and civic awareness.</p>
      </div>
      
      <div className="achievement-card">
        <h4>🔢 Top 10% – Kangaroo Math Contest (2021)</h4>
        <p>Placed in the top 10% nationwide in the Kangaroo Math Contest during Grade 6, demonstrating early mathematical talent and analytical reasoning.</p>
      </div>
      
      <h2>Professional References</h2>
      
      <div className="contact-info">
        <h3>Brian Sha - Stanford Qualia Global Scholars</h3>
        <div className="contact-item">
          <MessageSquare size={16} style={{ marginRight: '8px' }} />
          <span>"Excellent Research and Great Execution"</span>
        </div>
        <div className="contact-item">
          <Mail size={16} style={{ marginRight: '8px' }} />
          <span>Brian.sha@stanford.edu</span>
        </div>
      </div>
      
      <h2>Documentation & Evidence</h2>
      <p>All achievements are documented and verifiable. Physical certificates and digital badges available upon request. Portfolio includes code repositories, research papers, and project demonstrations showcasing the depth and quality of work behind each recognition.</p>
    </>
  );
};

export default CredentialsContent;
