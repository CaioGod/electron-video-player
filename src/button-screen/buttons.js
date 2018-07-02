const electron = require('electron')
const ipc = electron.ipcRenderer

const video1 = document.getElementById('button1')

// Whenever a button is pressed we must lock all others until video has ended

video1.addEventListener('click', function () {
  ipc.send('video-1')
})