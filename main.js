const electron = require('electron')
const { app, BrowserWindow } = require('electron')
const ipc = electron.ipcMain

var videos
var buttons

function createWindow () {
  buttons = new BrowserWindow({ width: 2880, height: 1800, x: 0, y: 0 , frame: false})
  videos = new BrowserWindow({ width: 1280, height: 1024, x: 1280, y: 0, frame: false })
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
  videos.webContents.send('video-6')
})

ipc.on('video-7', function (event) {
  videos.webContents.send('video-7')
})

ipc.on('ended-1', function (event) {
  buttons.webContents.send('ended-1')
})

ipc.on('ended-2', function (event) {
  buttons.webContents.send('ended-2')
})

ipc.on('ended-3', function (event) {
  buttons.webContents.send('ended-3')
})

ipc.on('ended-4', function (event) {
  buttons.webContents.send('ended-4')
})

ipc.on('ended-5', function (event) {
  buttons.webContents.send('ended-5')
})

ipc.on('ended-6', function (event) {
  buttons.webContents.send('ended-6')
})

ipc.on('ended-7', function (event) {
  buttons.webContents.send('ended-7')
})

app.disableHardwareAcceleration()
app.on('ready', createWindow)
