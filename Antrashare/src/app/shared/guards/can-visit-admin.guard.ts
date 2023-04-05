import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
// import { CanvisitAdminService } from '../../core/services/canvisitAdminGuard/canvisit-admin.service';

@Injectable({
  providedIn: 'root'
})
export class CanVisitAdminGuard implements CanActivate {
  // constructor(private canvisitAdminService: CanvisitAdminService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    const userRole = localStorage.getItem('userRole');

    if (userRole === 'admin') {
      console.log(userRole);
      console.log('You are admin.');
      return of(true);
    } else {
      console.log('You are not admin.');
      console.log(userRole);
      return of(false);
    }
  }
  // )
  // )
  // if (this.canvisitAdminService.userRole === "admin") {
  //   return true;
  // } else {
  //   return false;
  // }
  // return this.canvisitAdminService.userRole.pipe(
  //   delay(2000),
  //   map(res => {
  //     if (res === "admin") {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   })
  // )
}

// }
