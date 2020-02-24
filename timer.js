class Timer {
  constructor() {
    this.startTime = null;
    this.stopTime = null;
    this.topTimes = JSON.parse(localStorage.getItem('allScores')) || [];
    this.totalSeconds = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.started = false;
  }

  translateMin() {
    var totalSeconds = (this.stopTime - this.startTime) / 1000;
    this.minutes = Math.floor(totalSeconds / 60);
    this.seconds = Math.round(totalSeconds % 60);
    var totalTime = `${this.minutes} minutes ${this.seconds} seconds`;
    this.topTimes.push(totalTime);
    gameOver(this.minutes, this.seconds);
    this.saveToLocalStorage(this.topTimes);
  }

  start() {
    this.startTime = Date.now();
    this.started = true;
  }

  stop() {
    this.stopTime = Date.now();
    this.translateMin();
    this.started = false;
  }

  saveToLocalStorage() {
    var stringedArray = JSON.stringify(this.topTimes);
    localStorage.setItem('allScores', stringedArray);
  }
}
