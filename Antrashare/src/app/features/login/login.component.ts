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
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      result => console.log(result),
      error => console.log(error)
    );
    this.loginForm.reset();
    this.goToNewsfeed();
  }

}
