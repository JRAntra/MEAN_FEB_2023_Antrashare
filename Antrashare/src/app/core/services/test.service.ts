import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TestService {
  private apiURL = "http://localhost:4231/api/users/getAllUsers";

  constructor(private http : HttpClient) { }

  getAllUsers(): Observable<any>{
    console.log(this.http.get(this.apiURL));
    return this.http.get(this.apiURL);
  }
}
