import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { userRegister, User } from "../../../shared/user-pattern/user-pattern.module";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http: HttpClient) { }

  CreateAccount(user: User): Observable<User> {
    let data1: userRegister = {
      "userName": user.userName,
      "userEmail": user.userEmail,
      "password": user.password
    }
    return this.http.post<any>(`${environment.apiUrl}register/createNewAccount`, data1)
  }
}