import React from 'react';
import HomeContent from './content/HomeContent';
import AboutContent from './content/AboutContent';
import ResumeContent from './content/ResumeContent';
import CredentialsContent from './content/CredentialsContent';
import ExperienceContent from './content/ExperienceContent';
import InterviewContent from './content/InterviewContent';
import ContactContent from './content/ContactContent';
import SmartGoalContent from './content/SmartGoalContent';

interface AppContentProps {
  appName: string;
}

const AppContent: React.FC<AppContentProps> = ({ appName }) => {
  const renderContent = () => {
    switch (appName) {
      case 'home':
        return <HomeContent />;
      case 'about':
        return <AboutContent />;
      case 'resume':
        return <ResumeContent />;
      case 'credentials':
        return <CredentialsContent />;
      case 'experience':
        return <ExperienceContent />;
      case 'interview':
        return <InterviewContent />;
      case 'smartgoal':
        return <SmartGoalContent />;
      case 'contact':
        return <ContactContent />;
      default:
        return (
          <div className="app-content">
            <h1>Application Content</h1>
            <p>Content coming soon...</p>
          </div>
        );
    }
  };

  return <div className="app-content">{renderContent()}</div>;
};

export default AppContent;
