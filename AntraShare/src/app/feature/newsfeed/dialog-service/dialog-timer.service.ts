import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'any',
})
export class DialogTimerService {
  duration = 5000;
  myboo = false;
  timer: any;
  timeUp = new Subject<boolean>();
  constructor() {}

  startTimer() {
    let i = 1;
    this.timer = setInterval((): void => {
      if (i == Math.floor(this.duration / 1000)) {
        clearInterval(this.timer);
        this.timeUp.next(true);
      }
      // console.log('emitting event', i);
      i++;
    }, 1000);
  }
  resetTimer(restart: boolean) {
    clearInterval(this.timer);
    console.log(restart);
    if (restart) this.startTimer();
  }
}
