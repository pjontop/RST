export interface AppWindow {
  id: string;
  app: string;
  title: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  isMaximized: boolean;
  isMinimized: boolean;
  zIndex: number;
}

export interface DockItem {
  id: string;
  icon: string;
  tooltip: string;
  app: string;
}

export type AppName = 
  | 'home' 
  | 'about' 
  | 'resume' 
  | 'credentials' 
  | 'experience' 
  | 'interview' 
  | 'contact';
