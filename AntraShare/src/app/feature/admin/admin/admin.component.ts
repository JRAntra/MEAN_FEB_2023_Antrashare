import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  userTags: any[] = [];

  userContent: any;

  // count: number = 4;

  constructor(private userService: UserService) { }

  onClickEventDelete(idDelete: any){
    this.userTags = this.userTags.filter(userTag => (userTag._id != idDelete))
  }

  // onClickEventAdd(){
  //   this.userTags.push({id: this.count, userName: "User Tag " + this.count, info: "this is " + this.count + "/100"})
  //   this.count ++;
  // }

  onClickUser(id: number){
    this.userContent = this.userTags.find(user => user._id === id)
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {this.userTags = users})
  }

}
 