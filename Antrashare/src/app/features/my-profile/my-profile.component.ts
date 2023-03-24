import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.sass']
})
export class MyProfileComponent implements OnInit {

  constructor() { }

  panelOpenState = false

  amountValue = 15
  likeValue = 10

  emailControl = new FormControl('', [])
  nameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern(/^[a-z0-9]/)
  ])
  onChangeNameFormControl() {
    console.log(this.nameControl.value)
  }
  ageControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern(/^[0-9]/)
  ])
  onChangeAgeFormControl() {
    console.log(this.ageControl.value)
  }
  phoneControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(10),
    Validators.pattern(/^[0-9]/)
  ])
  onChangePhoneFormControl() {
    console.log(this.phoneControl.value)
  }

  onSaveClick() {

  }
  ngOnInit(): void {
  }

}
