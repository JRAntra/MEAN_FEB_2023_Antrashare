import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout-confirm',
  templateUrl: './logout-confirm.component.html',
  styleUrls: ['./logout-confirm.component.sass']
})
export class LogoutConfirmComponent {

  constructor(public dialogRef: MatDialogRef<LogoutConfirmComponent>) { }

  onStay() {
    this.dialogRef.close();
  }

  onLogout() {
    this.dialogRef.close('logout');
  }
}