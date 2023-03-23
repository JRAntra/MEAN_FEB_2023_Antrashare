import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      password_confirm: new FormControl(),
      email: new FormControl()
    });

  }
  onSubmit() {
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }

}
