import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/core/adminService/admin-service.service';
import { User } from './admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  userTags: User[] = [];

  userContent: any;

  constructor(private userService: AdminServiceService) { }

  onClickEventDelete(idDelete: any){
    this.userTags = this.userTags.filter(userTag => (userTag._id != idDelete))
  }

  // onClickEventAdd(){
  //   this.userTags.push({id: this.count, userName: "User Tag " + this.count, info: "this is " + this.count + "/100"})
  //   this.count ++;
  // }

  onClickUser(id: string){
    this.userContent = this.userTags.find(user => user._id === id)
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {this.userTags = users})
  }

}
 