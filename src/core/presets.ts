import { Preset } from './types';

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
  },
  {
    id: 'bedtime-preparation',
    name: 'Bedtime Preparation',
    description: 'Create a peaceful environment for restful sleep',
    tasks: [
      { name: 'Dim the lights', duration: 60 }, // 1 minute
      { name: 'Set room temperature', duration: 60 }, // 1 minute
      { name: 'Prepare sleepwear', duration: 120 }, // 2 minutes
      { name: 'Set morning alarm', duration: 60 }, // 1 minute
      { name: 'Close curtains/blinds', duration: 60 }, // 1 minute
      { name: 'Light aromatherapy', duration: 60 }, // 1 minute
    ]
  },
  {
    id: 'day-reflection',
    name: 'Day Reflection',
    description: 'Process your day and find peace before sleep',
    tasks: [
      { name: 'Gratitude practice', duration: 180 }, // 3 minutes
      { name: 'Review accomplishments', duration: 180 }, // 3 minutes
      { name: 'Let go of challenges', duration: 180 }, // 3 minutes
      { name: 'Set tomorrow\'s intention', duration: 120 }, // 2 minutes
      { name: 'Write in journal', duration: 300 }, // 5 minutes
    ]
  },
  {
    id: 'in-bed-wind-down',
    name: 'In-Bed Wind Down',
    description: 'Gentle activities to do while already in bed',
    tasks: [
      { name: 'Deep breathing', duration: 180 }, // 3 minutes
      { name: 'Progressive muscle relaxation', duration: 300 }, // 5 minutes
      { name: 'Visualization meditation', duration: 300 }, // 5 minutes
      { name: 'Gentle neck stretches', duration: 120 }, // 2 minutes
      { name: 'Mindful body scan', duration: 240 }, // 4 minutes
    ]
  },
  {
    id: 'sleep-hygiene',
    name: 'Sleep Hygiene',
    description: 'Optimize your environment and habits for better sleep',
    tasks: [
      { name: 'Check room darkness', duration: 60 }, // 1 minute
      { name: 'Adjust pillow position', duration: 60 }, // 1 minute
      { name: 'Practice 4-7-8 breathing', duration: 180 }, // 3 minutes
      { name: 'Release tension points', duration: 180 }, // 3 minutes
      { name: 'Create mental calm', duration: 240 }, // 4 minutes
    ]
  },
  {
    id: 'weekend-recovery',
    name: 'Weekend Recovery',
    description: 'Gentle weekend morning routine for rest and renewal',
    tasks: [
      { name: 'Sleep in naturally', duration: 0 }, // No timer
      { name: 'Gentle morning stretches', duration: 300 }, // 5 minutes
      { name: 'Mindful coffee/tea', duration: 420 }, // 7 minutes
      { name: 'Week planning reflection', duration: 300 }, // 5 minutes
      { name: 'Light breakfast prep', duration: 360 }, // 6 minutes
    ]
  },
  {
    id: 'stress-release',
    name: 'Stress Release',
    description: 'Release daily tension and find inner peace',
    tasks: [
      { name: 'Shake out tension', duration: 120 }, // 2 minutes
      { name: 'Shoulder rolls & stretches', duration: 180 }, // 3 minutes
      { name: 'Release jaw tension', duration: 120 }, // 2 minutes
      { name: 'Gentle hip circles', duration: 120 }, // 2 minutes
      { name: 'Mindful walking', duration: 300 }, // 5 minutes
      { name: 'Sit in stillness', duration: 240 }, // 4 minutes
    ]
  }
];
