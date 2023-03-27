import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsfeedGetdataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get('http://localhost:4231/api/news')
  }
}
