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
  user: UserInfo = { userEmail: '', password: '' };
  showPassword: boolean = false; //password toggle
  isChatBox: boolean = false;
  error = '';

  constructor(private router: Router, private auth: AuthorizationService) {}

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

  //logs the input on key up event
  OntypePassword(event: Event) {
    this.user.password = (event.target as HTMLInputElement).value;
  }

  loginClickHandler() {
    const isAuthenticated = this.auth.login(this.user).subscribe({
      next: (ref) => {
        this.user = ref;
        console.log(this.user);
        localStorage.setItem('userData', JSON.stringify(ref));
        this.router.navigate(['newsfeed']);
        environment.isWelcomeMessage = false; //to remove welcomeMessage
      },
      error: (err) => {
        this.error = err.error;
      },
    });
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
