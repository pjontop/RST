import React, { useState, useEffect } from 'react';
import { Apple, Wifi, Battery } from 'lucide-react';

const MenuBar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  return (
    <div className="menu-bar">
      <div className="menu-left">
        <Apple size={18} style={{ marginRight: '12px' }} />
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Window</span>
        <span>Help</span>
      </div>
      <div className="menu-right">
        <span>{formatTime(currentTime)}</span>
        <Wifi size={16} style={{ marginLeft: '12px' }} />
        <Battery size={16} style={{ marginLeft: '8px' }} />
      </div>
    </div>
  );
};

export default MenuBar;
