import React from 'react';

const InterviewContent: React.FC = () => {
  return (
    <>
      <div className="hero-section">
        <h1>🎤 Interview Mastery</h1>
        <div className="hero-tagline">
          <span className="highlight">Professional responses demonstrating</span>
          <span className="tech-stack">Self-Awareness • Growth Mindset • Leadership</span>
        </div>
      </div>
      
      <div className="intro-section">
        <div className="mission-statement">
          <div className="mission-icon">💡</div>
          <div className="mission-text">
            <strong>Interview Philosophy:</strong> Each response showcases authentic experiences while highlighting transferable skills and continuous growth. These answers reflect my ability to reflect critically on challenges, learn from setbacks, and apply insights to future situations.
          </div>
        </div>
      </div>
      
      <div className="interview-questions-section">
        <div className="question-card personal-growth">
          <div className="question-header">
            <div className="question-number">01</div>
            <div className="question-category">Personal Growth</div>
          </div>
          <div className="question-content">
            <h3 className="question-title">Tell me about something about yourself that you are trying to work on or improve. Why do you feel like that is something important for your work life?</h3>
            
            <div className="answer-section">
              <div className="answer-highlight">
                <div className="highlight-icon">🎯</div>
                <div className="highlight-text">
                  <strong>Focus Area:</strong> Time management and project prioritization
                </div>
              </div>
              
              <div className="answer-content">
                <p>I'm working on improving my time management skills, particularly balancing multiple high-impact projects simultaneously. Currently, I'm managing the autonomous drone development, the 360 Education Platform, and organizing Daydream Ottawa hackathon - all while maintaining my 3.9 GPA in the Pre-IB program.</p>
                
                <p>I've realized that as I take on more leadership responsibilities, I need to become more strategic about prioritizing tasks and delegating effectively. This is crucial for my future work life because in the tech industry, especially at innovative companies like Tesla, you're often juggling multiple complex projects with tight deadlines.</p>
                
                <div className="insight-box">
                  <div className="insight-icon">💡</div>
                  <div className="insight-text">
                    <strong>Key Insight:</strong> Learning to manage competing priorities now will make me a more effective software engineer and team leader. I'm developing systems like time-blocking and project prioritization matrices to ensure I can scale my impact without compromising quality.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="question-card stress-management">
          <div className="question-header">
            <div className="question-number">02</div>
            <div className="question-category">Stress Management</div>
          </div>
          <div className="question-content">
            <h3 className="question-title">What strategies do you use to overcome stress?</h3>
            
            <div className="answer-section">
              <div className="strategy-grid">
                <div className="strategy-item">
                  <div className="strategy-icon">🥋</div>
                  <div className="strategy-content">
                    <strong>Physical Activity</strong>
                    <span>Brazilian Jiu-Jitsu and Muay Thai for mental clarity and stress relief</span>
                  </div>
                </div>
                <div className="strategy-item">
                  <div className="strategy-icon">🧩</div>
                  <div className="strategy-content">
                    <strong>Problem Decomposition</strong>
                    <span>Breaking complex challenges into manageable components</span>
                  </div>
                </div>
                <div className="strategy-item">
                  <div className="strategy-icon">👨‍🏫</div>
                  <div className="strategy-content">
                    <strong>Peer Mentorship</strong>
                    <span>Teaching others reinforces understanding and provides perspective</span>
                  </div>
                </div>
              </div>
              
              <div className="example-box">
                <div className="example-icon">📊</div>
                <div className="example-text">
                  <strong>Real Example:</strong> When developing the Mesa healthcare prototype, I approached the overwhelming challenge of global healthcare inefficiencies by focusing on one specific problem at a time, making the project manageable and successful.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="question-card innovation">
          <div className="question-header">
            <div className="question-number">03</div>
            <div className="question-category">Innovation</div>
          </div>
          <div className="question-content">
            <h3 className="question-title">If there was one change you could make to your current school, what would it be and why?</h3>
            
            <div className="answer-section">
              <div className="solution-proposal">
                <div className="proposal-icon">🚀</div>
                <div className="proposal-content">
                  <h4>Proposed Solution: Project-Based Learning Integration</h4>
                  <p>Implement more project-based learning opportunities that connect directly with real-world applications. While the Pre-IB program provides excellent academic rigor, students would benefit from hands-on experiences that bridge classroom theory with practical problem-solving.</p>
                </div>
              </div>
              
              <div className="implementation-examples">
                <h5>🛠️ Implementation Examples</h5>
                <div className="example-grid">
                  <div className="example-item">
                    <span className="example-subject">Mathematics</span>
                    <span className="example-application">Integrate coding projects for data analysis</span>
                  </div>
                  <div className="example-item">
                    <span className="example-subject">Science</span>
                    <span className="example-application">Work on actual research problems</span>
                  </div>
                  <div className="example-item">
                    <span className="example-subject">Global Politics</span>
                    <span className="example-application">Develop policy proposal presentations</span>
                  </div>
                </div>
              </div>
              
              <div className="validation-box">
                <div className="validation-icon">✅</div>
                <div className="validation-text">
                  <strong>Personal Validation:</strong> My Mesa healthcare prototype and 360 Education Platform have taught me more about system design than traditional coursework alone. This approach prepares students for the collaborative, project-driven nature of modern workplaces.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="question-card achievement">
          <div className="question-header">
            <div className="question-number">04</div>
            <div className="question-category">Achievement</div>
          </div>
          <div className="question-content">
            <h3 className="question-title">What accomplishment in your life are you most proud of?</h3>
            
            <div className="answer-section">
              <div className="accomplishment-showcase">
                <div className="accomplishment-primary">
                  <div className="primary-icon">🏆</div>
                  <div className="primary-content">
                    <h4>Nokia Hackathon Victory → Daydream Ottawa Creation</h4>
                    <p>I'm most proud of winning the Nokia Hackathon while simultaneously using that success to give back to my community through organizing Daydream Ottawa.</p>
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
                </div>
              </div>
              
              <div className="philosophy-reflection">
                <div className="reflection-icon">🎯</div>
                <div className="reflection-text">
                  <strong>Core Philosophy:</strong> This accomplishment embodies my belief that success isn't just about individual achievement—it's about creating opportunities for others to succeed too. It demonstrates the intersection of technical abilities and commitment to fostering innovation in others.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="question-card leadership">
          <div className="question-header">
            <div className="question-number">05</div>
            <div className="question-category">Leadership</div>
          </div>
          <div className="question-content">
            <h3 className="question-title">Tell me about a time you found yourself in a leadership role. What did you learn from it?</h3>
            
            <div className="answer-section">
              <div className="scenario-setup">
                <div className="scenario-icon">💼</div>
                <div className="scenario-content">
                  <h4>Context: Airline Management System Project Leadership</h4>
                  <p>Leading a team as both technical mentor and project coordinator, I initially focused too heavily on technical aspects while neglecting team dynamics and communication.</p>
                </div>
              </div>
              
              <div className="learning-outcomes">
                <h5>🎓 Key Leadership Learnings</h5>
                <div className="learning-grid">
                  <div className="learning-item">
                    <div className="learning-icon">⚖️</div>
                    <div className="learning-content">
                      <strong>Balance Technical & People Skills</strong>
                      <span>Effective leadership requires both technical excellence and people management</span>
                    </div>
                  </div>
                  <div className="learning-item">
                    <div className="learning-icon">🗣️</div>
                    <div className="learning-content">
                      <strong>Communication is Foundation</strong>
                      <span>Regular check-ins and collaborative sessions prevent misunderstandings</span>
                    </div>
                  </div>
                  <div className="learning-item">
                    <div className="learning-icon">🎯</div>
                    <div className="learning-content">
                      <strong>Empower Team Success</strong>
                      <span>Best solutions emerge when everyone feels supported and engaged</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="application-example">
                <div className="application-icon">🚀</div>
                <div className="application-text">
                  <strong>Applied Learning:</strong> I've implemented these lessons in organizing Daydream Ottawa, ensuring every participant feels supported and engaged, not just the most experienced coders. Leadership isn't about being the smartest person in the room—it's about enabling everyone to contribute their best work.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="question-card resilience">
          <div className="question-header">
            <div className="question-number">06</div>
            <div className="question-category">Resilience</div>
          </div>
          <div className="question-content">
            <h3 className="question-title">Tell me about a time you failed. What did you learn from it?</h3>
            
            <div className="answer-section">
              <div className="failure-context">
                <div className="context-icon">📉</div>
                <div className="context-content">
                  <h4>The Beaver Computing Contest: A Humbling Experience</h4>
                  <p>During my first attempt in Grade 8, I scored much lower than expected because I rushed through problems without fully understanding the requirements. Overconfidence in my programming abilities led me to skip careful analysis.</p>
                </div>
              </div>
              
              <div className="transformation-process">
                <h5>🔄 Transformation Process</h5>
                <div className="process-timeline">
                  <div className="process-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <strong>Recognition</strong>
                      <span>Acknowledged that raw ability isn't enough without methodology</span>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <strong>Skill Development</strong>
                      <span>Learned patience, problem decomposition, and requirement validation</span>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <strong>Application</strong>
                      <span>Applied disciplined methodology to achieve top 25% the following year</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lesson-integration">
                <div className="integration-icon">🎯</div>
                <div className="integration-text">
                  <strong>Lasting Impact:</strong> This experience now influences every coding project—I always start with careful requirements analysis and planning before writing code. Failure became one of my greatest teachers, showing me that sustainable success comes from disciplined methodology, not just raw ability.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="conclusion-section">
        <div className="conclusion-box">
          <div className="conclusion-icon">🎯</div>
          <div className="conclusion-text">
            <strong>Interview Readiness Summary:</strong> These responses demonstrate my ability to reflect critically on experiences, learn from challenges, and apply insights to future situations. Each answer showcases specific examples while highlighting transferable skills relevant to professional environments and my continued growth as both a technical contributor and leader.
          </div>
        </div>
      </div>
    </>
  );
};

export default InterviewContent;
