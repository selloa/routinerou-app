import React from 'react';
import { usePlatform } from '../hooks/usePlatform';

interface PlatformWrapperProps {
  children: React.ReactNode;
  webFallback?: React.ReactNode;
  electronFallback?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const PlatformWrapper: React.FC<PlatformWrapperProps> = ({
  children,
  webFallback,
  electronFallback,
  className = '',
  style = {},
}) => {
  const { platform, isElectron, isWeb } = usePlatform();
  
  // Platform-specific styling
  const platformStyles: React.CSSProperties & { WebkitAppRegion?: string } = {
    ...style,
    ...(isElectron && {
      // Electron-specific styles for borderless window
      WebkitAppRegion: 'drag',
      userSelect: 'none',
    }),
  };

  // Platform-specific class names
  const platformClassName = `${className} platform-${platform}`.trim();

  // Render platform-specific fallback if provided
  if (isWeb && webFallback) {
    return (
      <div className={platformClassName} style={platformStyles}>
        {webFallback}
      </div>
    );
  }
  
  if (isElectron && electronFallback) {
    return (
      <div className={platformClassName} style={platformStyles}>
        {electronFallback}
      </div>
    );
  }
  
  return (
    <div className={platformClassName} style={platformStyles}>
      {children}
    </div>
  );
};

// Specialized wrapper for draggable areas in Electron
export const DraggableArea: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const { isElectron } = usePlatform();
  
  if (!isElectron) {
    return <>{children}</>;
  }

  return (
    <div 
      className={`draggable-area ${className}`.trim()}
      style={{
        WebkitAppRegion: 'drag',
        cursor: 'move',
      } as React.CSSProperties & { WebkitAppRegion: string }}
    >
      {children}
    </div>
  );
};

// Specialized wrapper for non-draggable areas in Electron
export const NonDraggableArea: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const { isElectron } = usePlatform();
  
  if (!isElectron) {
    return <>{children}</>;
  }

  return (
    <div 
      className={`non-draggable-area ${className}`.trim()}
      style={{
        WebkitAppRegion: 'no-drag',
      } as React.CSSProperties & { WebkitAppRegion: string }}
    >
      {children}
    </div>
  );
};
