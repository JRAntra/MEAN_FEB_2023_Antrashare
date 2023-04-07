import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminServiceService } from 'src/app/core/adminService/admin-service.service';

@Injectable({
  providedIn: 'root'
})
export class CanVisitAdminGuard implements CanActivate {
  constructor(private adminService: AdminServiceService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.adminService.userInfo.userRole === "admin"){ //crate a "constant.ts" file store the constant variable"admin"
        console.log("admin checked");
        return true;
      } else {
        console.log("not admin");
        return false;
      }
  }
  
}
