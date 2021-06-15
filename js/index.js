// "use strict";

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

const randomColorsBody = {
      isActive: false,
      interval: null,
  
  start() {
    if (this.isActive) {
      return
    };
    this.isActive = true;
    this.interval = setInterval(() => {
    const color = colors[randomIntegerFromInterval('0', colors.length - 1)];
     refs.body.style.background = color;
    }, 1000);
  },
  
  stop() {
    clearInterval(this.interval);
    this.isActive = false;
      },  
};

refs.startBtn.addEventListener('click', () => {randomColorsBody.start();});
refs.stopBtn.addEventListener('click', () => {randomColorsBody.stop();});