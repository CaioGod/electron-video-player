const electron = require('electron')
const ipc = electron.ipcRenderer

var playing = false
const loopVid = document.getElementById('loop')

ipc.on('video-1', function (event) {
  if (playing === true) return
  // pause and hide loop
  loopVid.pause()
  loopVid.style.display = 'none'

  // get right video
  let video1 = document.getElementById('video1')
  video1.style.display = ''
  video1.play()
  playing = true

  video1.onended = function () {
    video1.style.display = 'none'
    loopVid.style.display = ''
    loopVid.load()
    playing = false
    ipc.send('ended-1')
  }
})

ipc.on('video-2', function (event) {
  // pause and hide loop
  if (playing === true) return
  loopVid.pause()
  loopVid.style.display = 'none'

  // get right video
  let video1 = document.getElementById('video2')
  video1.style.display = ''
  video1.play()
  playing = true

  video1.onended = function () {
    video1.style.display = 'none'
    loopVid.style.display = ''
    loopVid.load()
    playing = false
    ipc.send('ended-2')
  }
})

ipc.on('video-3', function (event) {
  // pause and hide loop
  if (playing === true) return
  loopVid.pause()
  loopVid.style.display = 'none'

  // get right video
  let video1 = document.getElementById('video3')
  video1.style.display = ''
  video1.play()
  playing = true

  video1.onended = function () {
    video1.style.display = 'none'
    loopVid.style.display = ''
    loopVid.load()
    playing = false
    ipc.send('ended-3')
  }
})

ipc.on('video-4', function (event) {
  // pause and hide loop
  if (playing === true) return
  loopVid.pause()
  loopVid.style.display = 'none'

  // get right video
  let video1 = document.getElementById('video4')
  video1.style.display = ''
  video1.play()
  playing = true

  video1.onended = function () {
    video1.style.display = 'none'
    loopVid.style.display = ''
    loopVid.load()
    playing = false
    ipc.send('ended-4')
  }
})

ipc.on('video-5', function (event) {
  if (playing === true) return
  loopVid.pause()
  loopVid.style.display = 'none'

  // get right video
  let video1 = document.getElementById('video5')
  video1.style.display = ''
  video1.play()
  playing = true

  video1.onended = function () {
    video1.style.display = 'none'
    loopVid.style.display = ''
    loopVid.load()
    playing = false
    ipc.send('ended-5')
  }
})

ipc.on('video-6', function (event) {
  // pause and hide loop
  if (playing === true) return
  loopVid.pause()
  loopVid.style.display = 'none'

  // get right video
  let video1 = document.getElementById('video6')
  video1.style.display = ''
  video1.play()
  playing = true

  video1.onended = function () {
    video1.style.display = 'none'
    loopVid.style.display = ''
    loopVid.load()
    playing = false
    ipc.send('ended-6')
  }
})

ipc.on('video-7', function (event) {
  // pause and hide loop
  if (playing === true) return
  loopVid.pause()
  loopVid.style.display = 'none'

  // get right video
  let video1 = document.getElementById('video7')
  video1.style.display = ''
  video1.play()
  playing = true

  video1.onended = function () {
    video1.style.display = 'none'
    loopVid.style.display = ''
    loopVid.load()
    playing = false
    ipc.send('ended-7')
  }
})
