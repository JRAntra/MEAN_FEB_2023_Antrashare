import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminServiceService } from 'src/app/core/adminService/admin-service.service';

@Injectable({
  providedIn: 'root'
})
export class CanVisitAdminGuard implements CanActivate {
  constructor(private admin: AdminServiceService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.admin.userInfo.userRole === "admin"){
        console.log("admin checked");
        return true;
      } else {
        console.log("not admin");
        return false;
      }
  }
  
}
