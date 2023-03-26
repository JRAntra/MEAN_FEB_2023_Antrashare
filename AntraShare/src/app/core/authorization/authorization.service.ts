import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private apiUrl = 'http://localhost:4231/api';

  constructor(private http: HttpClient) {}

  login(userEmail: string, password: string): Observable<boolean> {
    const url = `${this.apiUrl}/login`;

    return this.http.post<boolean>(url, { userEmail, password });
  }
}
