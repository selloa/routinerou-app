import { Preset } from '../types';

export const presets: Preset[] = [
  {
    id: 'morning-routine',
    name: 'Morning Routine',
    description: 'Start your day with energy and focus',
    tasks: [
      { name: 'Wake up & stretch', duration: 300 }, // 5 minutes
      { name: 'Brush teeth & wash face', duration: 180 }, // 3 minutes
      { name: 'Get dressed', duration: 300 }, // 5 minutes
      { name: 'Make breakfast', duration: 420 }, // 7 minutes
      { name: 'Eat breakfast mindfully', duration: 600 }, // 10 minutes
      { name: 'Pack bag for the day', duration: 180 }, // 3 minutes
    ]
  },
  {
    id: 'workout-session',
    name: 'Quick Workout',
    description: 'Full body workout in under 20 minutes',
    tasks: [
      { name: 'Warm up stretches', duration: 180 }, // 3 minutes
      { name: 'Push-ups', duration: 120 }, // 2 minutes
      { name: 'Squats', duration: 120 }, // 2 minutes
      { name: 'Plank hold', duration: 180 }, // 3 minutes
      { name: 'Jumping jacks', duration: 120 }, // 2 minutes
      { name: 'Rest & hydrate', duration: 60 }, // 1 minute
      { name: 'Repeat circuit', duration: 600 }, // 10 minutes
      { name: 'Cool down stretches', duration: 180 }, // 3 minutes
    ]
  },
  {
    id: 'study-session',
    name: 'Study Session',
    description: 'Focused learning with breaks',
    tasks: [
      { name: 'Set up study space', duration: 120 }, // 2 minutes
      { name: 'Review previous material', duration: 300 }, // 5 minutes
      { name: 'Deep focus study', duration: 1500 }, // 25 minutes
      { name: 'Take a break', duration: 300 }, // 5 minutes
      { name: 'Continue studying', duration: 1500 }, // 25 minutes
      { name: 'Summarize key points', duration: 300 }, // 5 minutes
    ]
  },
  {
    id: 'evening-wind-down',
    name: 'Evening Wind Down',
    description: 'Relax and prepare for restful sleep',
    tasks: [
      { name: 'Put away electronics', duration: 120 }, // 2 minutes
      { name: 'Prepare for tomorrow', duration: 180 }, // 3 minutes
      { name: 'Brush teeth & skincare', duration: 240 }, // 4 minutes
      { name: 'Read a book', duration: 600 }, // 10 minutes
      { name: 'Gentle stretching', duration: 180 }, // 3 minutes
      { name: 'Meditation', duration: 300 }, // 5 minutes
    ]
  },
  {
    id: 'kitchen-cleanup',
    name: 'Kitchen Cleanup',
    description: 'Quick kitchen organization',
    tasks: [
      { name: 'Clear countertops', duration: 120 }, // 2 minutes
      { name: 'Load dishwasher', duration: 180 }, // 3 minutes
      { name: 'Wipe surfaces', duration: 120 }, // 2 minutes
      { name: 'Take out trash', duration: 60 }, // 1 minute
      { name: 'Sweep floor', duration: 120 }, // 2 minutes
      { name: 'Final inspection', duration: 60 }, // 1 minute
    ]
  }
];
