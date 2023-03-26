import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  createNewAccount(reactiveRgisterForm: FormGroup) {
    this.http
      .post(
        'http://localhost:4231/api/register/createNewAccount',
        reactiveRgisterForm
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
