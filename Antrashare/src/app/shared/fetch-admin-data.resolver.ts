import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { delay, map, Observable, of, tap } from 'rxjs';
import { TestService } from '../core/services/test.service';

@Injectable({
  providedIn: 'root'
})
export class FetchAdminDataResolver implements Resolve<boolean> {

  constructor(private test: TestService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.test.getDateUseObservable().pipe(
      delay(2000),
      // tap(res=> console.log("All data has been returned"),
      map(res=> { console.log("All data has been returned");
       return true}
      ))
    
  }
}
