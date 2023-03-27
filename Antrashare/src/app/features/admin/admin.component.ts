import {Component, OnInit} from '@angular/core';
import {GetUsersService} from "../../core/get-users.service";
import { Router } from "@angular/router";

export interface User {
  "_id": string,
  "name": string,
  "userName": string,
  "userEmail": string,
  "password": string,
  "userRole": string,
  "age": number,
  "gender": string,
  "phone": number,
  "__v": number
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  users: any;

  constructor(private getUsers: GetUsersService, private router: Router) {
  }
  selectedUser: User | undefined;
  // users: any = [
  //   {
  //     name: "1",
  //     email: "11",
  //     phone: "111",
  //     address: "1111",
  //   },
  //   {
  //     name: "2",
  //     email: "22",
  //     phone: "222",
  //     address: "2222",
  //   },
  //   {
  //     name: "3",
  //     email: "33",
  //     phone: "333",
  //     address: "3333",
  //   }
  // ]

  selectUser(user: User) {
    // @ts-ignore
    this.selectedUser = user
    // console.log(user)
    // console.log(this.selectedUser)
  }

  ngOnInit(): void {
    this.getUsers.getAllUsers().subscribe(
      (response) => {
        this.users = response
        // console.log(this.users)
      },
      error => console.log(error)
    )
  }
  NaviToSetting(){
    this.router.navigateByUrl("/setting").then()
  }

}
