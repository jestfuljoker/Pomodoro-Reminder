const { BrowserWindow } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 310,
    height: 280,
    show: false,
    frame: false,
    resizable: false,
    fullscreenable: false,
    transparent: true,
    skipTaskbar: true
  })

  win.loadFile('index.html')

  return win;
}

module.exports = createWindow()