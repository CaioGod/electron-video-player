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

ipc.on('video-2', function (event) {
  // recv button event and send to video
  videos.webContents.send('video-2')
})

ipc.on('video-3', function (event) {
  // recv button event and send to video
  videos.webContents.send('video-3')
})

ipc.on('video-4', function (event) {
  // recv button event and send to video
  videos.webContents.send('video-4')
})

ipc.on('video-5', function (event) {
  // recv button event and send to video
  videos.webContents.send('video-5')
})

ipc.on('video-6', function (event) {
  // recv button event and send to video
  videos.webContents.send('video-6')
})

app.on('ready', createWindow)