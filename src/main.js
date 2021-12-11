const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
  const mainWin = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  })
  mainWin.loadFile('src/index.html')
  const childWin = new BrowserWindow({
    width: 400,
    height: 300,
    parent: mainWin
  })
  childWin.loadFile('src/index.html')
})