import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { delay, map, Observable } from 'rxjs';
import { TestService } from 'src/app/core/services/test.service';

@Injectable({
  providedIn: 'root'
})
export class CanVisitAdminGuard implements CanActivate {
  constructor(private test : TestService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{

      return this.test.userRole.pipe(
        delay(2000),
        map(res => {
          if(res === "admin"){
            console.log("I am the admin")
            return true
          }else {
            this.router.navigate(['login'])
            return false;
          }
        })
      )


    // if(this.test.userRole === "admin"){
    //   console.log('user is admin')
    //   return true;
    // }else{
    //   console.log('user is not admin')

    //   return false
    // }

  }
  
}
