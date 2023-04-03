import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { User } from 'src/app/feature/admin/admin/admin';
import { UserInfo } from '../authorization/userInfo';
import { LoginComponent } from 'src/app/feature/login/login/login.component';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private userData = "http://localhost:4231/api/users/getAllUsers";
  userInfo = JSON.parse(localStorage.getItem("userData")!);

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userData);
  }

}
