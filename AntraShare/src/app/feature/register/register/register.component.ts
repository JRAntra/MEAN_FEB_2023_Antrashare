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
      userEmail: new FormControl('', [Validators.email, Validators.required]),
      userName: new FormControl('', [], this.vaildUsername()),
      password: new FormControl('', Validators.required),
      confirmPwd: new FormControl('', [Validators.required]),
      age: new FormControl(''),
      gender: new FormControl(''),
      phone: new FormControl(''),
    },this.haveUsernameAndPwd());
  }

  MyRequiredalidator():ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null=> {
      if(!control.value){
          return {"required": "This is the custom required validator"}
          } else {
            return null;
          }
    }
  }

  MyMinlength(num: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if(control.value.length < num) {
        return {minLength: "You violate the custom minLength validator"};
      } else return null;
    }
  }

  haveUsernameAndPwd(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if((<FormGroup>control).controls["userName"].value && (<FormGroup>control).controls["password"].value){
        return null;
      } else {
        return {sometingIsRequired: "either password or username is empty"}
      }
    }
  }

  isUserExitst():AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return of({userNotExist: "username is not exist"})
    }
  }

  updatePWD() {
    console.log(this.reactiveRegisterForm)
  }












  //Custom Async Validator for Username field
  vaildUsername(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const url = `localhost:4231/api/register/checkExistByUsername/${control.value}`;
      return this.http.get(url).pipe(
        map((res) => {
          if (res) {
            console.log("success");
            return { userExist: "Username is already been used" }
          } else {
            console.log("fail");
            return null;
          }
        })
      )
    }
  }

  //Custom Async Validator for Username field
  // vaildEmail(): AsyncValidatorFn {
  //   return (control: AbstractControl): Observable<ValidationErrors | null> => {
  //     const url = `localhost:4231/api/register/checkExistByEmail/${control.value}`;
  //     return this.http.get<usernameData>(url).pipe(
  //       map((res) => {
  //         if (res.userName.includes(control.value)) {
  //           return { emailExist: "Email is already been used" }
  //         } else {
  //           return null;
  //         }
  //       })
  //     )
  //   }
  // }

  //Custom Async Validator for special char, upper case and lower case
  // vaildPassword(): AsyncValidatorFn {
  //   return (control: AbstractControl): Observable<ValidationErrors | null> => {
  //     const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^\w\s]).{8,}$/; // Password regex pattern
  //     const valid = regex.test(control.value); // Test the password against the pattern
  //     return valid ? null : { passwordRequirements: true };
  //   }
  // }

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
