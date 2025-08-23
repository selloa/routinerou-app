import { getPlatformConfig } from './features';
import { PlatformConfig } from '../platform/interface';

// Detect platform based on environment
const detectPlatform = (): string => {
  // Check if we're in Electron
  if (typeof window !== 'undefined' && (window as any).electron) {
    return 'electron';
  }
  
  // Check if we're in a standalone HTML context
  if (typeof window !== 'undefined' && window.location.protocol === 'file:') {
    return 'web';
  }
  
  // Default to web
  return 'web';
};

// Get platform from environment variable or detect automatically
const getPlatform = (): string => {
  return import.meta.env.VITE_PLATFORM || detectPlatform();
};

// Environment configuration
export const config = {
  platform: getPlatform(),
  features: getPlatformConfig(getPlatform()),
  api: {
    baseUrl: import.meta.env.VITE_API_URL || '',
  },
  storage: {
    type: import.meta.env.VITE_STORAGE_TYPE || 'localStorage',
  },
  development: import.meta.env.DEV,
  production: import.meta.env.PROD,
};

// Export platform config for easy access
export const platformConfig: PlatformConfig = config.features;

// Helper function to check if a feature is enabled
export const isFeatureEnabled = (feature: keyof PlatformConfig['features']): boolean => {
  return config.features.features[feature] as boolean;
};

// Helper function to get platform-specific configuration
export const getPlatformSpecificConfig = <T>(
  webConfig: T,
  electronConfig: T,
  defaultConfig: T = webConfig
): T => {
  switch (config.platform) {
    case 'web':
      return webConfig;
    case 'electron':
      return electronConfig;
    default:
      return defaultConfig;
  }
};
