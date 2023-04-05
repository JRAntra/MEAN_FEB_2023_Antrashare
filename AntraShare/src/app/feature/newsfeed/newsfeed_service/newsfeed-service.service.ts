import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from '../interface/story';
@Injectable({
  providedIn: 'any',
})
export class NewsfeedServiceService {
  constructor(private http: HttpClient) {}

  getAllNews(): Observable<Story[]> {
    return this.http.get('http://localhost:4231/api/news') as Observable<
      Story[]
    >;
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
