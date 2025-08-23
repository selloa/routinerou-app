import React from 'react';
import { Task } from '../core/types';
import { formatDuration } from '../core/timer';
import { RotateCcw, CheckCircle, Clock, Trophy } from 'lucide-react';

interface CompletionModeProps {
  tasks: Task[];
  completedTasks: Task[];
  totalDuration: number;
  onReset: () => void;
}

const CompletionMode: React.FC<CompletionModeProps> = ({
  tasks,
  completedTasks,
  totalDuration,
  onReset,
}) => {
  const completionRate = tasks.length > 0 ? (completedTasks.length / tasks.length) * 100 : 0;

  return (
    <div className="completion-screen">
      <div style={{ marginBottom: '32px' }}>
        <Trophy size={48} color="#667eea" style={{ marginBottom: '16px' }} />
        <h2>Routine Complete!</h2>
        <p>Great job completing your routine. You're building momentum!</p>
      </div>

      {/* Stats */}
      <div className="stats">
        <div className="stat-card">
          <div className="stat-number">{tasks.length}</div>
          <div className="stat-label">Total Tasks</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{formatDuration(totalDuration)}</div>
          <div className="stat-label">Total Time</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{Math.round(completionRate)}%</div>
          <div className="stat-label">Completion Rate</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{completedTasks.length}</div>
          <div className="stat-label">Completed</div>
        </div>
      </div>

      {/* Task summary */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
          Your Completed Routine
        </h3>
        <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
          {tasks.map((task, index) => (
            <div 
              key={task.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px',
                marginBottom: '8px',
                background: '#f8f9fa',
                borderRadius: '8px',
                borderLeft: '4px solid #667eea'
              }}
            >
              <CheckCircle 
                size={16} 
                color="#667eea" 
                style={{ marginRight: '12px' }} 
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', color: '#333' }}>
                  {task.name}
                </div>
                <small style={{ color: '#666' }}>
                  Task {index + 1}
                </small>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '4px',
                color: '#667eea',
                fontWeight: '600'
              }}>
                <Clock size={12} />
                {formatDuration(task.duration)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: '16px' }}>
        <button className="btn btn-large" onClick={onReset}>
          <RotateCcw size={20} style={{ marginRight: '8px' }} />
          Start New Routine
        </button>
      </div>

      {/* Motivational message */}
      <div style={{ 
        marginTop: '32px',
        padding: '20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <h4 style={{ marginBottom: '8px' }}>Keep it up!</h4>
        <p style={{ opacity: 0.9, fontSize: '14px' }}>
          Consistency is the key to building lasting habits. 
          Every routine completed brings you closer to your goals.
        </p>
      </div>
    </div>
  );
};

export default CompletionMode;
