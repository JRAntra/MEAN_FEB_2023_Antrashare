import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/core/registerService/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router,
    private registerService: RegisterService
  ) {}

  showPassword: boolean = false;
  showPasswordConfirm: boolean = false;
  isChatBox: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPassword(): void {
    this.showPasswordConfirm = !this.showPasswordConfirm;
  }

  reactiveRegisterForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.reactiveRegisterForm = new FormGroup({
      userEmail: new FormControl('', [Validators.email, Validators.required]),
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      age: new FormControl(''),
      gender: new FormControl(''),
      phone: new FormControl(''),
    });
  }

  isPasswordConfirmed: boolean = true;
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
