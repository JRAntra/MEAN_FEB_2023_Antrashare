import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginInfoService } from 'src/app/core/services/login/login-info.service';
import { LikelistService } from 'src/app/core/services/likelist/likelist.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.sass']
})
export class MyProfileComponent implements OnInit {

  constructor(private loginInfoService: LoginInfoService,
    private http: HttpClient,
    private likeListService: LikelistService,
    private fb: FormBuilder
  ) { }

  apiUrl = environment.apiUrl;

  user: any;

  profileFB: FormGroup = new FormGroup({
  })
  likes: any[] = [];

  ngOnInit(): void {
    // subscribe to the whole like list
    this.likeListService.likelistSubject.subscribe((likes: any[]) => {
      this.likes = likes;
    });

    // info 
    this.profileFB = this.fb.group({
      nameControl: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-z0-9]/)
      ]),
      emailControl: new FormControl('', []),
      genderControl: new FormControl('', []),
      ageControl: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[0-9]/)
      ]),
      phoneControl: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(/^[0-9]/)
      ])
    });

    const userEmail = this.loginInfoService.getEmailValue();
    this.profileFB.controls['emailControl'].setValue(userEmail);

    const infoApi = "users/getAllUsers";
    const finalUrl = this.apiUrl + infoApi;

    this.http.get(finalUrl).subscribe((users: any) => {
      const currentUser = users.find((user: any) => user.userEmail === userEmail);
      if (currentUser) {
        this.user = currentUser;
        this.profileFB.controls['nameControl'].setValue(this.user.userName);
        this.profileFB.controls['emailControl'].setValue(this.user.userEmail);
        this.profileFB.controls['ageControl'].setValue(this.user.age);
        this.profileFB.controls['genderControl'].setValue(this.user.gender);
        this.profileFB.controls['phoneControl'].setValue(this.user.phone);
      }
    });
  }

  panelOpenState = false

  amountValue = 15
  likeValue = 10

  emailControl = new FormControl('', [])

  onChangeNameFormControl() {
  }
  onChangeGenderFormControl() {
  }
  onChangeAgeFormControl() {
  }
  onChangePhoneFormControl() {
  }

  onSaveClick() {
    if (this.profileFB.valid) {
      const name = this.profileFB.controls['nameControl'].value;
      const age = this.profileFB.controls['ageControl'].value;
      const gender = this.profileFB.controls['genderControl'].value;
      const phone = this.profileFB.controls['phoneControl'].value;
      console.log(name, age, gender, phone);
    } else {
      alert('Please fill in all required fields.')
    }
  }
}