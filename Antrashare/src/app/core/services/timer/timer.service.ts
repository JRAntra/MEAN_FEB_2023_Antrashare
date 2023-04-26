import { HostListener, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LogoutConfirmComponent } from 'src/app/features/newsfeed/logout-confirm/logout-confirm.component';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor(private dialog: MatDialog,
    private router: Router) { }

  private timer: any;

  startTimer() {
    if (this.router.url !== '/login') {
      this.timer = setTimeout(() => {
        this.logoutConfirm();
      }, 300000);
    }
  }

  resetTimer() {
    clearTimeout(this.timer);
    this.startTimer();
  }

  public logoutConfirm() {
    const dialogRef = this.dialog.open(LogoutConfirmComponent, {
      data: {
        title: 'You have been inactive for 10 seconds.',
        message: 'Would you like to stay logged in?',
        cancelButton: 'Stay Logged In',
        confirmButton: 'Logout'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'logout') {
        localStorage.clear();
        clearTimeout(this.timer);
        this.router.navigate(['/login']);
      } else {
        this.resetTimer();
      }
    });
  }
}
