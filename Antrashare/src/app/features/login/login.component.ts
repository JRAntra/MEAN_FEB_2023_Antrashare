import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginInfoService } from 'src/app/core/services/login/login-info.service';
import { map, Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

interface userLogin {
  email: string,
  password: string
}

interface useremailData {
  username: string[]
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private loginInfoService: LoginInfoService) { }

  userLogin: FormGroup = new FormGroup({
    email: new FormControl('',
      [Validators.required,
      Validators.email,
      Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)],
      [this.isEmailExist()]),
    password: new FormControl('', Validators.required),
  })

  get useremailControl(): FormControl {
    return this.userLogin.get('email') as FormControl
  }

  get userpawdControl(): FormControl {
    return this.userLogin.get('password') as FormControl
  }

  isEmailExist(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.http.get<useremailData>(`http://localhost:4231/api/register/checkExistByEmail/${control.value}`)
        .pipe(
          map((res) => {
            if (!res) {
              return { notRegistered: "Email is not registered." }
            } else {
              return null
            }
          })
        )
    }
  }

  ngOnInit() {
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
    if (this.userLogin.valid && this.agreementChecked) {
      const email = this.userLogin.controls['email'].value;
      const password = this.userLogin.controls['password'].value;
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