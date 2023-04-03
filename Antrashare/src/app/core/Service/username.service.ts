import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  constructor(private http: HttpClient) {}

  checkIfUsernameExists(username: string): Observable<any>{
    return this.http.get('http://localhost:4231/api/register/checkExistByUsername/'+username)
  }

}
