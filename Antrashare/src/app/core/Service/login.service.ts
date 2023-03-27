import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:4231/api/login';

  constructor(private http: HttpClient) { }


  login(email: string, password: string) {
    const body = {
      userEmail: email,
      password: password,
      // userEmail:'hu.qip@northeastern.edu'
    };
    return this.http.post(this.apiUrl, body);
  }
}
