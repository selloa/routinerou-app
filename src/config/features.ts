import { FeatureFlags, StorageConfig, WindowConfig, PlatformConfig } from '../platform/interface';

export const getFeatureFlags = (platform: string): FeatureFlags => {
  switch (platform) {
    case 'web':
      return {
        systemTray: false,
        notifications: true,
        audio: true,
        offlineStorage: true,
        alwaysOnTop: false,
        draggable: false,
      };
    case 'electron':
      return {
        systemTray: true,
        notifications: true,
        audio: true,
        offlineStorage: true,
        alwaysOnTop: true,
        draggable: true,
      };
    default:
      return {
        systemTray: false,
        notifications: false,
        audio: false,
        offlineStorage: false,
        alwaysOnTop: false,
        draggable: false,
      };
  }
};

export const getStorageConfig = (platform: string): StorageConfig => {
  switch (platform) {
    case 'web':
      return {
        type: 'localStorage',
        prefix: 'routinery',
      };
    case 'electron':
      return {
        type: 'electron-store',
        prefix: 'routinery',
      };
    default:
      return {
        type: 'localStorage',
        prefix: 'routinery',
      };
  }
};

export const getWindowConfig = (platform: string): WindowConfig => {
  switch (platform) {
    case 'web':
      return {
        width: 500,
        height: 600,
        resizable: true,
        frame: true,
        transparent: false,
      };
    case 'electron':
      return {
        width: 400,
        height: 500,
        resizable: false,
        frame: false,
        transparent: true,
      };
    default:
      return {
        width: 500,
        height: 600,
        resizable: true,
        frame: true,
        transparent: false,
      };
  }
};

export const getPlatformConfig = (platform: string): PlatformConfig => {
  return {
    platform,
    features: getFeatureFlags(platform),
    storage: getStorageConfig(platform),
    window: getWindowConfig(platform),
  };
};
