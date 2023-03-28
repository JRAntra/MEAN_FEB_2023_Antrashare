import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginInfoService } from 'src/app/core/services/login/login-info.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.sass']
})
export class MyProfileComponent implements OnInit {

  constructor(private loginInfoService: LoginInfoService, private http: HttpClient) { }

  apiUrl = environment.apiUrl;

  user: any;
  likes: any[] = [];

  ngOnInit(): void {
    // get email 
    const userEmail = this.loginInfoService.getEmailValue();
    this.emailControl.setValue(userEmail);

    const infoApi = "users/getAllUsers";
    const finalUrl = this.apiUrl + infoApi;

    // get info
    this.http.get(finalUrl).subscribe((users: any) => {
      const currentUser = users.find((user: any) => user.userEmail === userEmail);
      if (currentUser) {
        this.user = currentUser;
        this.nameControl.setValue(this.user.name);
        this.emailControl.setValue(this.user.userEmail);
        this.ageControl.setValue(this.user.age);
        this.genderControl.setValue(this.user.gender);
        this.phoneControl.setValue(this.user.phone);
      }
    });
  }

  panelOpenState = false

  amountValue = 15
  likeValue = 10

  // data binding and validations 
  emailControl = new FormControl('', [])
  nameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern(/^[a-z0-9]/)
  ])
  onChangeNameFormControl() {
    console.log(this.nameControl.value)
  }

  genderControl = new FormControl('', [])
  onChangeGenderFormControl() {
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

  // save info 
  onSaveClick() {
    if (this.emailControl.valid && this.nameControl.valid && this.ageControl.valid && this.phoneControl.valid) {
      const name = this.nameControl.value;
      const age = this.ageControl.value;
      const gender = this.genderControl.value;
      const phone = this.phoneControl.value;
      console.log(name, age, gender, phone);
    } else {
      alert('Please fill in all required fields.')
    }
  }
}
