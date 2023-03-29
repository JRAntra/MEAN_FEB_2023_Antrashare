import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginInfoService {

  constructor() { }

  private emailValue: string = '';

  getEmailValue(): string {
    return this.emailValue;
  }

  setEmailValue(email: string) {
    this.emailValue = email;
  }
}
