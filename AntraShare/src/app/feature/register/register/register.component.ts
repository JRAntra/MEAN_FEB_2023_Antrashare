import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  ngOnInit(): void {}
}
