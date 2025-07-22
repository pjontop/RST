import React, { useRef, useEffect } from 'react';
import { AppWindow } from '../types';
import AppContent from './AppContent';

interface WindowProps {
  window: AppWindow;
  onClose: (windowId: string) => void;
  onMinimize: (windowId: string) => void;
  onMaximize: (windowId: string) => void;
  onBringToFront: (windowId: string) => void;
  onUpdatePosition: (windowId: string, position: { x: number; y: number }) => void;
}

const Window: React.FC<WindowProps> = ({
  window,
  onClose,
  onMinimize,
  onMaximize,
  onBringToFront,
  onUpdatePosition,
}) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current && !window.isMaximized) {
        const newX = e.clientX - dragOffset.current.x;
        const newY = e.clientY - dragOffset.current.y;
        onUpdatePosition(window.id, { x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [window.id, window.isMaximized, onUpdatePosition]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (window.isMaximized) return;
    
    isDragging.current = true;
    const rect = windowRef.current?.getBoundingClientRect();
    if (rect) {
      dragOffset.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
    onBringToFront(window.id);
  };

  const windowStyle: React.CSSProperties = {
    position: 'absolute',
    left: window.isMaximized ? 10 : window.position.x,
    top: window.isMaximized ? 10 : window.position.y,
    width: window.isMaximized ? 'calc(100vw - 20px)' : window.size.width,
    height: window.isMaximized ? 'calc(100vh - 118px)' : window.size.height,
    zIndex: window.zIndex,
    display: window.isMinimized ? 'none' : 'block',
  };

  return (
    <div
      ref={windowRef}
      className={`window ${window.isMaximized ? 'maximized' : ''}`}
      style={windowStyle}
      onClick={() => onBringToFront(window.id)}
    >
      <div
        ref={headerRef}
        className="window-header"
        onMouseDown={handleMouseDown}
      >
        <div className="window-controls">
          <div
            className="window-control close"
            onClick={() => onClose(window.id)}
          ></div>
          <div
            className="window-control minimize"
            onClick={() => onMinimize(window.id)}
          ></div>
          <div
            className="window-control maximize"
            onClick={() => onMaximize(window.id)}
          ></div>
        </div>
        <div className="window-title">{window.title}</div>
      </div>
      <div className="window-content">
        <AppContent appName={window.app} />
      </div>
    </div>
  );
};

export default Window;
