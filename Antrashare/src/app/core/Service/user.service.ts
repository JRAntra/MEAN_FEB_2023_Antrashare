import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/shared/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User | null = null;
  // UserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(any[]);??
  UserSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  userRole : Observable<string>; 

  private apiUrl = 'http://localhost:4231/api/users';

  constructor(private http: HttpClient) {
    this.userRole = new Observable((observe) => {
      observe.next(this.currentUser?.userRole);
    });
  }

  getAllUsers(): Observable<any>{
    return this.http.get(`${this.apiUrl}/getAllUsers`);
  }

  getUserByUsername(username : string){
    return this.http.get(`${this.apiUrl}/getProfile/${username}`);
  }
}
