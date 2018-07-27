const electron = require('electron')
const ipc = electron.ipcRenderer

const video1 = document.getElementById('button1')
const video2 = document.getElementById('button2')
const video3 = document.getElementById('button3')
const video4 = document.getElementById('button4')
const video5 = document.getElementById('button5')
const video6 = document.getElementById('button6')

// Whenever a button is pressed we must lock all others until video has ended

video1.addEventListener('click', function () {
  ipc.send('video-1')
})

video2.addEventListener('click', function () {
  ipc.send('video-2')
})

video3.addEventListener('click', function () {
  ipc.send('video-3')
})

video4.addEventListener('click', function () {
  ipc.send('video-4')
})

video5.addEventListener('click', function () {
  ipc.send('video-5')
})

video6.addEventListener('click', function () {
  ipc.send('video-6')
})