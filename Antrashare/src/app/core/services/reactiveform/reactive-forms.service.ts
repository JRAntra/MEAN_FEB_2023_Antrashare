import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
  passwordMatchValidator(g: FormGroup) {

    return g.controls["password"].value === g.controls["confirmPassword"].value ? null : {passwordMismatch: true};
  }
  // myForm: FormGroup;
  myForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    userEmail: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  }, {validators: this.passwordMatchValidator})
  constructor(private fb: FormBuilder) {

    // this.myForm = new FormGroup({
    //   userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   age: new FormControl(''),
    //   gender: new FormControl('')
    // })

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
