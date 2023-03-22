import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  // registerationForm?: FormGroup;

  userName = new FormControl('');

  onSubmit() {
    console.log(this.userName);
  }
  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    // this.registerationForm = new FormGroup({
    //   userName: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // }, this.passwordMatchingValidator);
  }


//  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
//     return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
//       { notmatched: true }
//   };



    // ------------------------------------
  // Getter methods for all form controls
  // ------------------------------------
  // get userName() {
  //   return this.registerationForm.get('userName') as FormControl;
  // }

  // get email() {
  //   return this.registerationForm.get('email') as FormControl;
  // }
  // get password() {
  //   return this.registerationForm.get('password') as FormControl;
  // }
  // get confirmPassword() {
  //   return this.registerationForm.get('confirmPassword') as FormControl;
  // }
  // get mobile() {
  //   return this.registerationForm.get('mobile') as FormControl;
  // }
  // ------------------------



}
