import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  checkIfEmailExists(email: string): Observable<any>{
    return this.http.get('http://localhost:4231/api/register/checkExistByEmail/'+email)
  }
}
