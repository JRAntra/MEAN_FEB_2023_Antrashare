import { Component, OnInit } from '@angular/core';
import {ReactiveFormsService} from "../../core/services/reactiveform/reactive-forms.service";
import {FormGroup} from "@angular/forms";
import {RegisterUserService} from "../../core/services/registeruser/register-user.service";
import {map} from "rxjs";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {UserDialogComponent} from "./user-dialog/user-dialog.component";
import {EmailDialogComponent} from "./email-dialog/email-dialog.component";
import {SucessDialogComponent} from "./sucess-dialog/sucess-dialog.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(public reactiveFormsService: ReactiveFormsService,
              private registerUserService: RegisterUserService,
              private router: Router,
              public dialoguser: MatDialog) {

    // this.myForm = this.reactiveFormsService.getFormGroup();
  }
  emailExist: boolean = true;
  usernameExist: boolean = true;

  ngOnInit(): void {
  }
  // myForm: FormGroup;
  // get registerInfo(){
  //   return this.reactiveFormsService.myForm;
  // }
  // private DialogElementsExampleDialog: ComponentType<T>;
  CheckUsername(){
    this.registerUserService.CheckAccountUsername(this.reactiveFormsService.myForm.value.userName).subscribe({
      next: response => {
        this.usernameExist = response
        // console.log(this.usernameExist)
      },
      error: error => console.log(error)
    })
  }
  CheckEmail(){
    this.registerUserService.CheckAccountEmail(this.reactiveFormsService.myForm.value.userEmail).subscribe({
      next: response => {
        this.emailExist = response
        // console.log(this.emailExist)
      },
      error: error => console.log(error)
    })
  }
  submitRegisterInfo() {
    if(this.usernameExist){
        this.dialoguser.open(UserDialogComponent);
    }
    if(this.emailExist){
      this.dialoguser.open(EmailDialogComponent);
    }
    if(!this.emailExist && !this.usernameExist){
      this.registerUserService.CreateAccount(this.reactiveFormsService.myForm.value)
        .subscribe({
          next: response => {
            this.dialoguser.open(SucessDialogComponent);
            this.router.navigateByUrl("/login").then()
          },
          error : error => {
            console.log(error)
          }
        })
    }



    // console.log(this.reactiveFormsService.myForm.value)
  }


}
