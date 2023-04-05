import { Component, OnInit } from '@angular/core';
import { GetUsersService } from "../../core/services/getUsers/get-users.service";
import { Router } from "@angular/router";
import { logMessages } from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import { loginUser, User } from "../../shared/user-pattern/user-pattern.module";
import { Subscription } from "rxjs";

// export interface User {
//   "_id": string,
//   "name": string,
//   "userName": string,
//   "userEmail": string,
//   "password": string,
//   "userRole": string,
//   "age": number,
//   "gender": string,
//   "phone": number,
//   "__v": number
// }

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  users: User[] = [];
  subscriptions: Subscription[] = [];
  adminUser: loginUser | undefined;
  // userArray = new Array<string>(10).fill("JR")
  constructor(private getUsers: GetUsersService, private router: Router) {
  }
  selectedUser: User | undefined;

  selectUser(user: User) {
    this.selectedUser = user
    // console.log(user)
    // console.log(this.selectedUser)
  }

  ngOnInit(): void {
    this.subscriptions.push(this.getUsers.getAllUsers().subscribe({
      next: response => this.users = response,
      error: error => console.log(error)
    }))
    this.adminUser = JSON.parse(localStorage.getItem("user")!)
    console.log(this.adminUser)

  }
  // (response) => {
  //   this.users = response
  //   // console.log(this.users)
  // },
  //   error => console.log(error)


  NaviToSetting() {
    this.router.navigateByUrl("/setting").then()
  }
  ngOnDestroy(): void {
    for (let subscrption of this.subscriptions) {
      subscrption.unsubscribe()
      console.log("Successfully unsubscribe")
    }
  }

}
