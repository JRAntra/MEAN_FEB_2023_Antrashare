import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, AsyncValidatorFn, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { RegisterService } from 'src/app/core/registerService/register.service';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface usernameData {
  userName: string[];
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  showPassword: boolean = false;
  showPasswordConfirm: boolean = false;
  isChatBox: boolean = false;
  reactiveRegisterForm: FormGroup = new FormGroup({});
  isPasswordConfirmed: boolean = true;

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private http: HttpClient
  ) { }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPassword(): void {
    this.showPasswordConfirm = !this.showPasswordConfirm;
  }

  ngOnInit(): void {
    this.reactiveRegisterForm = new FormGroup({
      userEmail: new FormControl('', Validators.required, this.checkUserEmailExist()),
      userName: new FormControl('', Validators.required, this.checkUsernameExist()),
      password: new FormControl('', [Validators.required, this.checkPassword()]),
      confirmPwd: new FormControl('', [Validators.required, this.checkConfirmPasswordMatch()]),
      age: new FormControl(''),
      gender: new FormControl(''),
      phone: new FormControl(''),
    }, this.haveUsernameAndPwd());
  }

  haveUsernameAndPwd(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if ((<FormGroup>control).controls["userName"].value && (<FormGroup>control).controls["password"].value) {
        return null;
      } else {
        return { sometingIsRequired: "either password or username is empty" }
      }
    }
  }

  updatePWD() {
    console.log(this.reactiveRegisterForm)
  }

  //Custom Async Validator for Username field
  checkUsernameExist(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.registerService.checkUsernameExist(control.value).pipe(
        map((res) => {
          if (res) {
            return { userNameExisted: 'This username is already been taken!' };
          }
          return null;
        })
      );
    };
  }

  //Custom Async Validator for Username field
  // vaildUsername(): AsyncValidatorFn {
  //   return (control: AbstractControl): Observable<ValidationErrors | null> => {
  //     const url = `localhost:4231/api/register/checkExistByUsername/${control.value}`;
  //     return this.http.get(url).pipe(
  //       map((res) => {
  //         if (res) {
  //           return { userExist: "Username is already been used" }
  //         } else {
  //           return null;
  //         }
  //       })
  //     )
  //   }
  // }

  //Custom Async Validator for Email field
  checkUserEmailExist(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.registerService.checkEmailExist(control.value).pipe(
        map((res) => {
          if (res) {
            return { emailExist: "This Email is already been used" }
          } else {
            return null;
          }
        })
      )
    }
  }

  //Custom Validator for special char, upper case and lower case
  checkPassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regEx = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{0,}$');
      if (!regEx.test(control.value)) {
        return { passwordFailed:'Password must have at least 1 uppercase, 1 lowercase, 1 special character' }
      }
      return null;
    };
  }

  //Custom Validator for checking the confirmed password is matched with the password 
  checkConfirmPasswordMatch(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value != this.reactiveRegisterForm?.controls?.['password']?.value) {
        return { confirmPasswordNotMatch: 'confirm password must match password!' };
      }
      return null;
    };
  }

  //creatig new account using register service
  onRegister(reactiveRegisterForm: FormGroup) {
    this.router.navigate(['/logIn']);
    this.registerService.createNewAccount(reactiveRegisterForm);
    console.log();
  }
  //need help event handler
  needHelp() {
    this.isChatBox = true;
  }
  //chat-box-button-event-handler
  onChatButtonClick() {
    this.isChatBox = false;
  }
}
