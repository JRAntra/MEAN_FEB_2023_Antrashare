import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NewsfeedServiceService {
  constructor(private http: HttpClient) {}

  getAllNews(): Observable<any> {
    return this.http.get('http://localhost:4231/api/news');
  }

  getNewById(id: any): Observable<any> {
    return this.http.get('http://localhost:4231/api/news/' + id);
  }

  getLikeUser(id: any): Observable<any> {
    return this.http.get(
      'http://localhost:4231/api/register/getUserById/' + id
    );
  }
}
