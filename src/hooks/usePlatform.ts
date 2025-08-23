import { useState, useEffect, useMemo } from 'react';
import { PlatformAdapter } from '../platform/interface';
import { WebPlatformAdapter } from '../platform/web/adapter';
import { ElectronPlatformAdapter } from '../platform/electron/adapter';
import { config, isFeatureEnabled } from '../config/environment';

export const usePlatform = () => {
  const [platformAdapter, setPlatformAdapter] = useState<PlatformAdapter | null>(null);

  // Initialize platform adapter
  useEffect(() => {
    const initializePlatform = async () => {
      let adapter: PlatformAdapter;

      switch (config.platform) {
        case 'electron':
          adapter = new ElectronPlatformAdapter(config.features);
          break;
        case 'web':
        default:
          adapter = new WebPlatformAdapter(config.features);
          break;
      }

      setPlatformAdapter(adapter);
    };

    initializePlatform();
  }, []);

  // Memoized platform info
  const platformInfo = useMemo(() => ({
    platform: config.platform,
    features: config.features.features,
    isWeb: config.platform === 'web',
    isElectron: config.platform === 'electron',
  }), []);

  // Helper functions for common platform operations
  const platformHelpers = useMemo(() => ({
    // Storage helpers
    saveData: async (key: string, data: any) => {
      if (platformAdapter) {
        await platformAdapter.saveData(key, data);
      }
    },
    loadData: async (key: string) => {
      if (platformAdapter) {
        return await platformAdapter.loadData(key);
      }
      return null;
    },

    // Notification helpers
    showNotification: (title: string, message: string) => {
      if (platformAdapter && isFeatureEnabled('notifications')) {
        platformAdapter.showNotification(title, message);
      }
    },

    // Audio helpers
    playSound: (soundType: 'start' | 'end' | 'break') => {
      if (platformAdapter && isFeatureEnabled('audio')) {
        platformAdapter.playSound(soundType);
      }
    },

    // System helpers
    minimizeToTray: () => {
      if (platformAdapter && isFeatureEnabled('systemTray')) {
        platformAdapter.minimizeToTray();
      }
    },

    setSystemTimer: (duration: number) => {
      if (platformAdapter) {
        platformAdapter.setSystemTimer(duration);
      }
    },

    // Window helpers (Electron only)
    setWindowPosition: (x: number, y: number) => {
      if (platformAdapter && isFeatureEnabled('draggable')) {
        platformAdapter.setWindowPosition(x, y);
      }
    },

    setWindowSize: (width: number, height: number) => {
      if (platformAdapter) {
        platformAdapter.setWindowSize(width, height);
      }
    },

    setAlwaysOnTop: (alwaysOnTop: boolean) => {
      if (platformAdapter && isFeatureEnabled('alwaysOnTop')) {
        platformAdapter.setAlwaysOnTop(alwaysOnTop);
      }
    },
  }), [platformAdapter]);

  return {
    ...platformInfo,
    ...platformHelpers,
    adapter: platformAdapter,
    isReady: platformAdapter !== null,
  };
};
