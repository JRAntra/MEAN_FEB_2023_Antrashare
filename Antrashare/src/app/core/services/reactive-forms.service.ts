import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

// import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReactiveFormsService {
  // @ts-ignore
  // public sharedFormModel: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(null);
  // buildForm(): FormGroup {
  //   return this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required]
  //   });
  // }
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      userEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-z])([a-zA-Z0-9]+)$')]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator })
    // this.myForm = new FormGroup({
    //   userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   age: new FormControl(''),
    //   gender: new FormControl('')
    // })

  }
  passwordMatchValidator(g: FormGroup) {

    return g.get('password')?.value === g.get('confirmPassword')?.value ? null : { passwordMismatch: true };
  }

  get userName() {
    return this.myForm.get('userName')
  }
  get userEmail() {
    return this.myForm.get('userEmail')
  }
  get password() {
    return this.myForm.get('password')
  }


  // getFormGroup(){
  //   return new FormGroup({
  //     userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //     userEmail: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  //     confirmedPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  //   }, { validator: this.passwordMatchValidator })
  // }
}