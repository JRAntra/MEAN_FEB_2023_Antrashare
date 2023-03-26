import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  // private users: any[] = [
  //   { username: 'user1', password: 'password1' },
  //   { username: 'user2', password: 'password2' },
  //   { username: 'user3', password: 'password3' }
  // ];
  private apiUrl = "http://localhost:4231/api";

  constructor(private http: HttpClient) { }


  login(userEmail: string, password: string):Observable<boolean> {
    const url = `${this.apiUrl}/login`;
    // const validateData = {
    //   username, password
    // }

    return this.http.post<boolean>(url, {userEmail, password});
    // return this.http.get<boolean>('http://localhost:4231/api/users/getProfile/alex');

    // return this.http.post<{ success: boolean }>(url,validateData).toPromise().then(res => {
    //   if(res?.success) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }).catch(error => {
    //   console.error('Error logging in:', error);
    //   return false;
    // });


  //   const user = this.users.find(u => u.username === username && u.password === password);
  //   if (user) {
  //     // store user details in local storage or session storage if required
  //     return true;
  //   } else {
  //     return false;
  //   }
  }
}
