import React from 'react';
import { Task, TimerState } from '../core/types';
import { formatTime, calculateProgress } from '../core/timer';
import { Pause, Play, RotateCcw } from 'lucide-react';

interface TimerModeProps {
  currentTask: Task | null;
  timerState: TimerState;
  totalTasks: number;
  currentTaskIndex: number;
  onPause: () => void;
  onResume: () => void;
  onReset: () => void;
}

const TimerMode: React.FC<TimerModeProps> = ({
  currentTask,
  timerState,
  totalTasks,
  currentTaskIndex,
  onPause,
  onResume,
  onReset,
}) => {
  if (!currentTask) {
    return (
      <div className="timer-container">
        <div className="empty-state">
          <h3>No tasks available</h3>
          <p>Please add some tasks to start your routine</p>
        </div>
      </div>
    );
  }

  const progress = calculateProgress(timerState.timeRemaining, timerState.totalTime);

  return (
    <div className="timer-container">
      {/* Progress indicator */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '24px',
        color: '#667eea',
        fontWeight: '600'
      }}>
        Task {currentTaskIndex + 1} of {totalTasks}
      </div>

      {/* Timer display */}
      <div className="timer-display">
        {formatTime(timerState.timeRemaining)}
      </div>

      {/* Current task name */}
      <div className="current-task">
        {currentTask.name}
      </div>

      {/* Progress bar */}
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Timer controls */}
      <div className="timer-controls">
        {timerState.isRunning ? (
          <button className="btn btn-large" onClick={onPause}>
            <Pause size={20} style={{ marginRight: '8px' }} />
            Pause
          </button>
        ) : (
          <button className="btn btn-large" onClick={onResume}>
            <Play size={20} style={{ marginRight: '8px' }} />
            Resume
          </button>
        )}
        
        <button className="btn btn-large btn-secondary" onClick={onReset}>
          <RotateCcw size={20} style={{ marginRight: '8px' }} />
          Reset
        </button>
      </div>

      {/* Task preview */}
      <div style={{ 
        marginTop: '32px',
        padding: '20px',
        background: '#f8f9fa',
        borderRadius: '12px',
        textAlign: 'left'
      }}>
        <h4 style={{ marginBottom: '12px', color: '#333' }}>Next up:</h4>
        {currentTaskIndex + 1 < totalTasks ? (
          <div style={{ color: '#666' }}>
            Task {currentTaskIndex + 2}: {currentTask.name}
          </div>
        ) : (
          <div style={{ color: '#667eea', fontWeight: '600' }}>
            🎉 This is your final task!
          </div>
        )}
      </div>
    </div>
  );
};

export default TimerMode;
