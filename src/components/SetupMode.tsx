import React, { useState } from 'react';
import { Task, Preset } from '../core/types';
import { formatDuration } from '../core/timer';
import { Plus, Play, Clock, Trash2 } from 'lucide-react';

interface SetupModeProps {
  tasks: Task[];
  presets: Preset[];
  onAddTask: (name: string, duration: number) => void;
  onRemoveTask: (taskId: string) => void;
  onLoadPreset: (preset: Preset) => void;
  onStartTimer: () => void;
}

const SetupMode: React.FC<SetupModeProps> = ({
  tasks,
  presets,
  onAddTask,
  onRemoveTask,
  onLoadPreset,
  onStartTimer,
}) => {
  const [taskName, setTaskName] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!taskName.trim()) return;
    
    const totalSeconds = (parseInt(minutes) || 0) * 60 + (parseInt(seconds) || 0);
    if (totalSeconds <= 0) return;
    
    onAddTask(taskName.trim(), totalSeconds);
    setTaskName('');
    setMinutes('');
    setSeconds('');
  };

  const handlePresetClick = (preset: Preset) => {
    onLoadPreset(preset);
  };

  const getTotalDuration = () => {
    return tasks.reduce((total, task) => total + task.duration, 0);
  };

  return (
    <div>
      {/* Preset Buttons */}
      <div className="preset-buttons">
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
          Quick Start with Presets
        </h3>
        {presets.map((preset) => {
          const totalDuration = preset.tasks.reduce((sum, task) => sum + task.duration, 0);
          return (
            <button
              key={preset.id}
              className="preset-btn"
              onClick={() => handlePresetClick(preset)}
            >
              <h4>{preset.name}</h4>
              <p>{preset.description} • {formatDuration(totalDuration)}</p>
            </button>
          );
        })}
      </div>

      {/* Task Form */}
      <div className="task-form">
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
          Or Create Your Own Routine
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="taskName">Task Name</label>
            <input
              id="taskName"
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="e.g., Brush teeth, Exercise, Read..."
              required
            />
          </div>
          
          <div className="form-group">
            <label>Duration</label>
            <div className="time-inputs">
              <input
                type="number"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                placeholder="0"
                min="0"
                max="59"
              />
              <input
                type="number"
                value={seconds}
                onChange={(e) => setSeconds(e.target.value)}
                placeholder="0"
                min="0"
                max="59"
              />
            </div>
            <small style={{ color: '#666', fontSize: '12px' }}>
              Minutes and seconds (e.g., 5 min 30 sec)
            </small>
          </div>
          
          <button type="submit" className="btn">
            <Plus size={16} style={{ marginRight: '8px' }} />
            Add Task
          </button>
        </form>
      </div>

      {/* Task List */}
      <div className="task-list">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <h3>No tasks yet</h3>
            <p>Add some tasks to get started, or choose a preset above</p>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600' }}>
                Your Routine ({tasks.length} tasks)
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#667eea', fontWeight: '600' }}>
                <Clock size={16} />
                {formatDuration(getTotalDuration())}
              </div>
            </div>
            
            {tasks.map((task, index) => (
              <div key={task.id} className="task-item">
                <div className="task-header">
                  <div>
                    <div className="task-name">{task.name}</div>
                    <small style={{ color: '#666' }}>Task {index + 1}</small>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span className="task-duration">{formatDuration(task.duration)}</span>
                    <button
                      className="btn-small btn-danger"
                      onClick={() => onRemoveTask(task.id)}
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            <button
              className="btn btn-large"
              onClick={onStartTimer}
              disabled={tasks.length === 0}
              style={{ marginTop: '24px' }}
            >
              <Play size={20} style={{ marginRight: '8px' }} />
              Start Routine
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SetupMode;
