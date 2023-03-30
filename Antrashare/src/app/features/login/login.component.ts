import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private router: Router, private loginService:LoginService) { }

  goToRegister() {
    this.router.navigate(['register']);
  }

  goToNewsfeed() {
    this.router.navigate(['news-feed']);
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),

    });

  }
  onSubmit() {
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: (result) =>{console.log(result);this.goToNewsfeed()},
      error:(error) => {console.log(error);window.alert("Email and password is UNMATCH!")} 
    });
    this.loginForm.reset();
    // this.goToNewsfeed();
  }

}
