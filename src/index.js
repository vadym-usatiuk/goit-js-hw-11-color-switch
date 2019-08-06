
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  
  const refs = {
    startBtn: document.querySelector('button[data-action="start"'),
    stopBtn: document.querySelector('button[data-action="stop"'),
    bodyRef: document.querySelector('body'),
  };
  
  let savedIndex = [];
  
  const swither = {
    isActive: false,
  
    start() {
      if (this.isActive) {
        return;
      }
  
      this.isActive = true;
      this.colorSwitch = setInterval(() => {
        updateBackgroundColor();
      }, 1000);
    },

    stop() {
      clearInterval(this.colorSwitch);
      this.isActive = false;
    },
  };
  refs.startBtn.addEventListener('click', swither.start.bind(swither));
  refs.stopBtn.addEventListener('click', swither.stop.bind(swither));

  function updateBackgroundColor() {
    const indexOfColor = checkNumber();
    refs.bodyRef.style.backgroundColor = colors[indexOfColor];
    savedIndex = indexOfColor; 
  }
  
  function checkNumber() {
    const randomIntegerFromInterval = (min, max) => {
      const currentIndex = Math.floor(Math.random() * (max - min + 1) + min);
      return currentIndex;
    };
    let currentIndexOfColor = randomIntegerFromInterval(0, colors.length - 1);
    while (currentIndexOfColor === savedIndex) {
      currentIndexOfColor = randomIntegerFromInterval(0, colors.length - 1);
    }
    return currentIndexOfColor;
  }