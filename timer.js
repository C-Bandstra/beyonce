class Timer {
  constructor(startTime, stopTime) {
    debugger;
    this.startTime = startTime;
    this.stopTime = stopTime;
    this.topTimes = [];
    this.totalSeconds = 0;
    this.minutes = 0;
    this.seconds = 0;

  }
  translateMin() {
    this.minutes = Math.floor(this.totalSeconds / 60);
    this.seconds = this.totalSeconds % 60;
  }
  start() {
    debugger;
    var seconds = this.totalSeconds;
    setInterval(function() {
      seconds++;
      console.log(seconds);
    }, 1000);
  }
}
