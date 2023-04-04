import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/model/user';
import { Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {
  }
  set_userinfo_login(user: User): void{
    this.user.userName = user.userName
    this.user.userEmail = user.userEmail
    this.user.userRole = user.userRole
    this.user.age = user.age
    this.user.phone = user.phone
    this.if_login = true
  }

  get userinfo() {
    return this.user
  }

  get_allusers(){
    return this.http.get('http://localhost:4231/api/users/getAllUsers')
  }
}