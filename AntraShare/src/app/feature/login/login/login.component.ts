import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel, FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AuthorizationService } from 'src/app/core/authorization/authorization.service';
import { UserInfo } from 'src/app/core/authorization/userInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // userEmail: User = '';
  // password: string = '';
  user: UserInfo = {};
  showPassword: boolean = false; //password toggle
  users: string[] = [];
  isChatBox: boolean = false;
  error = "";

  constructor(private router: Router, private auth: AuthorizationService) { }

  reactiveLoginForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.reactiveLoginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  signUp() {
    this.router.navigate(['/register']);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  //logs the input on key up event
  OntypeUserName(event: Event) {
    this.user.userEmail = (event.target as HTMLInputElement).value;
    // console.log(this.userEmail);
  }

  // //on change event, pushes the input value into the array and logs it
  // pushToArray(event: Event) {
  //   this.userEmail = (event.target as HTMLInputElement).value;
  // }

  //logs the input on key up event
  OntypePassword(event: Event) {
    this.user.password = (event.target as HTMLInputElement).value;
  }

  // //on change event, pushes the input value into the array and logs it
  // pushToPasswordArray(event: Event) {
  //   this.password = (event.target as HTMLInputElement).value;
  // }

  // user = {
  //   isValid: true,
  // };

  loginClickHandler() {
    const isAuthenticated = this.auth.login(this.user).subscribe({
      next: (ref) => {
        console.log(ref);
        console.log(this.user);
        this.router.navigate(['newsfeed']);
        environment.isWelcomeMessage = false; //to remove welcomeMessage
      },
      error: (err) => {
        this.error = err.error;
        console.log(this.error);
      }
    })
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
