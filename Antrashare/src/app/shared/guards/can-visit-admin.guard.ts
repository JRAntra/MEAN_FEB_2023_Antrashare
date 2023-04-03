import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserinfoService } from 'src/app/core/Service/userinfo.service';

@Injectable({
  providedIn: 'root'
})
export class CanVisitAdminGuard implements CanActivate, OnInit{
  constructor(private router: Router,
              private userinfoService: UserinfoService){
              console.log("using guard here")
              console.log(router)
              // console.log(this.userinfoService.userinfo)
            }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      console.log(state)
    if(this.userinfoService.userinfo.userRole == "admin"){
      return true
    }else{
      window.alert("You are not administrator. You will be redirecting to setting page.")
      this.router.navigate(['settings'])
      return false
    }
  }
  ngOnInit(): void {
    console.log(this.userinfoService.userinfo)
  }
}
