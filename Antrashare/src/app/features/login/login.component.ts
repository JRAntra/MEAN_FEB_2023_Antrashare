import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginInfoService } from 'src/app/core/services/login/login-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar,
    private loginInfoService: LoginInfoService,
    private fb: FormBuilder) { }

  userLoginFB: FormGroup = new FormGroup({
  })

  ngOnInit() {
    this.userLoginFB = this.fb.group({
      emailControl: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)]],
      pswdControl: ['', Validators.required],
    });
  }

  onChangeEmailFormControl() {
    // console.log(this.emailControl.value)
  }

  onChangePswdFormControl() {
    // console.log(this.pswdControl.value)
  }

  agreementChecked: boolean = false;

  onAgreementChecked(event: any) {
    this.agreementChecked = event.checked;
  }

  onLogin() {
    if (this.userLoginFB.valid && this.agreementChecked) {
      const email = this.userLoginFB.get('emailControl')?.value;
      const password = this.userLoginFB.get('pswdControl')?.value;
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