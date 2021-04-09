const { Tray } = require('electron')
const { resolve } = require('path')

const iconPath = resolve(__dirname, '../', 'assets', 'pomodoro-16x16.png')

function createTray() {
  const tray = new Tray(iconPath)

  tray.setToolTip('Pomodoro Reminder')

  return tray
}

module.exports = createTray()