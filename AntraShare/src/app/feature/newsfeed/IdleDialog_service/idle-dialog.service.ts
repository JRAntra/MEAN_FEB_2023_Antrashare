import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdleDialogService {
  private timer: any;
  private dialogSubject = new Subject<boolean>();
  public dialogObservable: Observable<boolean> = this.dialogSubject.asObservable();

  constructor() { }

  public startTimer() {
    this.timer = setTimeout(() => {
      this.dialogSubject.next(true);
      console.log("idle for 5s")
    }, 5000);
  }

  private resetTimer() {
    clearTimeout(this.timer);
    console.log("Reset timer")
    this.startTimer();
  }

  public onMouseMove() {
    this.resetTimer();
  }

  public onKeyDown() {
    this.resetTimer();
  }

  public onClick() {
    this.resetTimer();
  }

  public showDialog() {
    this.dialogSubject.next(true);
  }

}
