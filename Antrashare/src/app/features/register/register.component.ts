import { Component, OnInit } from '@angular/core';
import { ReactiveFormsService } from "../../core/services/reactiveform/reactive-forms.service";
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { RegisterUserService } from "../../core/services/registeruser/register-user.service";
import { map, Observable } from "rxjs";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

interface usernameData {
  userName: string[]
}

interface useremailData {
  userEmail: string[]
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(public reactiveFormsService: ReactiveFormsService,
    private registerUserService: RegisterUserService,
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar) {
  }

  isPasswordMatched: ValidatorFn =
    (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password');
      const confirmPassword = control.get('confirmPassword');
      if (password!.value !== confirmPassword?.value) {
        return { notMatched: 'Password confirm should be the same as password' }
      } else {
        return null;
      }
    }

  userRegister: FormGroup = new FormGroup({
    userName: new FormControl('',
      [Validators.required,
      Validators.minLength(3)], [this.isUserExist()]
    ),
    userEmail: new FormControl('',
      [Validators.required,
      Validators.email,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/i)],
      [this.isEmailExist()]
    ),
    password: new FormControl('',
      [Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]
    ),
    confirmPassword: new FormControl('',
      [Validators.required],
    )
  }, this.isPasswordMatched)

  get usernameControl(): FormControl {
    return this.userRegister.get('userName') as FormControl
  }

  get useremailControl(): FormControl {
    return this.userRegister.get("userEmail") as FormControl
  }

  get passwordControl(): FormControl {
    return this.userRegister.get("password") as FormControl
  }
  get confirmPasswordControl(): FormControl {
    return this.userRegister.get("confirmPassword") as FormControl
  }

  isUserExist(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.http.get<usernameData>(`http://localhost:4231/api/register/checkExistByUsername/${control.value}`)
        .pipe(
          map((res) => {
            if (res) {
              return { registered: "Username already been used." }
            } else {
              return null
            }
          })
        )
    }
  }

  isEmailExist(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.http.get<useremailData>(`http://localhost:4231/api/register/checkExistByEmail/${control.value}`)
        .pipe(
          map((res) => {
            if (res) {
              return { registered: "Email already been used." }
            } else {
              return null
            }
          })
        )
    }
  }

  ngOnInit(): void {
  }

  agreementChecked: boolean = false;
  onAgreementChecked(event: any) {
    this.agreementChecked = event.checked;
  }

  submitRegisterInfo() {
    if (!this.agreementChecked) {
      this.snackBar.open('Please check the agreement.', '', {
        duration: 2000,
      });
    } else if (!this.usernameControl.errors?.['registered'] && !this.useremailControl.errors?.['registered'] && !this.userRegister.errors?.['notMatched']) {
      this.registerUserService.CreateAccount(this.userRegister.value).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.log(error)
        }
      )
    }
    console.log(this.userRegister.value)
  }
}
