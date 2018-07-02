const electron = require('electron')
const ipc = electron.ipcRenderer

const loopVid = document.getElementById('loop')

ipc.on('video-1', function (event) {

  // pause and hide loop
  loopVid.pause()
  loopVid.style.display = 'none'

  // get right video
  let video1 = document.getElementById('video1')
  video1.style.display = ''
  video1.play()

  video1.onended = function () {
    video1.style.display = 'none'
    loop.style.display = ''
    loop.load()
  }
})