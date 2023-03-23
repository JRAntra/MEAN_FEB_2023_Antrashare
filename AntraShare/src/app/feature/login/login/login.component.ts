import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  signUp() {
    this.router.navigate(['/register']);
  }

  userName: string = 'ngarden1969';
  
  //logs the input on key up event
  OntypeUserName(event: Event) {
    this.userName = (event.target as HTMLInputElement).value;
    console.log(this.userName);
  }
  users: string[] = [];
  //on change event, pushes the input value into the array and logs it
  pushToArray(event: Event) {
    this.userName = (event.target as HTMLInputElement).value;
    this.users.push(this.userName);
  }

  ngOnInit(): void {}

  user = {
    isValid: true,
  };

  loginClickHandler() {
    if (this.user.isValid) {
      this.router.navigate(['newsfeed']);
    }
  }
  isChatBox:boolean =false;

  //need help event handler
  needHelp(){
    this.isChatBox= true;
  }
  //chat-box-button-event-handler
  onChatButtonClick(){
    this.isChatBox = false;
  
  }
}
