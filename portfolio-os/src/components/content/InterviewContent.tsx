import React from 'react';

const InterviewContent: React.FC = () => {
  return (
    <>
      <h1>Interview Questions & Responses</h1>
      
      <div className="question-container">
        <h3>1. Tell me about something about yourself that you are trying to work on or improve. Why do you feel like that is something important for your work life?</h3>
        
        <div className="media-player">
          <audio controls>
            <source src="/audio/question1.mp3" type="audio/mpeg" />
            <source src="/audio/question1.wav" type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        </div>
        
        <p>I'm working on improving my time management skills, particularly balancing multiple high-impact projects simultaneously. Currently, I'm managing the autonomous drone development, the 360 Education Platform, and organizing Daydream Ottawa hackathon - all while maintaining my 3.9 GPA in the Pre-IB program. I've realized that as I take on more leadership responsibilities, I need to become more strategic about prioritizing tasks and delegating effectively. This is crucial for my future work life because in the tech industry, especially at innovative companies like Tesla, you're often juggling multiple complex projects with tight deadlines. Learning to manage competing priorities now will make me a more effective software engineer and team leader.</p>
      </div>

      <div className="question-container">
        <h3>2. What strategies do you use to overcome stress?</h3>
        
        <div className="media-player">
          <audio controls>
            <source src="/audio/question2.mp3" type="audio/mpeg" />
            <source src="/audio/question2.wav" type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        </div>
        
        <p>I use a combination of physical activity and structured problem-solving. When I'm feeling overwhelmed, I often turn to Brazilian Jiu-Jitsu or Muay Thai - the physical intensity helps me clear my mind and gain perspective. I also break down complex problems into smaller, manageable components, which I learned through my programming projects. For instance, when developing the Mesa healthcare prototype, I approached the overwhelming challenge of global healthcare inefficiencies by focusing on one specific problem at a time. Additionally, I find that mentoring my peers actually helps reduce my own stress - explaining concepts to others reinforces my own understanding and reminds me that challenges are surmountable.</p>
      </div>

      <div className="question-container">
        <h3>3. If there was one change you could make to your current school, what would it be and why?</h3>
        
        <div className="media-player">
          <audio controls>
            <source src="/audio/question3.mp3" type="audio/mpeg" />
            <source src="/audio/question3.wav" type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        </div>
        
        <p>I would implement more project-based learning opportunities that connect directly with real-world applications. While the Pre-IB program provides excellent academic rigor, I think students would benefit from more hands-on experiences that bridge classroom theory with practical problem-solving. For example, integrating coding projects into math classes or having science students work on actual research problems. This approach has worked incredibly well for me - my Mesa healthcare prototype and 360 Education Platform have taught me more about system design than traditional coursework alone. This change would better prepare all students for the collaborative, project-driven nature of modern workplaces.</p>
      </div>

      <div className="question-container">
        <h3>4. What accomplishment in your life are you most proud of?</h3>
        
        <div className="media-player">
          <audio controls>
            <source src="/audio/question4.mp3" type="audio/mpeg" />
            <source src="/audio/question4.wav" type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        </div>
        
        <p>I'm most proud of winning the Nokia Hackathon while simultaneously using that success to give back to my community through organizing Daydream Ottawa. The Nokia win validated my technical skills, but what makes me truly proud is how I leveraged that recognition to create Canada's capital's largest hackathon. It represents the intersection of my technical abilities and my commitment to fostering innovation in others. Organizing Daydream Ottawa has allowed me to mentor dozens of young developers, secure major sponsorships, and build a lasting platform for Ottawa's tech community. It demonstrates that success isn't just about individual achievement - it's about creating opportunities for others to succeed too.</p>
      </div>

      <div className="question-container">
        <h3>5. Tell me about a time you found yourself in a leadership role. What did you learn from it?</h3>
        
        <div className="media-player">
          <audio controls>
            <source src="/audio/question5.mp3" type="audio/mpeg" />
            <source src="/audio/question5.wav" type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        </div>
        
        <p>When I led the Airline Management System project as both team leader and technical mentor, I initially focused too heavily on the technical aspects and didn't pay enough attention to team dynamics. I noticed that while I was making good architectural decisions, some teammates were struggling to keep up, and communication was breaking down. I learned that effective leadership requires balancing technical excellence with people management. I started holding regular check-ins, breaking down complex tasks into smaller pieces, and creating more collaborative coding sessions. This experience taught me that the best technical solutions mean nothing if your team can't implement them effectively. It's a lesson I've applied to organizing Daydream Ottawa - ensuring every participant feels supported and engaged, not just the most experienced coders.</p>
      </div>

      <div className="question-container">
        <h3>6. Tell me about a time you failed. What did you learn from it?</h3>
        
        <div className="media-player">
          <audio controls>
            <source src="/audio/question6.mp3" type="audio/mpeg" />
            <source src="/audio/question6.wav" type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        </div>
        
        <p>During my first attempt at the Beaver Computing Contest in Grade 8, I scored much lower than expected because I rushed through problems without fully understanding the requirements. I was overconfident in my programming abilities and didn't take the time to carefully read and analyze each question. This failure taught me the importance of patience and thorough problem analysis - skills that are crucial in software development. I learned to slow down, break problems into components, and validate my understanding before jumping into solutions. When I retook the contest the following year and scored in the top 25%, it wasn't just because I had better technical skills, but because I had developed better problem-solving discipline. This experience now influences how I approach every coding project - I always start with careful requirements analysis and planning before writing a single line of code.</p>
      </div>
    </>
  );
};

export default InterviewContent;
