import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor() { }

  email: string = "";
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)
  ])

  onChangeEmailFormControl() {
    // this.email = this.emailControl.value;
    // this.emailControl.setValue(this.email);
    console.log(this.emailControl.value)
  }

  pswdControl = new FormControl('', [])
  onChangePswdFormControl() {
    console.log(this.pswdControl.value)
  }

  ngOnInit(): void {
  }

}
