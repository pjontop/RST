import React from 'react';

interface DesktopProps {
  showWelcome: boolean;
  onDesktopClick: () => void;
}

const Desktop: React.FC<DesktopProps> = ({ showWelcome, onDesktopClick }) => {
  return (
    <div className="desktop" onClick={onDesktopClick}>
      <div className="desktop-background"></div>
      
      {showWelcome && (
        <div className="welcome-message">
          <div className="welcome-content">
            <h1>Welcome to Pramsu's Portfolio OS</h1>
            <p>Grade 9 Visionary • AI/ML Developer • Hackathon Organizer</p>
            <p>Click on any app in the dock below to explore my portfolio</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Desktop;
