import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginInfoService } from 'src/app/core/services/login/login-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private loginService: LoginService, private router: Router, private snackBar: MatSnackBar, private loginInfoService: LoginInfoService) { }

  ngOnInit() {
  }

  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)
  ])

  onChangeEmailFormControl() {
    // console.log(this.emailControl.value)
  }

  pswdControl = new FormControl('', [
    Validators.required
  ])
  onChangePswdFormControl() {
    // console.log(this.pswdControl.value)
  }

  agreementChecked: boolean = false;

  onAgreementChecked(event: any) {
    this.agreementChecked = event.checked;
  }

  onLogin() {
    if (this.emailControl.valid && this.pswdControl.valid && this.agreementChecked) {
      const email = this.emailControl.value;
      const password = this.pswdControl.value;
      if (email && password) {
        this.loginService.login(email, password).subscribe(
          (data) => {
            console.log(data);
            this.loginInfoService.setEmailValue(email);
            this.router.navigate(['/newsfeed']);
          },
          (error) => {
            console.log(error);
            this.snackBar.open('Wrong username or password', '', {
              duration: 2000
            }
            );
          }
        )
      }
    } else if (!this.agreementChecked) {
      this.snackBar.open('Please check the agreement.', '', {
        duration: 2000,
      });
    } else {
      this.snackBar.open('Please enter email address and password.', '', {
        duration: 2000,
      });
    }
  }
}