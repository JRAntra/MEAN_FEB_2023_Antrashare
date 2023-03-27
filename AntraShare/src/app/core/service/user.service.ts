import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/feature/admin/admin/admin';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData = "http://localhost:4231/api/users/getAllUsers"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userData);
  }
}
