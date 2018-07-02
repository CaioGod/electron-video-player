const electron = require('electron')
const { app, BrowserWindow } = require('electron')
const ipc = electron.ipcMain

function createWindow() {
  buttons = new BrowserWindow({ width: 800, height: 600 })
  videos = new BrowserWindow({ width: 800, height: 600 })
  buttons.loadFile('./src/button-screen/buttons.html')
  videos.loadFile('./src/video-screen/videos.html')
}

ipc.on('video-1', function (event) {
  // recv button event and send to video
  videos.webContents.send('video-1')
})

app.on('ready', createWindow)