import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterAccount, User} from "../../../shared/user-pattern/user-pattern.module";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http: HttpClient) { }

  CheckAccountEmail(data: string): Observable<any> {
    // console.log(data)
    return this.http.get(`${environment.apiUrl}register/checkExistByEmail/${data}`)
  }
  CheckAccountUsername(data:string): Observable<any>{
    return this.http.get(`${environment.apiUrl}register/checkExistByUsername/${data}`)
  }

  CreateAccount(data: User){
    // console.log(JSON.stringify(data))
    let data1 : RegisterAccount = {
      "userName": data.userName,
      "userEmail": data.userEmail,
      "password": data.password
    }
    // console.log(JSON.stringify(data1))
    return this.http.post<any>(`${environment.apiUrl}register/createNewAccount`, data1)
  }


}
