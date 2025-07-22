import React from 'react';

const ExperienceContent: React.FC = () => {
  return (
    <>
      <div className="hero-section">
        <h1>💼 Professional Experience</h1>
        <div className="hero-tagline">
          <span className="highlight">Building innovative solutions across</span>
          <span className="tech-stack">Product Development • Team Leadership • Technical Innovation</span>
        </div>
      </div>
      
      <div className="intro-section">
        <div className="mission-statement">
          <div className="mission-icon">🎯</div>
          <div className="mission-text">
            <strong>Experience Philosophy:</strong> Each project represents a commitment to creating meaningful impact through technology. From community leadership to technical mentorship, my work focuses on solving real-world problems while building scalable, maintainable solutions.
          </div>
        </div>
      </div>
      
      <div className="experience-timeline">
        <div className="experience-card featured">
          <div className="experience-header">
            <div className="company-info">
              <div className="company-logo">🏆</div>
              <div className="company-details">
                <h3>Daydream Ottawa</h3>
                <div className="role">Founder & Organizer</div>
                <div className="duration">2024 - Present</div>
              </div>
            </div>
            <div className="experience-type">Leadership</div>
          </div>
          
          <div className="experience-content">
            <div className="achievement-summary">
              <div className="summary-icon">🚀</div>
              <div className="summary-text">
                <strong>Achievement:</strong> Founded and organized Canada's capital's largest hackathon, bringing together 200+ participants and 10+ corporate sponsors to foster innovation in Ottawa's tech community.
              </div>
            </div>
            
            <div className="impact-metrics">
              <div className="metric-item">
                <div className="metric-number">200+</div>
                <div className="metric-label">Participants</div>
              </div>
              <div className="metric-item">
                <div className="metric-number">25+</div>
                <div className="metric-label">Team Members</div>
              </div>
              <div className="metric-item">
                <div className="metric-number">10+</div>
                <div className="metric-label">Corporate Sponsors</div>
              </div>
              <div className="metric-item">
                <div className="metric-number">48hrs</div>
                <div className="metric-label">Event Duration</div>
              </div>
            </div>
            
            <div className="responsibilities-grid">
              <div className="responsibility-item">
                <div className="resp-icon">📋</div>
                <div className="resp-content">
                  <strong>Strategic Planning</strong>
                  <span>Developed comprehensive event strategy, timeline, and resource allocation plans</span>
                </div>
              </div>
              <div className="responsibility-item">
                <div className="resp-icon">🤝</div>
                <div className="resp-content">
                  <strong>Partnership Development</strong>
                  <span>Secured major sponsorships from leading tech companies and organizations</span>
                </div>
              </div>
              <div className="responsibility-item">
                <div className="resp-icon">👥</div>
                <div className="resp-content">
                  <strong>Team Leadership</strong>
                  <span>Managed 25+ volunteers and coordinated cross-functional teams</span>
                </div>
              </div>
              <div className="responsibility-item">
                <div className="resp-icon">💡</div>
                <div className="resp-content">
                  <strong>Community Building</strong>
                  <span>Created platform for mentorship and innovation in Ottawa's tech ecosystem</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-card">
          <div className="experience-header">
            <div className="company-info">
              <div className="company-logo">👨‍🏫</div>
              <div className="company-details">
                <h3>Software Development Mentorship</h3>
                <div className="role">Technical Lead & Mentor</div>
                <div className="duration">2022 - Present</div>
              </div>
            </div>
            <div className="experience-type">Teaching</div>
          </div>
          
          <div className="experience-content">
            <div className="achievement-summary">
              <div className="summary-icon">💡</div>
              <div className="summary-text">
                <strong>Role:</strong> Transformational leader guiding multiple advanced coding initiatives while elevating peer technical capabilities across diverse programming languages and development methodologies.
              </div>
            </div>
            
            <div className="skills-developed">
              <h5>🎓 Technical Leadership Areas</h5>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">💻</div>
                  <div className="skill-content">
                    <strong>Multi-Language Mentorship</strong>
                    <span>Python, Java, JavaScript, C++ instruction and guidance</span>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🏗️</div>
                  <div className="skill-content">
                    <strong>Architecture Design</strong>
                    <span>Leading architectural decisions and best practices education</span>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">📊</div>
                  <div className="skill-content">
                    <strong>Project Management</strong>
                    <span>Managing multiple concurrent projects with quality assurance</span>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🔍</div>
                  <div className="skill-content">
                    <strong>Code Review Leadership</strong>
                    <span>Conducting reviews and providing constructive feedback</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="project-highlights">
              <h5>📈 Notable Project Leadership</h5>
              <div className="project-examples">
                <div className="project-example">
                  <span className="project-name">Airline Management System</span>
                  <span className="project-desc">Led team of 4 students in comprehensive airline software development</span>
                </div>
                <div className="project-example">
                  <span className="project-name">360 Education Platform</span>
                  <span className="project-desc">Mentored peers in educational platform development contributions</span>
                </div>
                <div className="project-example">
                  <span className="project-name">Hackathon Team Preparation</span>
                  <span className="project-desc">Prepared multiple teams for regional and national coding competitions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-card">
          <div className="experience-header">
            <div className="company-info">
              <div className="company-logo">🗣️</div>
              <div className="company-details">
                <h3>Debate Club Leadership</h3>
                <div className="role">Core Member & Peer Coach</div>
                <div className="duration">2022 - Present</div>
              </div>
            </div>
            <div className="experience-type">Communication</div>
          </div>
          
          <div className="experience-content">
            <div className="achievement-summary">
              <div className="summary-icon">🎯</div>
              <div className="summary-text">
                <strong>Impact:</strong> Leading practice sessions and mentoring newer members in advanced strategy development while engaging in high-level debates on complex global and social issues.
              </div>
            </div>
            
            <div className="coaching-areas">
              <h5>📖 Coaching & Leadership Areas</h5>
              <div className="coaching-grid">
                <div className="coaching-badge research">
                  <span>Research Techniques</span>
                  <div className="coaching-level">Advanced methodology and evidence evaluation</div>
                </div>
                <div className="coaching-badge argumentation">
                  <span>Argumentation Strategy</span>
                  <div className="coaching-level">Evidence-based reasoning and logic structures</div>
                </div>
                <div className="coaching-badge presentation">
                  <span>Public Speaking</span>
                  <div className="coaching-level">Advanced presentation and communication skills</div>
                </div>
                <div className="coaching-badge thinking">
                  <span>Critical Thinking</span>
                  <div className="coaching-level">Real-time analysis and adaptation under pressure</div>
                </div>
              </div>
            </div>
            
            <div className="topic-expertise">
              <div className="expertise-icon">🌐</div>
              <div className="expertise-text">
                <strong>Topic Expertise:</strong> Complex global issues including technology policy, global health, social justice, and economic development with focus on evidence-based collaborative intellectual leadership.
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="additional-leadership-section">
        <h2>🚀 Additional Leadership & Impact</h2>
        
        <div className="leadership-showcase">
          <div className="leadership-card">
            <div className="leadership-header">
              <div className="leadership-icon">📊</div>
              <div className="leadership-title">Math Club Competition Leadership</div>
              <div className="leadership-duration">2022-2023</div>
            </div>
            
            <div className="leadership-content">
              <div className="leadership-activities">
                <div className="activity-item">
                  <span className="activity-icon">🏆</span>
                  <span className="activity-text">Active participant in Canada Jay Mathematical Contest</span>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">👥</span>
                  <span className="activity-text">Led informal study groups to enhance problem-solving skills</span>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">🧠</span>
                  <span className="activity-text">Demonstrated intellectual leadership and peer development commitment</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="leadership-card">
            <div className="leadership-header">
              <div className="leadership-icon">⚽</div>
              <div className="leadership-title">Athletic Leadership Development</div>
              <div className="leadership-duration">2021-Present</div>
            </div>
            
            <div className="leadership-content">
              <div className="sports-disciplines">
                <div className="discipline-badge">Soccer</div>
                <div className="discipline-badge">Brazilian Jiu-Jitsu</div>
                <div className="discipline-badge">Muay Thai</div>
                <div className="discipline-badge">Skiing</div>
                <div className="discipline-badge">Swimming</div>
              </div>
              
              <div className="athletic-qualities">
                <div className="quality-item">
                  <span className="quality-icon">💪</span>
                  <span className="quality-text">Initiative-taking and team adaptation leadership</span>
                </div>
                <div className="quality-item">
                  <span className="quality-icon">🎯</span>
                  <span className="quality-text">Resilience and calculated risk-taking abilities</span>
                </div>
                <div className="quality-item">
                  <span className="quality-icon">🤝</span>
                  <span className="quality-text">Situational leadership and peer encouragement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="impact-summary-section">
        <h2>🌟 Community Impact Overview</h2>
        
        <div className="impact-visualization">
          <div className="impact-stat">
            <div className="stat-number">200+</div>
            <div className="stat-label">Peers Mentored</div>
            <div className="stat-context">Through hackathons and technical mentorship</div>
          </div>
          <div className="impact-stat">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects Led</div>
            <div className="stat-context">Across multiple technical domains</div>
          </div>
          <div className="impact-stat">
            <div className="stat-number">10+</div>
            <div className="stat-label">Corporate Partnerships</div>
            <div className="stat-context">Established for community events</div>
          </div>
          <div className="impact-stat">
            <div className="stat-number">3yrs</div>
            <div className="stat-label">Leadership Experience</div>
            <div className="stat-context">Consistent growth and impact</div>
          </div>
        </div>
        
        <div className="impact-philosophy">
          <div className="philosophy-icon">🎯</div>
          <div className="philosophy-text">
            <strong>Leadership Philosophy:</strong> Through these diverse experiences, I have consistently demonstrated the ability to lead, mentor, and inspire others while managing complex projects and responsibilities. My community work has directly impacted hundreds of peers and community members, fostering innovation, technical skill development, and collaborative problem-solving across multiple domains.
          </div>
        </div>
      </div>
      
      <div className="conclusion-section">
        <div className="conclusion-box">
          <div className="conclusion-icon">🎯</div>
          <div className="conclusion-text">
            <strong>Experience Summary:</strong> My diverse experience spans technical leadership, community building, education, and hands-on development. Each role has contributed to my ability to bridge technical excellence with effective communication, project management, and team collaboration - essential skills for success in modern technology environments.
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceContent;
