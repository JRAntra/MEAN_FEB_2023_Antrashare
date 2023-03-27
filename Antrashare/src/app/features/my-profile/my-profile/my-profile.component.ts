import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { FormControl } from '@angular/forms';
import { PasswordPipe } from '../password.pipe';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.sass']
})
export class MyProfileComponent implements OnInit {
    
    usernameForm: FormControl = new FormControl("")
    username: string = "placeholder"
    username_ifedit: boolean = false

    passwordForm: FormControl = new FormControl("")
    password: string = "placeholder"
    password_ifedit: boolean = false

    genderForm: FormControl = new FormControl("")
    gender: string = "placeholder"
    gender_ifedit: boolean = false

    ageForm: FormControl = new FormControl("")
    age: string = "placeholder"
    age_ifedit: boolean = false

    email: string = "placeholder"

    phoneForm: FormControl = new FormControl("")
    phone: string = "placeholder"
    phone_ifedit: boolean = false



    constructor() {
    }


  ngOnInit(): void {   
  }

  username_edit(): void{
    this.username_ifedit = !this.username_ifedit
  }

  username_save(): void{
    this.username_ifedit = !this.username_ifedit
    this.username = this.usernameForm.value
  }

  username_notsave(): void{
    this.username_ifedit = !this.username_ifedit
  }
  
  password_edit(): void{
    this.password_ifedit = !this.password_ifedit
  }

  password_save(): void{
    this.password_ifedit = !this.password_ifedit
    this.password = this.passwordForm.value
  }

  password_notsave(): void{
    this.password_ifedit = !this.password_ifedit
  }

  gender_edit(): void{
    this.gender_ifedit = !this.gender_ifedit
  }

  gender_save(): void{
    this.gender_ifedit = !this.gender_ifedit
    this.gender = this.genderForm.value
  }

  gender_notsave(): void{
    this.gender_ifedit = !this.gender_ifedit
  }

  age_edit(): void{
    this.age_ifedit = !this.age_ifedit
  }

  age_save(): void{
    this.age_ifedit = !this.age_ifedit
    this.age = this.ageForm.value
  }

  age_notsave(): void{
    this.age_ifedit = !this.age_ifedit
  }

  phone_edit(): void{
    this.phone_ifedit = !this.phone_ifedit
  }

  phone_save(): void{
    this.phone_ifedit = !this.phone_ifedit
    this.phone = this.phoneForm.value
  }

  phone_notsave(): void{
    this.phone_ifedit = !this.phone_ifedit
  }


  
}
