import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private router: Router) { }

  goToRegister() {
    this.router.navigate(['register']);
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),

    });

  }
  onSubmit() {
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }

}
