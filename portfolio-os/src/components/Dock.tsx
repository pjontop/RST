import React, { useState } from 'react';
import { Home, User, FileText, Trophy, Briefcase, Mic, Mail, Target, Trash2 } from 'lucide-react';

interface DockProps {
  onOpenApp: (appName: string) => void;
}

const Dock: React.FC<DockProps> = ({ onOpenApp }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const dockItems = [
    { id: 'home', icon: Home, tooltip: 'Home', app: 'home' },
    { id: 'about', icon: User, tooltip: 'About Me', app: 'about' },
    { id: 'resume', icon: FileText, tooltip: 'Resume', app: 'resume' },
    { id: 'credentials', icon: Trophy, tooltip: 'Credentials', app: 'credentials' },
    { id: 'experience', icon: Briefcase, tooltip: 'Experience', app: 'experience' },
    { id: 'interview', icon: Mic, tooltip: 'Interview', app: 'interview' },
    { id: 'smartgoal', icon: Target, tooltip: 'SMART Goal', app: 'smartgoal' },
    { id: 'contact', icon: Mail, tooltip: 'Contact', app: 'contact' },
  ];

  const handleItemClick = (appName: string) => {
    if (appName !== 'trash') {
      onOpenApp(appName);
    }
  };

  return (
    <div className="dock">
      {dockItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <div
            key={item.id}
            className="dock-item"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => handleItemClick(item.app)}
          >
            <div className="dock-icon">
              <IconComponent size={24} />
            </div>
            {hoveredItem === item.id && (
              <div className="dock-tooltip">{item.tooltip}</div>
            )}
          </div>
        );
      })}
      
      <div className="dock-divider"></div>
      
      <div
        className="dock-item"
        onMouseEnter={() => setHoveredItem('trash')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <div className="dock-icon">
          <Trash2 size={24} />
        </div>
        {hoveredItem === 'trash' && (
          <div className="dock-tooltip">Trash</div>
        )}
      </div>
    </div>
  );
};

export default Dock;
