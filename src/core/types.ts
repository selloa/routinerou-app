export interface Task {
  id: string;
  name: string;
  duration: number; // in seconds
  completed: boolean;
}

export interface Preset {
  id: string;
  name: string;
  description: string;
  tasks: Omit<Task, 'id' | 'completed'>[];
}

export type AppMode = 'setup' | 'timer' | 'completion';

export interface TimerState {
  isRunning: boolean;
  currentTaskIndex: number;
  timeRemaining: number;
  totalTime: number;
  startTime: number | null;
}
