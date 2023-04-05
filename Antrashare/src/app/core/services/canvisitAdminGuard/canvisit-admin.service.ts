import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanvisitAdminService {

  constructor() { }

  userRole: Observable<string> = new Observable(observer => observer.next("admin"));
}
