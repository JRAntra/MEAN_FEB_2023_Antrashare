import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {

  constructor(private http: HttpClient) { }

  getNewsfeed(): Observable<any> {
    return this.http.get('http://localhost:4231/api/news');

  }
}