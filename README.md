<<<<<<< HEAD
# Routinery - Multi-Platform Timer App
=======
# Routinerou MVP
>>>>>>> 7a3afb97a3c41447d50a8aeee2362a55518e45d1

A timer application that turns intentions into action, designed to work across multiple platforms with a clean, maintainable architecture.

## 🏗️ Architecture

This project uses a **platform abstraction layer** to support multiple deployment targets while maintaining clean, shared business logic.

### Directory Structure

```
routinery-app/
├── src/
│   ├── core/                    # Platform-agnostic business logic
│   │   ├── types.ts            # Shared TypeScript types
│   │   ├── presets.ts          # Timer presets data
│   │   └── timer.ts            # Core timer logic
│   ├── platform/               # Platform-specific implementations
│   │   ├── interface.ts        # Platform adapter interface
│   │   ├── web/                # Web platform implementation
│   │   └── electron/           # Electron platform implementation
│   ├── config/                 # Configuration management
│   │   ├── features.ts         # Feature flags per platform
│   │   └── environment.ts      # Environment detection
│   ├── hooks/                  # React hooks
│   │   └── usePlatform.ts      # Platform functionality hook
│   ├── components/             # React components
│   └── utils/                  # Shared utilities
├── platforms/                  # Platform-specific builds
│   ├── web/                    # Web build artifacts
│   └── electron/               # Electron app files
└── shared/                     # Shared assets and configs
```

## 🚀 Supported Platforms

### 1. Web (Development)
- **Features**: Notifications, Audio, Local Storage
- **Build**: `npm run build:web`
- **Dev**: `npm run dev:web`

### 2. Standalone HTML
- **Features**: Same as web, but packaged as single HTML file
- **Build**: `npm run build:standalone`
- **File**: `platforms/web/standalone.html`

### 3. Electron (Desktop)
- **Features**: System tray, Always on top, Draggable window, Native notifications
- **Build**: `npm run build:electron` (future)
- **Dev**: `npm run dev:electron` (future)

## 🛠️ Development Workflow

### Feature Development
1. **Core Logic**: Add business logic in `src/core/`
2. **Platform Integration**: Implement platform-specific features in `src/platform/`
3. **Feature Flags**: Configure feature availability in `src/config/features.ts`
4. **Testing**: Test across all platforms before merging

### Platform-Specific Development
- **Web**: Use `npm run dev:web`
- **Electron**: Use `npm run dev:electron` (when implemented)
- **Standalone**: Build with `npm run build:standalone`

### Build Commands
```bash
# Web development
npm run dev:web

# Web production build
npm run build:web

# Standalone HTML build
npm run build:standalone

# Electron development (future)
npm run dev:electron

# Electron production build (future)
npm run build:electron
```

## 🔧 Platform Abstraction

### Platform Adapter Interface
All platforms implement the same interface:
```typescript
interface PlatformAdapter {
  // Storage
  saveData(key: string, data: any): Promise<void>;
  loadData(key: string): Promise<any>;
  
  // Notifications
  showNotification(title: string, message: string): void;
  
  // Audio
  playSound(soundType: 'start' | 'end' | 'break'): void;
  
  // System integration
  minimizeToTray(): void;
  setSystemTimer(duration: number): void;
  
  // Window management (Electron)
  setWindowPosition(x: number, y: number): void;
  setWindowSize(width: number, height: number): void;
  setAlwaysOnTop(alwaysOnTop: boolean): void;
}
```

### Feature Flags
Control which features are available on each platform:
```typescript
const webFeatures = {
  systemTray: false,
  notifications: true,
  audio: true,
  offlineStorage: true,
  alwaysOnTop: false,
  draggable: false,
};
```

## 🎯 Usage

### Using Platform Features in Components
```typescript
import { usePlatform } from './hooks/usePlatform';

function MyComponent() {
  const { 
    playSound, 
    showNotification, 
    saveData, 
    isElectron 
  } = usePlatform();

  const handleTimerComplete = () => {
    playSound('end');
    showNotification('Timer Complete!', 'Great job!');
  };

  return (
    <div>
      {isElectron && <DraggableArea>Header</DraggableArea>}
      <NonDraggableArea>Content</NonDraggableArea>
    </div>
  );
}
```

### Platform-Specific Styling
```typescript
import { PlatformWrapper } from './components/PlatformWrapper';

<PlatformWrapper 
  className="container"
  style={{ 
    // Platform-specific styles
    ...(isElectron && { WebkitAppRegion: 'drag' })
  }}
>
  {children}
</PlatformWrapper>
```

## 🔮 Future Enhancements

### Electron App Features
- [ ] Borderless, draggable window
- [ ] System tray integration
- [ ] Always-on-top functionality
- [ ] Native notifications
- [ ] Electron-store for data persistence

### Mobile Support
- [ ] React Native implementation
- [ ] PWA capabilities
- [ ] Mobile-specific UI adaptations

### Advanced Features
- [ ] Cloud sync across platforms
- [ ] Custom sound themes
- [ ] Advanced statistics
- [ ] Routine templates

## 📝 Development Guidelines

### Adding New Features
1. **Core First**: Implement in `src/core/` if platform-agnostic
2. **Platform Specific**: Add to appropriate platform adapter
3. **Feature Flag**: Update `src/config/features.ts`
4. **Test All Platforms**: Ensure compatibility

### Platform Parity
- Keep features synchronized across platforms
- Use feature flags to control availability
- Maintain consistent user experience
- Document platform-specific limitations

### Code Organization
- **Shared Logic**: Keep in `src/core/`
- **Platform Logic**: Isolate in `src/platform/`
- **Configuration**: Centralize in `src/config/`
- **Components**: Use platform wrappers for differences

## 🚀 Getting Started

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Start development**: `npm run dev:web`
4. **Build for production**: `npm run build:web`
5. **Test standalone**: `npm run build:standalone`

## 📄 License

MIT License - see LICENSE file for details.
