import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/model/user';
import { Observable, of} from 'rxjs';

//UserInfoService:
//Is used to store the user information in the local storage.
//Inside this service, it will contains all the current logged in
//User information.
@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  // if_login: Observable<boolean> = of(false);
  if_login: boolean = false;
  private user: User = {
    userName: "",
    userEmail: "",
    password: "",
    userRole: ""
  };

  constructor() {
  }
  set_userinfo_login(userName: string, userEmail: string, userRole: string, age?: number, phone?: number): void{
    this.user.userName = userName
    this.user.userEmail = userEmail
    this.user.userRole = userRole
    this.user.age = age
    this.user.phone = phone
    this.if_login = true
  }

  get userinfo() {
    return this.user
  }

}
