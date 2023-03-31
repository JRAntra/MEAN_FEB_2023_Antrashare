import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { RegisterService } from 'src/app/core/registerService/register.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  ) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPassword(): void {
    this.showPasswordConfirm = !this.showPasswordConfirm;
  }
 
  ngOnInit(): void {
    this.reactiveRegisterForm = new FormGroup({
      userEmail: new FormControl('', [Validators.email, Validators.required]),
      userName: new FormControl('alex', Validators.required,this.vaildUsername()),
      password: new FormControl('', Validators.required),
      age: new FormControl(''),
      gender: new FormControl(''),
      phone: new FormControl(''),
    });
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

  //Custom Async Validator for Username field
  vaildUsername(): AsyncValidatorFn{
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return of({userNotExist: "user already exist"});
      // const url = `localhost:4231/api/register/checkExistByUsername/${control.value}`;
      // return this.http.get<boolean>(url)
    }
  }
}
