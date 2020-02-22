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
  start(timer, matchAmount) {
    var time = setInterval(function() {
      timer.totalSeconds++;
      if (matchAmount.innerText == 5) {
        clearInterval(time);
      }
      console.log(timer.totalSeconds);
    }, 1000);
  }

}
