import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  AsyncValidatorFn,
  AbstractControl,
  ValidationErrors,
  FormBuilder,
  ValidatorFn,
} from '@angular/forms';
import { RegisterService } from 'src/app/core/registerService/register.service';
import { debounce, debounceTime, delay, map, Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  reactiveRegisterForm = new FormGroup({
    userEmail: new FormControl('', {
      validators: [Validators.email, Validators.required],
      asyncValidators: [this.checkEmailExist()],
      updateOn: 'blur',
    }),
    userName: new FormControl('', {
      validators: [Validators.required],
      asyncValidators: [this.checkUsernameExist()],
      updateOn: 'blur',
    }),
    password: new FormControl('', [
      Validators.required,
      this.checkPwCriteria(),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      this.checkConfirmPwMatch(),
    ]),
    age: new FormControl(''),
    gender: new FormControl(''),
    phone: new FormControl(''),
  });
  showPassword: boolean = false;
  showPasswordConfirm: boolean = false;
  isChatBox: boolean = false;
  constructor(
    private router: Router,
    private registerService: RegisterService // private fb: FormBuilder
  ) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPassword(): void {
    this.showPasswordConfirm = !this.showPasswordConfirm;
  }

  // reactiveRegisterForm: FormGroup = new FormGroup({});
  ngOnInit(): void {}

  isPasswordConfirmed: boolean = true;
  //creatig new account using register service
  onRegister(reactiveRegisterForm: FormGroup): void {
    if (reactiveRegisterForm.invalid) {
      console.log(reactiveRegisterForm.value);
      return;
    }
    delete reactiveRegisterForm.value.confirmPassword;
    this.registerService.createNewAccount(reactiveRegisterForm.value);

    this.router.navigate(['/logIn']);
    // this.registerService.createNewAccount(reactiveRegisterForm);
  }
  //need help event handler
  needHelp() {
    this.isChatBox = true;
  }
  //chat-box-button-event-handler
  onChatButtonClick() {
    this.isChatBox = false;
  }
  checkPwCriteria(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regEx = new RegExp(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{0,}$'
      );

      if (!regEx.test(control.value)) {
        return {
          passwordCriteriaFailed:
            'Password must have at least 1 uppercase, 1 lowercase, 1 special character',
        };
      }
      return null;
    };
  }
  checkConfirmPwMatch(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (
        control.value != this.reactiveRegisterForm?.controls?.password?.value
      ) {
        return { confirmPwNotMatch: 'confirm password must match password!' };
      }
      return null;
    };
  }
  checkUsernameExist(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.registerService.checkUsernameExist(control.value).pipe(
        debounceTime(3000),
        map((res) => {
          if (res) {
            return { userNameExisted: 'this username is already been taken!' };
          }
          return null;
        })
      );
    };
  }
  checkEmailExist(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.registerService.checkEmailExist(control.value).pipe(
        map((res) => {
          if (res) {
            return { userEmailExisted: 'this email is already been taken!' };
          }
          return null;
        })
      );
    };
  }
}
