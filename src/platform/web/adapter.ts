import { PlatformAdapter, PlatformConfig } from '../interface';

export class WebPlatformAdapter implements PlatformAdapter {
  private config: PlatformConfig;

  constructor(config: PlatformConfig) {
    this.config = config;
  }

  async saveData(key: string, data: any): Promise<void> {
    if (this.config.features.offlineStorage) {
      const fullKey = this.config.storage.prefix ? `${this.config.storage.prefix}:${key}` : key;
      localStorage.setItem(fullKey, JSON.stringify(data));
    }
  }

  async loadData(key: string): Promise<any> {
    if (this.config.features.offlineStorage) {
      const fullKey = this.config.storage.prefix ? `${this.config.storage.prefix}:${key}` : key;
      const data = localStorage.getItem(fullKey);
      return data ? JSON.parse(data) : null;
    }
    return null;
  }

  showNotification(title: string, message: string): void {
    if (this.config.features.notifications && 'Notification' in window) {
      if (Notification.permission === 'granted') {
        new Notification(title, { body: message });
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            new Notification(title, { body: message });
          }
        });
      }
    }
  }

  playSound(soundType: 'start' | 'end' | 'break'): void {
    if (this.config.features.audio) {
      // Web audio implementation
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Different sounds for different events
      switch (soundType) {
        case 'start':
          oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
          break;
        case 'end':
          oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
          break;
        case 'break':
          oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
          break;
      }
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    }
  }

  minimizeToTray(): void {
    // Not available in web
    console.warn('minimizeToTray not available in web platform');
  }

  setSystemTimer(duration: number): void {
    // Web implementation using setTimeout
    setTimeout(() => {
      this.showNotification('Timer Complete', 'Your timer has finished!');
      this.playSound('end');
    }, duration * 1000);
  }

  setWindowPosition(_x: number, _y: number): void {
    // Not available in web
    console.warn('setWindowPosition not available in web platform');
  }

  setWindowSize(_width: number, _height: number): void {
    // Not available in web
    console.warn('setWindowSize not available in web platform');
  }

  setAlwaysOnTop(_alwaysOnTop: boolean): void {
    // Not available in web
    console.warn('setAlwaysOnTop not available in web platform');
  }

  getPlatform(): string {
    return 'web';
  }

  getVersion(): string {
    return '1.0.0';
  }
}
