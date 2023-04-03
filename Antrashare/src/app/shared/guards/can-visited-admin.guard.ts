import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserService } from 'src/app/core/service/user.service';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class CanVisitedAdminGuard implements CanActivate {
  constructor(private _userService:  UserService){

  }
  canActivate(
    route: ActivatedRouteSnapshot): Observable<boolean> {
      // return this._userService.getUserByUsername("locluu1")
      return this._userService.userRole
      .pipe(
        map((res) => {
          console.log(res);
          if ( res === "admin") {
            return true;
          } else {
            return false;
          }
        })
      );
    }
    // route: ActivatedRouteSnapshot) : boolean{
    //   if(this._userService.userRole === "admin"){
    //     return true;
    //   }else{
    //     return false;
    //   }
    // }

    
  
  
}
