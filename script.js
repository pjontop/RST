// Portfolio OS JavaScript
class PortfolioOS {
    constructor() {
        this.windows = [];
        this.zIndex = 100;
        this.init();
    }

    init() {
        this.updateTime();
        setInterval(() => this.updateTime(), 1000);
        this.bindEvents();
        this.loadApps();
    }

    updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        document.getElementById('currentTime').textContent = timeString;
    }

    bindEvents() {
        // Dock item clicks
        document.querySelectorAll('.dock-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const appName = item.dataset.app;
                if (appName && appName !== 'trash') {
                    this.openApp(appName);
                    this.hideWelcomeMessage();
                }
            });
        });

        // Desktop click to show welcome message
        document.getElementById('desktop').addEventListener('click', (e) => {
            if (e.target === e.currentTarget || e.target.classList.contains('desktop-background')) {
                this.showWelcomeMessage();
            }
        });
    }

    hideWelcomeMessage() {
        document.getElementById('welcomeMessage').classList.add('hidden');
    }

    showWelcomeMessage() {
        if (this.windows.length === 0) {
            document.getElementById('welcomeMessage').classList.remove('hidden');
        }
    }

    openApp(appName) {
        // Check if window already exists
        const existingWindow = this.windows.find(w => w.app === appName);
        if (existingWindow) {
            this.bringToFront(existingWindow.element);
            return;
        }

        const windowElement = this.createWindow(appName);
        this.windows.push({
            app: appName,
            element: windowElement,
            isMaximized: false
        });

        document.getElementById('windowsContainer').appendChild(windowElement);
        this.bringToFront(windowElement);
        this.makeDraggable(windowElement);
    }

    createWindow(appName) {
        const window = document.createElement('div');
        window.className = 'window';
        window.style.width = '800px';
        window.style.height = '600px';
        window.style.left = `${Math.random() * 200 + 50}px`;
        window.style.top = `${Math.random() * 100 + 50}px`;

        const header = document.createElement('div');
        header.className = 'window-header';

        const controls = document.createElement('div');
        controls.className = 'window-controls';

        const closeBtn = document.createElement('div');
        closeBtn.className = 'window-control close';
        closeBtn.addEventListener('click', () => this.closeWindow(window));

        const minimizeBtn = document.createElement('div');
        minimizeBtn.className = 'window-control minimize';
        minimizeBtn.addEventListener('click', () => this.minimizeWindow(window));

        const maximizeBtn = document.createElement('div');
        maximizeBtn.className = 'window-control maximize';
        maximizeBtn.addEventListener('click', () => this.toggleMaximize(window));

        controls.appendChild(closeBtn);
        controls.appendChild(minimizeBtn);
        controls.appendChild(maximizeBtn);

        const title = document.createElement('div');
        title.className = 'window-title';
        title.textContent = this.getAppTitle(appName);

        header.appendChild(controls);
        header.appendChild(title);

        const content = document.createElement('div');
        content.className = 'window-content';
        content.innerHTML = this.getAppContent(appName);

        window.appendChild(header);
        window.appendChild(content);

        return window;
    }

    getAppTitle(appName) {
        const titles = {
            home: 'Home - Portfolio OS',
            about: 'About Me',
            resume: 'Resume & Cover Letter',
            credentials: 'Credentials & Achievements',
            experience: 'Volunteer & Work Experience',
            interview: 'Interview Responses',
            contact: 'Contact Information'
        };
        return titles[appName] || 'Application';
    }

    getAppContent(appName) {
        const content = {
            home: `
                <div class="app-content">
                    <h1>🚀 Welcome to Pramsu's Portfolio OS</h1>
                    <div style="text-align: center; margin: 40px 0;">
                        <div style="font-size: 72px; margin-bottom: 20px;">👨‍💻</div>
                        <h2>Visionary Grade 9 Developer</h2>
                        <p style="font-size: 20px; color: #667eea; font-weight: 600;">AI/ML Enthusiast • Full-Stack Developer • Hackathon Organizer</p>
                    </div>
                    
                    <div class="skill-grid">
                        <div class="skill-card">
                            <h3>🧠 AI/ML Innovation</h3>
                            <p>Developing cutting-edge AI solutions like "Mesa" healthcare prototype and autonomous drone systems.</p>
                        </div>
                        <div class="skill-card">
                            <h3>💻 Full-Stack Development</h3>
                            <p>Expert in Python, JavaScript, React, Node.js, and modern development frameworks.</p>
                        </div>
                        <div class="skill-card">
                            <h3>🏆 Leadership Excellence</h3>
                            <p>Organizing Canada's largest youth hackathon and mentoring fellow developers.</p>
                        </div>
                        <div class="skill-card">
                            <h3>🎯 Academic Achievement</h3>
                            <p>3.9 GPA in Pre-IB Program while pursuing ambitious technical projects.</p>
                        </div>
                    </div>
                    
                    <div style="text-align: center; margin-top: 40px;">
                        <p style="font-size: 18px; font-style: italic;">"Uniquely combining technical mastery with humanitarian vision to drive transformative change through technology."</p>
                    </div>
                </div>
            `,
            about: `
                <div class="app-content">
                    <h1>About Me</h1>
                    
                    <h2>🌟 Who I Am</h2>
                    <p>I'm a visionary and exceptionally driven Grade 9 student with an extraordinary passion for leveraging cutting-edge AI/ML and full-stack development to tackle complex global challenges in healthcare and education. Currently maintaining a 3.9 GPA in the rigorous Pre-IB Program while simultaneously pursuing groundbreaking technical projects.</p>
                    
                    <h2>🎯 My Interests</h2>
                    <div class="skill-grid">
                        <div class="skill-card">
                            <h3>🤖 Artificial Intelligence & Machine Learning</h3>
                            <p>Passionate about developing AI solutions for real-world problems, particularly in healthcare optimization and autonomous systems.</p>
                        </div>
                        <div class="skill-card">
                            <h3>🌍 Technology for Global Impact</h3>
                            <p>Focused on using technology to address global challenges in healthcare, education, and emergency response systems.</p>
                        </div>
                        <div class="skill-card">
                            <h3>👥 Community Leadership & Mentorship</h3>
                            <p>Organizing large-scale events like "Daydream Ottawa" and mentoring peers in coding and innovation.</p>
                        </div>
                    </div>
                    
                    <h2>💪 Essential Skills</h2>
                    
                    <h3>1. Technical Leadership & Innovation</h3>
                    <p><strong>Examples:</strong></p>
                    <ul>
                        <li><strong>Autonomous Drone Development:</strong> Leading end-to-end development including PCB design with KiCad and autonomous flight control systems</li>
                        <li><strong>"Mesa" Healthcare AI:</strong> Designed and developed an AI/ML-powered prototype for optimizing medical resource distribution during emergencies</li>
                        <li><strong>360 Education Platform:</strong> Creating a comprehensive educational platform to streamline student experiences and improve learning accessibility</li>
                    </ul>
                    
                    <h3>2. Exceptional Project Management & Community Building</h3>
                    <p><strong>Examples:</strong></p>
                    <ul>
                        <li><strong>"Daydream Ottawa" Hackathon:</strong> Founding organizer of Ottawa's premier technology event, coordinating complex logistics, securing major sponsorships, and managing Canada's capital's largest hackathon</li>
                        <li><strong>Team Leadership:</strong> Successfully leading multiple coding initiatives while mentoring teammates across diverse programming languages and architectural design</li>
                        <li><strong>Academic Excellence:</strong> Maintaining 3.9 GPA in Pre-IB Program while managing multiple technical projects and leadership responsibilities</li>
                    </ul>
                    
                    <h2>🎯 SMART Goal</h2>
                    <div class="achievement-card">
                        <h4>Launch AI Healthcare Startup by Age 18</h4>
                        <p><strong>Specific:</strong> Develop and commercialize an AI-powered healthcare optimization platform based on my "Mesa" prototype</p>
                        <p><strong>Measurable:</strong> Achieve 10+ hospital partnerships and process 1000+ emergency cases through the platform</p>
                        <p><strong>Achievable:</strong> Building on current AI/ML expertise, healthcare research experience, and proven project delivery capabilities</p>
                        <p><strong>Relevant:</strong> Aligns with my passion for using technology to solve global healthcare challenges and my proven track record in AI development</p>
                        <p><strong>Time-bound:</strong> Complete MVP by Grade 11 (age 16), pilot testing by Grade 12 (age 17), and full launch by Grade 13 (age 18)</p>
                    </div>
                    
                    <h2>🚀 Dreams & Career Aspirations</h2>
                    <p><strong>Short-term (Next 2-3 years):</strong></p>
                    <ul>
                        <li>Complete IB Diploma with focus on Computer Science and Mathematics</li>
                        <li>Expand "Daydream Ottawa" to become a national hackathon series</li>
                        <li>Develop commercial-grade autonomous drone technology</li>
                        <li>Publish research papers on AI applications in healthcare</li>
                    </ul>
                    
                    <p><strong>Long-term Career Vision:</strong></p>
                    <ul>
                        <li><strong>Technology Leadership:</strong> Become a leading figure in AI/ML innovation, particularly in healthcare technology</li>
                        <li><strong>Social Impact:</strong> Lead technology-driven initiatives to improve global healthcare accessibility and emergency response systems</li>
                        <li><strong>Entrepreneurship:</strong> Found and scale technology companies that address critical global challenges</li>
                        <li><strong>Education & Mentorship:</strong> Continue fostering the next generation of innovators through mentorship and educational platforms</li>
                    </ul>
                </div>
            `,
            resume: `
                <div class="app-content">
                    <h1>Resume & Cover Letter</h1>
                    
                    <div class="resume-container">
                        <h2>📄 My Resume</h2>
                        <div class="resume-preview">
                            <h3>PRAMSU PANDEY</h3>
                            <div class="contact-info">
                                <div class="contact-item">
                                    <i class="fas fa-envelope"></i>
                                    <span>pramsu.pandey@outlook.com</span>
                                </div>
                                <div class="contact-item">
                                    <i class="fas fa-phone"></i>
                                    <span>+1 (613) 204-3411</span>
                                </div>
                                <div class="contact-item">
                                    <i class="fab fa-github"></i>
                                    <a href="https://github.com/pjontop" target="_blank">github.com/pjontop</a>
                                </div>
                                <div class="contact-item">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>Ottawa, Ontario, Canada, 207 Flowing Creek Circle, K2M0K1</span>
                                </div>
                            </div>
                            
                            <h4>SUMMARY</h4>
                            <p>Visionary and exceptionally driven Grade 9 student with an extraordinary passion for leveraging cutting-edge AI/ML and full-stack development to tackle complex global challenges in healthcare and education. Demonstrates remarkable technical leadership through groundbreaking projects including a revolutionary 360 education platform, pioneering AI healthcare prototype "Mesa," and an ambitious autonomous drone system engineered from the ground up.</p>
                            
                            <h4>TECHNICAL SKILLS</h4>
                            <p><strong>Programming Languages:</strong> Python, Java, C, C++, HTML, CSS, JavaScript, TypeScript</p>
                            <p><strong>Advanced Frameworks:</strong> React, React Native, Node.js, Express, TensorFlow, AI/ML, Firebase</p>
                            <p><strong>Hardware Engineering:</strong> KiCad (Advanced PCB Design), Mechanical Engineering, Autonomous Systems Integration</p>
                            <p><strong>Professional Tools:</strong> Git, Docker, GitHub, Advanced Development Environments</p>
                            
                            <h4>EDUCATION</h4>
                            <p><strong>High School Student</strong> | Ottawa Carleton District School Board | 2021 - Present</p>
                            <p>Currently in Grade 9, enrolled in Pre-IB Program | GPA: 3.9</p>
                            
                            <h4>KEY PROJECTS</h4>
                            <p><strong>Autonomous Drone Development</strong> - Designing autonomous drone system from scratch including PCB design and software development</p>
                            <p><strong>360 Education Platform</strong> - Developing comprehensive educational platform aimed at streamlining student experiences</p>
                            <p><strong>Healthcare Management Research - "Mesa" Prototype</strong> - Designed AI/ML-powered prototype for optimizing medical resource distribution</p>
                            
                            <h4>AWARDS & ACHIEVEMENTS</h4>
                            <p>• Nokia Hackathon Winner (2024)</p>
                            <p>• Excellent Research Award – Qualia Global Scholars Program (Stanford University) (2022)</p>
                            <p>• Top 25% – Beaver Computing Contest (BCC) (2023)</p>
                            <p>• Excellence in Social Studies Award (2023)</p>
                            <p>• Top 10% – Kangaroo Math Contest (2021)</p>
                        </div>
                        
                        <h2>📝 Sample Cover Letter</h2>
                        <div class="resume-preview">
                            <p><strong>Pramsu Pandey</strong><br>
                            207 Flowing Creek Circle<br>
                            Ottawa, Ontario, K2M 0K1<br>
                            +1 (613) 204-3411<br>
                            pramsu.pandey@outlook.com<br>
                            GitHub: github.com/pjontop</p>
                            
                            <p>July 21, 2025</p>
                            
                            <p>[Hiring Manager's Name]<br>
                            [Job Title]<br>
                            [Company Name]<br>
                            [Company Address]</p>
                            
                            <p>Dear Mr./Ms. [Last Name],</p>
                            
                            <p>I am writing to express my strong interest in the [Software Engineering Intern/Junior Developer] position at [Company Name], which I discovered through [source]. As a Pre-IB student with a 3.9 GPA and a deep passion for AI, full-stack development, and impactful innovation, I am excited about the opportunity to contribute to your team. Your commitment to cutting-edge technology and real-world problem solving aligns perfectly with the values that drive my work.</p>
                            
                            <p>Over the past year, I have led several complex technical initiatives that blend software engineering with a focus on social impact. I'm currently developing an autonomous drone system from the ground up—including PCB design, flight control algorithms, and sensor integration—and also built "Mesa," an AI-driven healthcare resource optimization tool that earned recognition in a Stanford-affiliated global research program. I have strong hands-on experience in Python, JavaScript, React, Node.js, and embedded systems, along with a growing portfolio of projects in both software and hardware.</p>
                            
                            <p>In addition to my technical work, I'm organizing "Daydream Ottawa," the capital's largest youth-led hackathon, where I coordinate logistics, secure sponsorships, and lead workshops to inspire fellow students. My ability to manage large-scale projects, collaborate across teams, and mentor others reflects my dedication to both engineering excellence and community growth. I'm confident that I can bring this same energy, discipline, and creativity to your organization.</p>
                            
                            <p>Thank you for considering my application. I would love to further discuss how I can contribute to your team and continue to grow as a developer. Please feel free to reach out to me at pramsu.pandey@outlook.com or +1 (613) 204-3411. I'll follow up within the next week unless your posting requests otherwise.</p>
                            
                            <p>Yours sincerely,<br>
                            Pramsu Pandey</p>
                        </div>
                    </div>
                </div>
            `,
            credentials: `
                <div class="app-content">
                    <h1>🏆 Credentials & Achievements</h1>
                    
                    <h2>Major Achievements</h2>
                    
                    <div class="achievement-card">
                        <h4>🥇 Nokia Hackathon Winner (2024)</h4>
                        <p><strong>Achievement:</strong> First place winner in competitive hackathon environment</p>
                        <p><strong>Recognition:</strong> Recognized for exceptional technical innovation and problem-solving</p>
                        <p><strong>Impact:</strong> Demonstrated ability to deliver innovative solutions under pressure while competing against experienced developers</p>
                        <p><strong>Skills Demonstrated:</strong> Rapid prototyping, team leadership, technical presentation, innovative problem-solving</p>
                    </div>
                    
                    <div class="achievement-card">
                        <h4>🎓 Excellent Research Award – Qualia Global Scholars Program (Stanford University) (2022)</h4>
                        <p><strong>Achievement:</strong> Recognized for outstanding research leadership and innovation in competitive global summer program</p>
                        <p><strong>Project:</strong> Developed "Mesa," an AI-powered healthcare management prototype aimed at improving emergency medical response systems worldwide</p>
                        <p><strong>Recognition:</strong> Selected from thousands of global applicants and recognized among top performers</p>
                        <p><strong>Impact:</strong> Research focused on addressing critical global healthcare inefficiencies through innovative AI/ML solutions</p>
                        <p><strong>Skills Demonstrated:</strong> Advanced research methodology, AI/ML implementation, global health analysis, technical writing</p>
                    </div>
                    
                    <div class="achievement-card">
                        <h4>💻 Top 25% – Beaver Computing Contest (BCC) (2023)</h4>
                        <p><strong>Achievement:</strong> National distinction for scoring in top 25% of participants</p>
                        <p><strong>Competition:</strong> Prestigious computer science and logic competition hosted by University of Waterloo</p>
                        <p><strong>Recognition:</strong> Demonstrated exceptional computational thinking and problem-solving abilities</p>
                        <p><strong>Impact:</strong> Competed against thousands of students nationwide, showcasing advanced algorithmic thinking</p>
                        <p><strong>Skills Demonstrated:</strong> Algorithmic problem-solving, computational logic, time management under pressure</p>
                    </div>
                    
                    <h2>Additional Recognitions</h2>
                    
                    <div class="achievement-card">
                        <h4>📚 Excellence in Social Studies Award (2023)</h4>
                        <p>Recognized for exceptional performance in Grade 8 Social Studies, demonstrating advanced understanding of historical, political, and social systems with strong critical thinking and civic awareness.</p>
                    </div>
                    
                    <div class="achievement-card">
                        <h4>🔢 Top 10% – Kangaroo Math Contest (2021)</h4>
                        <p>Placed in the top 10% nationwide in the Kangaroo Math Contest during Grade 6, demonstrating early mathematical talent and analytical reasoning.</p>
                    </div>
                    
                    <h2>Professional References</h2>
                    
                    <div class="contact-info">
                        <h3>Brian Sha - Stanford Qualia Global Scholars</h3>
                        <div class="contact-item">
                            <i class="fas fa-quote-left"></i>
                            <span>"Excellent Research and Great Execution"</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>Brian.sha@stanford.edu</span>
                        </div>
                    </div>
                    
                    <h2>Documentation & Evidence</h2>
                    <p>All achievements are documented and verifiable. Physical certificates and digital badges available upon request. Portfolio includes code repositories, research papers, and project demonstrations showcasing the depth and quality of work behind each recognition.</p>
                </div>
            `,
            experience: `
                <div class="app-content">
                    <h1>💼 Volunteer & Work Experience</h1>
                    
                    <h2>Leadership & Community Impact</h2>
                    
                    <div class="project-card">
                        <h4>🎯 "Daydream Ottawa" Hackathon Organizer</h4>
                        <p><strong>Organization:</strong> Hack Club | Current Role</p>
                        <p><strong>Responsibility:</strong> Founding organizer of Ottawa's premier technology event, orchestrating Canada's capital's largest hackathon</p>
                        
                        <h5>Key Responsibilities:</h5>
                        <ul>
                            <li><strong>Event Coordination:</strong> Masterfully coordinating complex logistics for 200+ participants, multiple venues, and 48-hour event duration</li>
                            <li><strong>Sponsorship Management:</strong> Securing major sponsorships from technology companies, educational institutions, and local businesses</li>
                            <li><strong>Community Building:</strong> Curating exceptional participant experiences and building Ottawa's next generation of innovators</li>
                            <li><strong>Workshop Leadership:</strong> Designing and leading technical workshops on AI/ML, full-stack development, and entrepreneurship</li>
                            <li><strong>Mentor Coordination:</strong> Recruiting and managing industry mentors to guide participant teams</li>
                        </ul>
                        
                        <h5>Impact & Achievements:</h5>
                        <ul>
                            <li>Pioneering leader building unprecedented collaboration in the regional tech ecosystem</li>
                            <li>Created platform for 200+ young innovators to showcase their skills</li>
                            <li>Established partnerships with major tech companies and educational institutions</li>
                            <li>Generated significant media coverage and community engagement</li>
                        </ul>
                    </div>
                    
                    <div class="project-card">
                        <h4>👨‍🏫 Software Development Mentor & Team Leader</h4>
                        <p><strong>Duration:</strong> Grades 7-9 | Ongoing</p>
                        <p><strong>Role:</strong> Transformational leader guiding multiple advanced coding initiatives while elevating peer technical capabilities</p>
                        
                        <h5>Key Responsibilities:</h5>
                        <ul>
                            <li><strong>Technical Mentorship:</strong> Masterfully mentor teammates across diverse programming languages including Python, Java, JavaScript, and C++</li>
                            <li><strong>Architecture Guidance:</strong> Leading architectural design decisions and teaching best practices in software development</li>
                            <li><strong>Project Leadership:</strong> Managing multiple concurrent projects while ensuring high code quality and timely delivery</li>
                            <li><strong>Skill Development:</strong> Conducting regular code reviews and providing constructive feedback to improve team capabilities</li>
                            <li><strong>Innovation Facilitation:</strong> Fostering collaborative excellence and pushing boundaries of what student teams can achieve</li>
                        </ul>
                        
                        <h5>Notable Projects Led:</h5>
                        <ul>
                            <li><strong>Airline Management System:</strong> Led team of 4 students in developing comprehensive airline management software using Java and Python</li>
                            <li><strong>Educational Platform Initiatives:</strong> Mentored peers in contributing to the 360 Education Platform development</li>
                            <li><strong>Hackathon Team Preparation:</strong> Prepared multiple teams for regional and national coding competitions</li>
                        </ul>
                    </div>
                    
                    <div class="project-card">
                        <h4>🗣️ Debate Club - Core Member & Peer Coach</h4>
                        <p><strong>Duration:</strong> Grades 7-9 | Active Member</p>
                        <p><strong>Role:</strong> Leading practice sessions and mentoring newer members in strategy development</p>
                        
                        <h5>Key Responsibilities:</h5>
                        <ul>
                            <li><strong>Coaching & Mentorship:</strong> Lead practice sessions for newer members, teaching research techniques and argumentation strategies</li>
                            <li><strong>Competition Participation:</strong> Engage in high-level debates on complex global and social issues</li>
                            <li><strong>Critical Thinking Leadership:</strong> Model evidence-based argumentation and real-time critical thinking for team members</li>
                            <li><strong>Research Coordination:</strong> Coordinate team research efforts on complex topics including technology policy, global health, and social justice</li>
                        </ul>
                        
                        <h5>Skills Developed & Demonstrated:</h5>
                        <ul>
                            <li>Advanced public speaking and presentation skills</li>
                            <li>Research methodology and evidence evaluation</li>
                            <li>Quick thinking and adaptation under pressure</li>
                            <li>Leadership in collaborative intellectual environments</li>
                        </ul>
                    </div>
                    
                    <h2>Additional Leadership Roles</h2>
                    
                    <div class="skill-grid">
                        <div class="skill-card">
                            <h3>📊 Math Club - Competitor & Peer Motivator</h3>
                            <p><strong>Grades 7-8</strong></p>
                            <ul>
                                <li>Active participant in Canada Jay Mathematical Contest and other competitions</li>
                                <li>Led informal study groups to enhance problem-solving skills across the club</li>
                                <li>Demonstrated intellectual leadership and commitment to peer development</li>
                            </ul>
                        </div>
                        
                        <div class="skill-card">
                            <h3>⚽ Sports Leadership</h3>
                            <p><strong>Grades 6-9</strong></p>
                            <ul>
                                <li>Participated in soccer, Brazilian Jiu-Jitsu, Muay Thai, skiing, and swimming</li>
                                <li>Known for taking initiative, adapting to team needs, and encouraging others</li>
                                <li>Developed resilience, risk-taking abilities, and situational leadership skills</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h2>Community Impact Summary</h2>
                    <p>Through these experiences, I have consistently demonstrated the ability to lead, mentor, and inspire others while managing complex projects and responsibilities. My volunteer work has directly impacted hundreds of peers and community members, fostering innovation, technical skill development, and collaborative problem-solving across multiple domains.</p>
                </div>
            `,
            interview: `
                <div class="app-content">
                    <h1>🎤 Interview Question Responses</h1>
                    <p>Below are my responses to common interview questions. Each response demonstrates my self-awareness, growth mindset, and leadership capabilities.</p>
                    
                    <div class="interview-section">
                        <div class="interview-question">1. Tell me about something about yourself that you are trying to work on or improve. Why do you feel like that is something important for your work life?</div>
                        <div class="interview-answer">
                            <p>One area I'm actively working to improve is my ability to delegate effectively while maintaining high standards. As someone who's passionate about excellence and has experience leading technical projects like our autonomous drone development and organizing "Daydream Ottawa," I sometimes find myself taking on too many responsibilities personally rather than empowering team members to grow.</p>
                            
                            <p>I recognize this is crucial for my work life because effective delegation isn't just about reducing my workload—it's about developing others, scaling impact, and creating sustainable team dynamics. In my role organizing Canada's largest youth hackathon, I've learned that when I delegate thoughtfully and provide clear guidance, team members often exceed my expectations and bring innovative perspectives I wouldn't have considered.</p>
                            
                            <p>I'm addressing this by implementing structured check-ins with team members, clearly defining expectations upfront, and creating mentorship opportunities where I can guide others while allowing them to take ownership. This approach has already improved our project outcomes and helped develop stronger technical capabilities across our teams.</p>
                        </div>
                    </div>
                    
                    <div class="interview-section">
                        <div class="interview-question">2. What strategies do you use to overcome stress?</div>
                        <div class="interview-answer">
                            <p>I've developed a multi-faceted approach to stress management that's essential given my demanding schedule balancing a 3.9 GPA in Pre-IB, multiple technical projects, and organizing major events like "Daydream Ottawa."</p>
                            
                            <p><strong>Physical Activity:</strong> I maintain regular training in Brazilian Jiu-Jitsu and Muay Thai, which provides both physical stress relief and mental clarity. These disciplines have taught me to stay calm under pressure and think strategically even in challenging situations.</p>
                            
                            <p><strong>Structured Planning:</strong> I use time-blocking and project management tools to break complex projects like our autonomous drone development into manageable tasks. This prevents overwhelm and provides a clear sense of progress.</p>
                            
                            <p><strong>Technical Problem-Solving as Meditation:</strong> Interestingly, I find that diving deep into coding or working on circuit design for our drone project actually helps me decompress. The focused problem-solving activates a flow state that reduces stress.</p>
                            
                            <p><strong>Community Connection:</strong> Mentoring peers and participating in collaborative projects reminds me that challenges are shared experiences. Teaching others often helps me gain new perspectives on my own obstacles.</p>
                            
                            <p>These strategies have proven essential for maintaining high performance across multiple demanding commitments while preserving my mental well-being.</p>
                        </div>
                    </div>
                    
                    <div class="interview-section">
                        <div class="interview-question">3. What accomplishment in your life are you most proud of?</div>
                        <div class="interview-answer">
                            <p>While I'm proud of recognition like winning the Nokia Hackathon and receiving the Excellent Research Award from Stanford's Qualia Global Scholars Program, my greatest accomplishment is creating "Daydream Ottawa" and building a lasting impact on my local tech community.</p>
                            
                            <p>What makes me most proud isn't just the scale—organizing Canada's capital's largest youth hackathon—but the ripple effect it's created. I've watched students who attended our first event go on to start their own projects, pursue computer science education, and even launch their own startups. Several participants have told me that Daydream Ottawa was the first time they realized they could be creators of technology, not just consumers.</p>
                            
                            <p>The accomplishment required every skill I'd developed: technical expertise to design workshops, leadership to coordinate sponsors and volunteers, communication to inspire participants, and persistence to overcome the inevitable challenges of organizing a large-scale event. But seeing a shy Grade 7 student present their first app to a room full of industry mentors, or watching teams form friendships that extend far beyond the event, reminds me why I'm passionate about using technology to build community.</p>
                            
                            <p>This accomplishment represents my core belief: that the greatest impact comes not just from what we build, but from empowering others to build alongside us. It's a foundation I plan to carry into my future career in technology and innovation.</p>
                        </div>
                    </div>
                    
                    <div class="interview-section">
                        <div class="interview-question">4. Tell me about a time you found yourself in a leadership role. What did you learn from it?</div>
                        <div class="interview-answer">
                            <p>During the development of our Airline Management System project, I found myself naturally stepping into a leadership role when our team of four was struggling with conflicting ideas about system architecture and development approach.</p>
                            
                            <p><strong>The Situation:</strong> Two team members wanted to use Java for the entire system, while another preferred Python, and we were facing a deadline with no clear direction. Rather than letting the debate continue, I suggested we step back and align on our goals first, then choose technologies based on what would best serve our users.</p>
                            
                            <p><strong>My Approach:</strong> I organized structured sessions where each team member could present their technical reasoning, then facilitated a decision-making process based on objective criteria like performance requirements, team expertise, and long-term maintainability. We ultimately chose a hybrid approach using Java for the core logic and Python for data processing.</p>
                            
                            <p><strong>Key Learnings:</strong></p>
                            <ul>
                                <li><strong>Leadership isn't about having all the answers</strong>—it's about creating space for the best ideas to emerge from the team</li>
                                <li><strong>Technical decisions should serve user needs</strong>, not just reflect personal preferences or familiarity</li>
                                <li><strong>Structured processes can turn conflict into collaboration</strong> when team members feel heard and respected</li>
                                <li><strong>Teaching while leading</strong> creates stronger teams; I spent time helping teammates understand new concepts rather than just assigning tasks</li>
                            </ul>
                            
                            <p>This experience shaped how I approach leadership in all my projects, from organizing Daydream Ottawa to mentoring peers. I learned that effective leadership combines technical competence with emotional intelligence and genuine care for team development.</p>
                        </div>
                    </div>
                    
                    <div class="interview-section">
                        <div class="interview-question">5. Tell me about a time you failed. What did you learn from it?</div>
                        <div class="interview-answer">
                            <p>During my first attempt at developing the autonomous flight control system for our drone project, I experienced a significant failure that taught me valuable lessons about iterative development and the importance of testing assumptions early.</p>
                            
                            <p><strong>The Failure:</strong> I spent three weeks developing what I thought was an elegant autonomous navigation algorithm, confident in my approach based on research papers and theoretical understanding. When we finally tested it with our physical drone prototype, it immediately crashed due to sensor lag issues I hadn't anticipated. Worse, the crash damaged components we'd spent weeks fabricating, setting our project back significantly.</p>
                            
                            <p><strong>My Initial Reaction:</strong> I was devastated and embarrassed. As someone who takes pride in technical excellence and had been mentoring others, failing so publicly in front of my team was difficult to accept.</p>
                            
                            <p><strong>What I Learned:</strong></p>
                            <ul>
                                <li><strong>Theory must be validated incrementally:</strong> I should have started with simple simulations, then basic hardware tests, before attempting complex autonomous behavior</li>
                                <li><strong>Real-world systems have constraints that papers often omit:</strong> Sensor latency, environmental interference, and hardware limitations require practical experience, not just theoretical knowledge</li>
                                <li><strong>Failure is data, not defeat:</strong> The crash taught us more about our system's limitations in 30 seconds than weeks of theoretical work</li>
                                <li><strong>Team resilience matters more than individual perfection:</strong> My team's response—immediately brainstorming solutions rather than assigning blame—showed me the value of psychological safety in innovation</li>
                            </ul>
                            
                            <p><strong>The Outcome:</strong> We rebuilt with a modular approach, testing each component thoroughly. The final system is more robust and reliable than my original design would have been. More importantly, this experience made me a better mentor—I now emphasize iterative testing and learning from failure as core principles when guiding others.</p>
                            
                            <p>This failure taught me that in complex technical projects, the question isn't whether you'll encounter setbacks, but how quickly you can learn from them and adapt. It's a mindset that has served me well in subsequent projects and competitions.</p>
                        </div>
                    </div>
                    
                    <div style="text-align: center; margin-top: 40px; padding: 20px; background: rgba(102, 126, 234, 0.1); border-radius: 12px;">
                        <p><em>Note: These responses demonstrate my ability to reflect critically on experiences, learn from challenges, and apply insights to future situations. Each answer showcases specific examples while highlighting transferable skills relevant to professional environments.</em></p>
                    </div>
                </div>
            `,
            contact: `
                <div class="app-content">
                    <h1>📞 Contact Information</h1>
                    
                    <div style="text-align: center; margin: 40px 0;">
                        <div style="font-size: 64px; margin-bottom: 20px;">📬</div>
                        <h2>Let's Connect!</h2>
                        <p style="font-size: 18px; color: #667eea;">I'm always excited to discuss technology, innovation, and opportunities to create positive impact.</p>
                    </div>
                    
                    <div class="contact-info">
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <div>
                                <strong>Email:</strong>
                                <a href="mailto:pramsu.pandey@outlook.com">pramsu.pandey@outlook.com</a>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <div>
                                <strong>Phone:</strong>
                                <a href="tel:+16132043411">+1 (613) 204-3411</a>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <i class="fab fa-github"></i>
                            <div>
                                <strong>GitHub:</strong>
                                <a href="https://github.com/pjontop" target="_blank">github.com/pjontop</a>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <strong>Location:</strong>
                                <span>Ottawa, Ontario, Canada<br>207 Flowing Creek Circle, K2M0K1</span>
                            </div>
                        </div>
                    </div>
                    
                    <h2>🤝 Let's Collaborate</h2>
                    <div class="skill-grid">
                        <div class="skill-card">
                            <h3>💼 Professional Opportunities</h3>
                            <p>Seeking internships, mentorship opportunities, and chances to contribute to meaningful technology projects.</p>
                        </div>
                        <div class="skill-card">
                            <h3>🚀 Project Collaboration</h3>
                            <p>Open to collaborating on AI/ML projects, hackathons, and innovative solutions to global challenges.</p>
                        </div>
                        <div class="skill-card">
                            <h3>🎓 Speaking & Mentoring</h3>
                            <p>Available for speaking at events, mentoring other young developers, and sharing insights on technology leadership.</p>
                        </div>
                        <div class="skill-card">
                            <h3>🌟 Daydream Ottawa</h3>
                            <p>Interested in sponsoring or participating in Canada's largest youth hackathon? Let's discuss partnership opportunities.</p>
                        </div>
                    </div>
                    
                    <h2>📱 Response Time</h2>
                    <p>I typically respond to emails within 24-48 hours during school days, and often sooner. For urgent matters related to Daydream Ottawa or time-sensitive opportunities, feel free to call directly.</p>
                    
                    <div style="text-align: center; margin-top: 40px;">
                        <a href="mailto:pramsu.pandey@outlook.com" class="btn">
                            <i class="fas fa-envelope" style="margin-right: 8px;"></i>
                            Send me an email
                        </a>
                    </div>
                    
                    <div style="margin-top: 40px; padding: 20px; background: rgba(102, 126, 234, 0.1); border-radius: 12px;">
                        <h3>🎯 What I'm Looking For</h3>
                        <ul>
                            <li><strong>Internship Opportunities:</strong> Summer or part-time positions in AI/ML, full-stack development, or hardware engineering</li>
                            <li><strong>Mentorship:</strong> Guidance from experienced professionals in technology leadership and entrepreneurship</li>
                            <li><strong>Research Collaborations:</strong> Opportunities to contribute to meaningful research in healthcare technology or educational innovation</li>
                            <li><strong>Speaking Engagements:</strong> Chances to share my experiences with other young developers and inspire the next generation</li>
                        </ul>
                    </div>
                </div>
            `
        };
        return content[appName] || '<div class="app-content"><h1>Application Content</h1><p>Content coming soon...</p></div>';
    }

    closeWindow(window) {
        const index = this.windows.findIndex(w => w.element === window);
        if (index > -1) {
            this.windows.splice(index, 1);
            window.remove();
            
            if (this.windows.length === 0) {
                this.showWelcomeMessage();
            }
        }
    }

    minimizeWindow(window) {
        window.style.transform = 'scale(0.1)';
        window.style.opacity = '0';
        setTimeout(() => {
            window.style.display = 'none';
        }, 200);
    }

    toggleMaximize(window) {
        const windowData = this.windows.find(w => w.element === window);
        if (windowData) {
            if (windowData.isMaximized) {
                window.classList.remove('maximized');
                windowData.isMaximized = false;
            } else {
                window.classList.add('maximized');
                windowData.isMaximized = true;
            }
        }
    }

    bringToFront(window) {
        window.style.zIndex = ++this.zIndex;
    }

    makeDraggable(window) {
        const header = window.querySelector('.window-header');
        let isDragging = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;

        header.addEventListener('mousedown', dragStart);

        function dragStart(e) {
            const windowData = portfolioOS.windows.find(w => w.element === window);
            if (windowData && windowData.isMaximized) return;

            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;

            if (e.target === header || header.contains(e.target)) {
                isDragging = true;
            }

            portfolioOS.bringToFront(window);
        }

        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', dragEnd);

        function drag(e) {
            if (isDragging) {
                e.preventDefault();
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;

                xOffset = currentX;
                yOffset = currentY;

                setTranslate(currentX, currentY, window);
            }
        }

        function setTranslate(xPos, yPos, el) {
            el.style.left = xPos + 'px';
            el.style.top = yPos + 'px';
        }

        function dragEnd(e) {
            initialX = currentX;
            initialY = currentY;
            isDragging = false;
        }
    }

    loadApps() {
        // Apps are loaded dynamically when clicked
        console.log('Portfolio OS initialized successfully');
    }
}

// Initialize the Portfolio OS when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioOS = new PortfolioOS();
});
