import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from "@angular/material/snack-bar";
import { loginUser } from "../user-pattern/user-pattern.module";

@Injectable({
  providedIn: 'root'
})
export class AdmincheckGuard implements CanActivate {
  constructor(private snackBar: MatSnackBar) {
  }
  curUser: loginUser | undefined
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.curUser = JSON.parse(localStorage.getItem("user")!)
    if (this.curUser?.userRole === "admin") {
      return true;
    }
    this.snackBar.open("Sorry Bud, You aren't an authorized admin", "Done")
    return false;
  }



}
