// Sound utility for playing beep sounds
export class SoundManager {
  private audioContext: AudioContext | null = null;
  private isSupported: boolean;

  constructor() {
    this.isSupported = typeof window !== 'undefined' && 'AudioContext' in window;
  }

  private getAudioContext(): AudioContext | null {
    if (!this.isSupported) return null;
    
    if (!this.audioContext) {
      this.audioContext = new AudioContext();
    }
    
    return this.audioContext;
  }

  playBeep(frequency: number = 800, duration: number = 200): void {
    const audioContext = this.getAudioContext();
    if (!audioContext) return;

    // Resume audio context if it's suspended (required for user interaction)
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = 'sine';

    // Create a smooth envelope
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration / 1000);
  }

  playRoutineStartBeep(): void {
    this.playBeep(1000, 300); // Higher pitch, longer duration for routine start
  }

  playTaskStartBeep(): void {
    this.playBeep(800, 200); // Medium pitch for task start
  }

  playRoutineCompleteBeep(): void {
    // Play a sequence of beeps for completion
    this.playBeep(1200, 150);
    setTimeout(() => this.playBeep(1000, 150), 200);
    setTimeout(() => this.playBeep(800, 300), 400);
  }
}

// Create a singleton instance
export const soundManager = new SoundManager();
