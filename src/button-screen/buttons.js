const electron = require('electron')
const ipc = electron.ipcRenderer

const video1 = document.getElementById('button1')
const video2 = document.getElementById('button2')
const video3 = document.getElementById('button3')
const video4 = document.getElementById('button4')
const video5 = document.getElementById('button5')
const video6 = document.getElementById('button6')
const video7 = document.getElementById('button7')

// Whenever a button is pressed we must lock all others until video has ended

const subsDiv = document.getElementById('subs')
const buttons = document.getElementById('buttons')

video1.addEventListener('click', function () {
  buttons.style.display = 'none'
  subsDiv.style.display = ''
  let sub = document.getElementById('legenda1')
  sub.style.display = ''
  ipc.send('video-1')
})

video2.addEventListener('click', function () {
  buttons.style.display = 'none'
  subsDiv.style.display = ''
  let sub = document.getElementById('legenda2')
  sub.style.display = ''
  ipc.send('video-2')
})

video3.addEventListener('click', function () {
  buttons.style.display = 'none'
  subsDiv.style.display = ''
  let sub = document.getElementById('legenda3')
  sub.style.display = ''
  ipc.send('video-3')
})

video4.addEventListener('click', function () {
  buttons.style.display = 'none'
  subsDiv.style.display = ''
  let sub = document.getElementById('legenda4')
  sub.style.display = ''
  ipc.send('video-4')
})

video5.addEventListener('click', function () {
  buttons.style.display = 'none'
  subsDiv.style.display = ''
  let sub = document.getElementById('legenda5')
  sub.style.display = ''
  ipc.send('video-5')
})

video6.addEventListener('click', function () {
  buttons.style.display = 'none'
  subsDiv.style.display = ''
  let sub = document.getElementById('legenda1')
  sub.style.display = ''
  ipc.send('video-6')
})

video7.addEventListener('click', function () {
  buttons.style.display = 'none'
  subsDiv.style.display = ''
  let sub = document.getElementById('legenda1')
  sub.style.display = ''
  ipc.send('video-7')
})

ipc.on('ended-1', function (event) {
  buttons.style.display = ''
  subsDiv.style.display = 'none'
  let sub = document.getElementById('legenda1')
  sub.style.display = 'none'
})

ipc.on('ended-2', function (event) {
  buttons.style.display = ''
  subsDiv.style.display = 'none'
  let sub = document.getElementById('legenda2')
  sub.style.display = 'none'
})

ipc.on('ended-3', function (event) {
  buttons.style.display = ''
  subsDiv.style.display = 'none'
  let sub = document.getElementById('legenda3')
  sub.style.display = 'none'
})

ipc.on('ended-4', function (event) {
  buttons.style.display = ''
  subsDiv.style.display = 'none'
  let sub = document.getElementById('legenda4')
  sub.style.display = 'none'
})

ipc.on('ended-5', function (event) {
  buttons.style.display = ''
  subsDiv.style.display = 'none'
  let sub = document.getElementById('legenda5')
  sub.style.display = 'none'
})

ipc.on('ended-6', function (event) {
  buttons.style.display = ''
  subsDiv.style.display = 'none'
  let sub = document.getElementById('legenda6')
  sub.style.display = 'none'
})

ipc.on('ended-7', function (event) {
  buttons.style.display = ''
  subsDiv.style.display = 'none'
  let sub = document.getElementById('legenda7')
  sub.style.display = 'none'
})
