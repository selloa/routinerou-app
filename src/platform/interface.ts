export interface PlatformAdapter {
  // Storage
  saveData(key: string, data: any): Promise<void>;
  loadData(key: string): Promise<any>;
  
  // Notifications
  showNotification(title: string, message: string): void;
  
  // Audio
  playSound(soundType: 'start' | 'end' | 'break'): void;
  
  // System integration
  minimizeToTray(): void;
  setSystemTimer(duration: number): void;
  
  // Window management (for Electron)
  setWindowPosition(x: number, y: number): void;
  setWindowSize(width: number, height: number): void;
  setAlwaysOnTop(alwaysOnTop: boolean): void;
  
  // Platform info
  getPlatform(): string;
  getVersion(): string;
}

export interface PlatformConfig {
  platform: string;
  features: FeatureFlags;
  storage: StorageConfig;
  window: WindowConfig;
}

export interface FeatureFlags {
  systemTray: boolean;
  notifications: boolean;
  audio: boolean;
  offlineStorage: boolean;
  alwaysOnTop: boolean;
  draggable: boolean;
}

export interface StorageConfig {
  type: 'localStorage' | 'electron-store' | 'file';
  prefix?: string;
}

export interface WindowConfig {
  width: number;
  height: number;
  resizable: boolean;
  frame: boolean;
  transparent: boolean;
}
