import electron from 'electron';

electron.app.on('ready', () => {
  const display = electron.screen.getPrimaryDisplay();
  const { width, height } = display.workAreaSize;

  const window = new electron.BrowserWindow({ width, height, frame: false, transparent: true });
  window.loadFile('index.html');

  // Note that these do not have an impact on the issue at hand
  window.setAlwaysOnTop(true);
  window.setIgnoreMouseEvents(true);
});
