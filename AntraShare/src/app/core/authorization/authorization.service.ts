import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from './userInfo';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  
  private apiUrl = "http://localhost:4231/api";

  constructor(private http: HttpClient) {}

  login(user: UserInfo): Observable<UserInfo> {
    const url = `${this.apiUrl}/login`;

    return this.http.post<UserInfo>(url, user);
  }
}
