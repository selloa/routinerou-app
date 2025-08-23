import { useState, useEffect } from 'react';
import { Task, AppMode, TimerState } from './core/types';
import { presets } from './core/presets';
import SetupMode from './components/SetupMode';
import TimerMode from './components/TimerMode';
import CompletionMode from './components/CompletionMode';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [mode, setMode] = useState<AppMode>('setup');
  const [timerState, setTimerState] = useState<TimerState>({
    isRunning: false,
    currentTaskIndex: 0,
    timeRemaining: 0,
    totalTime: 0,
    startTime: null,
  });

  // Timer effect
  useEffect(() => {
    let interval: number;

    if (timerState.isRunning && timerState.timeRemaining > 0) {
      interval = setInterval(() => {
        setTimerState(prev => {
          const newTimeRemaining = prev.timeRemaining - 1;
          
          if (newTimeRemaining <= 0) {
            // Move to next task or complete
            const nextTaskIndex = prev.currentTaskIndex + 1;
            
            if (nextTaskIndex < tasks.length) {
              const nextTask = tasks[nextTaskIndex];
              return {
                ...prev,
                currentTaskIndex: nextTaskIndex,
                timeRemaining: nextTask.duration,
                totalTime: nextTask.duration,
              };
            } else {
              // All tasks completed
              return {
                ...prev,
                isRunning: false,
                timeRemaining: 0,
              };
            }
          }
          
          return {
            ...prev,
            timeRemaining: newTimeRemaining,
          };
        });
      }, 1000);
    } else if (timerState.timeRemaining === 0 && timerState.isRunning) {
      // Timer finished, move to completion mode
      setMode('completion');
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timerState.isRunning, timerState.timeRemaining, tasks]);

  const addTask = (name: string, duration: number) => {
    const newTask: Task = {
      id: Date.now().toString(),
      name,
      duration,
      completed: false,
    };
    setTasks(prev => [...prev, newTask]);
  };

  const removeTask = (taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const loadPreset = (preset: typeof presets[0]) => {
    const presetTasks: Task[] = preset.tasks.map(task => ({
      ...task,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      completed: false,
    }));
    setTasks(presetTasks);
  };

  const startTimer = () => {
    if (tasks.length === 0) return;
    
    const firstTask = tasks[0];
    setTimerState({
      isRunning: true,
      currentTaskIndex: 0,
      timeRemaining: firstTask.duration,
      totalTime: firstTask.duration,
      startTime: Date.now(),
    });
    setMode('timer');
  };

  const pauseTimer = () => {
    setTimerState(prev => ({
      ...prev,
      isRunning: false,
    }));
  };

  const resumeTimer = () => {
    setTimerState(prev => ({
      ...prev,
      isRunning: true,
    }));
  };

  const resetTimer = () => {
    setTimerState({
      isRunning: false,
      currentTaskIndex: 0,
      timeRemaining: 0,
      totalTime: 0,
      startTime: null,
    });
    setMode('setup');
  };

  const getCurrentTask = () => {
    if (timerState.currentTaskIndex < tasks.length) {
      return tasks[timerState.currentTaskIndex];
    }
    return null;
  };

  const getCompletedTasks = () => {
    return tasks.filter(task => task.completed);
  };

  const getTotalDuration = () => {
    return tasks.reduce((total, task) => total + task.duration, 0);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Routinerou</h1>
        <p>Turn intentions into action</p>
      </div>
      
      <div className="content">
        {mode === 'setup' && (
          <SetupMode
            tasks={tasks}
            presets={presets}
            onAddTask={addTask}
            onRemoveTask={removeTask}
            onLoadPreset={loadPreset}
            onStartTimer={startTimer}
          />
        )}
        
        {mode === 'timer' && (
          <TimerMode
            currentTask={getCurrentTask()}
            timerState={timerState}
            totalTasks={tasks.length}
            currentTaskIndex={timerState.currentTaskIndex}
            onPause={pauseTimer}
            onResume={resumeTimer}
            onReset={resetTimer}
          />
        )}
        
        {mode === 'completion' && (
          <CompletionMode
            tasks={tasks}
            completedTasks={getCompletedTasks()}
            totalDuration={getTotalDuration()}
            onReset={resetTimer}
          />
        )}
      </div>
    </div>
  );
}

export default App;
