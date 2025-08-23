const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electron', {
  // Storage methods
  store: {
    get: (key) => ipcRenderer.invoke('electron-store-get', key),
    set: (key, value) => ipcRenderer.invoke('electron-store-set', key, value),
    delete: (key) => ipcRenderer.invoke('electron-store-delete', key),
  },
  
  // Window methods
  window: {
    minimize: () => ipcRenderer.invoke('window-minimize'),
    hide: () => ipcRenderer.invoke('window-hide'),
    show: () => ipcRenderer.invoke('window-show'),
    setPosition: (x, y) => ipcRenderer.invoke('window-set-position', x, y),
    setSize: (width, height) => ipcRenderer.invoke('window-set-size', width, height),
    setAlwaysOnTop: (alwaysOnTop) => ipcRenderer.invoke('window-set-always-on-top', alwaysOnTop),
  },
  
  // Platform detection
  platform: 'electron',
  
  // Notification API
  notification: {
    show: (title, options) => {
      if ('Notification' in window) {
        new Notification(title, options);
      }
    },
    requestPermission: () => {
      if ('Notification' in window) {
        return Notification.requestPermission();
      }
      return Promise.resolve('granted');
    }
  }
});
