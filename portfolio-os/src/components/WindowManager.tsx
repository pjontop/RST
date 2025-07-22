import React from 'react';
import Window from './Window';
import { AppWindow } from '../types';

interface WindowManagerProps {
  windows: AppWindow[];
  onClose: (windowId: string) => void;
  onMinimize: (windowId: string) => void;
  onMaximize: (windowId: string) => void;
  onBringToFront: (windowId: string) => void;
  onUpdatePosition: (windowId: string, position: { x: number; y: number }) => void;
}

const WindowManager: React.FC<WindowManagerProps> = ({
  windows,
  onClose,
  onMinimize,
  onMaximize,
  onBringToFront,
  onUpdatePosition,
}) => {
  return (
    <div className="windows-container">
      {windows.map((window) => (
        <Window
          key={window.id}
          window={window}
          onClose={onClose}
          onMinimize={onMinimize}
          onMaximize={onMaximize}
          onBringToFront={onBringToFront}
          onUpdatePosition={onUpdatePosition}
        />
      ))}
    </div>
  );
};

export default WindowManager;
