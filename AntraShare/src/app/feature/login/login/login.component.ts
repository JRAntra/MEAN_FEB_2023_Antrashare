import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AuthorizationService } from 'src/app/core/authorization/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: string = 'ngarden1969';
  password: string = '';
  showPassword: boolean = false; //password toggle
  users: string[] = [];
  isChatBox: boolean = false;

  constructor(private router: Router, private auth: AuthorizationService) { }

  ngOnInit(): void { }

  signUp() {
    this.router.navigate(['/register']);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  //logs the input on key up event
  OntypeUserName(event: Event) {
    this.userName = (event.target as HTMLInputElement).value;
    console.log(this.userName);
  }

  //on change event, pushes the input value into the array and logs it
  pushToArray(event: Event) {
    this.userName = (event.target as HTMLInputElement).value;
  }

  //logs the input on key up event
  OntypePassword(event: Event) {
    this.password = (event.target as HTMLInputElement).value;
    console.log(this.password);
  }

  //on change event, pushes the input value into the array and logs it
  pushToPasswordArray(event: Event) {
    this.password = (event.target as HTMLInputElement).value;
  }


  user = {
    isValid: true,
  };

  loginClickHandler() {
    const isAuthenticated = this.auth.login(this.userName, this.password);
    if (isAuthenticated) {
      this.router.navigate(['newsfeed']);
      environment.isWelcomeMessage = false; //to remove welcomeMessage
    } else {
      window.alert('wrong');
    }
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
