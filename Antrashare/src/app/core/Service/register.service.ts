import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:4231/api/register/createNewAccount';


  constructor(private http: HttpClient) { }
  register(username: string, password: string, email: string) {
    const body = {
      userName: username,
      password: password,
      userEmail: email
    };
    return this.http.post(this.apiUrl, body);
  }
}
