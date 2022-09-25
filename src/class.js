export default class Timer {
<<<<<<< HEAD:src/class.js
  constructor(futureTime, time, showFinishMessage) {
    this.date = futureTime;
    this.timerId = null;
    this.timeNumbers = time;
    this.finishMessage = showFinishMessage;
  }

  callCountDiff() {
    this.countDiff();
    this.timerId = setInterval(this.countDiff.bind(this), 1000);
  }

  countDiff() {
    const now = new Date().getTime();
    const diff = new Date(this.date).getTime() - now;

    if (diff < 0) {
      this.timeNumbers.textContent = '00:00:00:00';
      this.finishMessage(this.date);

      localStorage.removeItem('title');
      localStorage.removeItem('date');

      clearInterval(this.timerId);

      return;
=======
    constructor (futureTime, time, showFinishMessage) {
        this.date = futureTime;
        this.timerId = null;
        this.timeNumbers = time;
        this.finishMessage = showFinishMessage;
>>>>>>> parent of 772b924 (eslint):class.js
    }
    callCountDiff(timer) {
        this.countDiff(timer);
        this.timerId = setInterval(this.countDiff.bind(this), 1000);
    }
    countDiff() {
        const now = new Date().getTime();
        const diff = new Date(this.date).getTime() - now;
        
        if (diff < 0) {
            this.timeNumbers.textContent = `00:00:00:00`;
            this.finishMessage(this.date);

            localStorage.removeItem('title');
            localStorage.removeItem('date');
    
            clearInterval(this.timerId);

            return;
        }
        this.showCountDown(diff);
    }
    showCountDown(diff) {
        const seconds = Math.floor((diff/1000)%60);
        const minutes = Math.floor((diff/(1000*60))%60);
        const hours = Math.floor((diff/(1000*60*60))%24);
        const days = Math.floor(diff/(1000*60*60*24));
    
        this.timeNumbers.textContent = `${this.roundTime(days)}:${this.roundTime(hours)}:${this.roundTime(minutes)}:${this.roundTime(seconds)}`;

<<<<<<< HEAD:src/class.js
  clearInterval() {
    clearInterval(this.timerId);
  }

  roundTime(time) {
    return time < 10 ? `0${time}` : time;
  }
}
=======
    }
    clearInterval() {
        clearInterval(this.timerId);
    }
    roundTime(time) {
        if (time < 10) {
            return '0' + time;
        } else {
            return time;
        }
    }
}
>>>>>>> parent of 772b924 (eslint):class.js
