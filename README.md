# Routinerou MVP

A timer that turns intentions into action - inspired by the [Routinery app](https://www.routinery.app/).

## Overview

This MVP captures the core functionality of Routinery, focusing on the two main loops:

1. **Task Creation Loop**: Add tasks and assign specific durations to each
2. **Playback Loop**: A slideshow/timer mode where each task is displayed for its assigned duration

## Features

### Core Functionality
- ✅ **Task Management**: Add, remove, and organize tasks with custom durations
- ✅ **Preset Routines**: Quick-start with predefined routines (similar to BEND's approach)
- ✅ **Timer Mode**: Slideshow-style timer that progresses through tasks automatically
- ✅ **Progress Tracking**: Visual progress bars and task completion indicators
- ✅ **Pause/Resume**: Control the timer flow
- ✅ **Completion Summary**: Stats and motivational feedback

### Preset Routines (BEND-style)
- **Morning Routine**: Start your day with energy and focus
- **Quick Workout**: Full body workout in under 20 minutes
- **Study Session**: Focused learning with breaks
- **Evening Wind Down**: Relax and prepare for restful sleep
- **Kitchen Cleanup**: Quick kitchen organization

## How It Works

### 1. Setup Mode
- Choose from preset routines or create your own
- Add tasks with custom names and durations
- Review your routine before starting

### 2. Timer Mode
- Each task is displayed as a "slide" for its assigned duration
- Large, clear timer display with progress bar
- Smooth transitions between tasks
- Pause/resume functionality

### 3. Completion Mode
- Summary of completed routine
- Statistics and motivational feedback
- Option to start a new routine

## Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Lucide React** for beautiful icons
- **CSS3** with modern design patterns
- **Responsive design** for mobile and desktop

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd routinery-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── SetupMode.tsx      # Task creation and preset selection
│   ├── TimerMode.tsx      # Timer/slideshow interface
│   └── CompletionMode.tsx # Results and summary
├── data/
│   └── presets.ts         # Predefined routine templates
├── utils/
│   └── timer.ts           # Time formatting and calculation utilities
├── types.ts               # TypeScript type definitions
├── App.tsx                # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## Design Philosophy

This MVP follows the core principles of Routinery:

1. **Simplicity**: Clean, distraction-free interface
2. **Focus**: One task at a time with clear visual feedback
3. **Progress**: Visual indicators of completion and time remaining
4. **Motivation**: Encouraging feedback and completion celebrations

## Key Differences from Original Routinery

- **Web-based**: Runs in browser instead of mobile app
- **Simplified**: Focuses on core timer functionality
- **Preset-focused**: Emphasizes BEND-style preset selection
- **MVP scope**: Core features only, no advanced features like:
  - User accounts
  - Routine history
  - Advanced analytics
  - Mobile notifications
  - Social features

## Future Enhancements

Potential features for future iterations:
- Sound notifications
- Custom themes
- Routine templates sharing
- Progress tracking over time
- Integration with calendar apps
- Mobile app version

## Contributing

This is an MVP demonstration. For contributions or feature requests, please create an issue or pull request.

## License

This project is for educational and demonstration purposes.
