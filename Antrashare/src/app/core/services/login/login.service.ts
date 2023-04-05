import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { LoginInfoService } from './login-info.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // apiUrl = 'http://localhost:4231/api/login';
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient,
    // private loginInfoService: LoginInfoService
  ) { }
  login(email: string, password: string): Observable<any> {
    // const url = `${this.apiUrl}`;
    const loginApi = "login";
    const finalUrl = this.apiUrl + loginApi;
    const body = {
      userEmail: email,
      password: password,
    };
    return this.http.post<any>(finalUrl, body);
  }
}
