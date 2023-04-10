import { Component, OnInit } from '@angular/core';
import { DialogTimerService } from '../dialog-service/dialog-timer.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-session-timeout-dialog',
  templateUrl: './session-timeout-dialog.component.html',
  styleUrls: ['./session-timeout-dialog.component.scss'],
})
export class SessionTimeoutDialogComponent implements OnInit {
  constructor(
    private timerDialog: DialogTimerService,
    private router: Router,
    private dialogRef: MatDialogRef<SessionTimeoutDialogComponent>
  ) {}

  ngOnInit(): void {}

  onConfirmHandler() {
    // this.timerDialog.resetTimer(false);
    this.dialogRef.close(true);
    localStorage.setItem('userInfo', '');
    this.router.navigate(['']);
  }
}
