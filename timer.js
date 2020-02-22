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
  translateMin(totalSeconds) {
    debugger
    this.minutes = Math.floor(totalSeconds / 60);
    this.seconds = totalSeconds % 60;
    this.topTimes.push(totalSeconds);
  }
  start(timer, matchAmount) {
    var time = setInterval(function() {
      timer.totalSeconds++;
      if (matchAmount.innerText == 5) {
        clearInterval(time);
        timer.translateMin(timer.totalSeconds);
      }
      console.log(timer.totalSeconds);
    }, 1000);
  }

}
