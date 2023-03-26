import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) {}

  //password toggle

  showPassword: boolean = false;
  showPasswordConfirm: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPassword(): void {
    this.showPasswordConfirm = !this.showPasswordConfirm;
  }
  //takes you to login page when clicked logout in
  onRegister() {
    this.router.navigate(['/logIn']);
  }

  reactiveRegisterForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.reactiveRegisterForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
    });
  }

  isChatBox: boolean = false;

  //need help event handler
  needHelp() {
    this.isChatBox = true;
  }
  //chat-box-button-event-handler
  onChatButtonClick() {
    this.isChatBox = false;
  }
}
