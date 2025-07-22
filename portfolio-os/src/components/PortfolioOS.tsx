import React, { useState, useEffect } from 'react';
import MenuBar from './MenuBar';
import Desktop from './Desktop';
import Dock from './Dock';
import WindowManager from './WindowManager';
import { AppWindow } from '../types';
import '../styles/PortfolioOS.css';

const PortfolioOS: React.FC = () => {
  const [windows, setWindows] = useState<AppWindow[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [zIndex, setZIndex] = useState(100);

  const openApp = (appName: string) => {
    // Check if window already exists
    const existingWindow = windows.find(w => w.app === appName);
    if (existingWindow) {
      bringToFront(existingWindow.id);
      return;
    }

    const newZIndex = zIndex + 1;
    setZIndex(newZIndex);
    
    const newWindow: AppWindow = {
      id: Date.now().toString(),
      app: appName,
      title: getAppTitle(appName),
      position: { x: Math.random() * 200 + 50, y: Math.random() * 100 + 50 },
      size: { width: 800, height: 600 },
      isMaximized: false,
      isMinimized: false,
      zIndex: newZIndex
    };

    setWindows(prev => [...prev, newWindow]);
    setShowWelcome(false);
  };

  const closeWindow = (windowId: string) => {
    setWindows(prev => prev.filter(w => w.id !== windowId));
    if (windows.length === 1) {
      setShowWelcome(true);
    }
  };

  const minimizeWindow = (windowId: string) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId ? { ...w, isMinimized: true } : w
    ));
  };

  const maximizeWindow = (windowId: string) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId ? { ...w, isMaximized: !w.isMaximized } : w
    ));
  };

  const bringToFront = (windowId: string) => {
    const newZIndex = zIndex + 1;
    setZIndex(newZIndex);
    setWindows(prev => prev.map(w => 
      w.id === windowId ? { ...w, zIndex: newZIndex } : w
    ));
  };

  const updateWindowPosition = (windowId: string, position: { x: number; y: number }) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId ? { ...w, position } : w
    ));
  };

  const getAppTitle = (appName: string): string => {
    const titles: { [key: string]: string } = {
      home: 'Home - Portfolio OS',
      about: 'About Me',
      resume: 'Resume & Cover Letter',
      credentials: 'Credentials & Achievements',
      experience: 'Volunteer & Work Experience',
      interview: 'Interview Responses',
      contact: 'Contact Information'
    };
    return titles[appName] || 'Application';
  };

  const handleDesktopClick = () => {
    if (windows.length === 0) {
      setShowWelcome(true);
    }
  };

  return (
    <div className="portfolio-os">
      <MenuBar />
      <Desktop 
        showWelcome={showWelcome} 
        onDesktopClick={handleDesktopClick}
      />
      <WindowManager
        windows={windows}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onMaximize={maximizeWindow}
        onBringToFront={bringToFront}
        onUpdatePosition={updateWindowPosition}
      />
      <Dock onOpenApp={openApp} />
    </div>
  );
};

export default PortfolioOS;
