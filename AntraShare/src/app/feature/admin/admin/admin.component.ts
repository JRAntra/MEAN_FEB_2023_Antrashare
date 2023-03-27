import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  userTags: any[] = [
    {id: 1, userName: 'User Tag 1', info: "this is 1/100"},
    {id: 2, userName: 'User Tag 2', info: "this is 2/100"},
    {id: 3, userName: 'User Tag 3', info: "this is 3/100"}
  ];

  userContent: any[] = []

  count: number = 4;

  constructor() { }

  onClickEventDelete(idDelete: any){
    this.userTags = this.userTags.filter(userTag => (userTag.id != idDelete))
  }

  onClickEventAdd(){
    this.userTags.push({id: this.count, userName: "User Tag " + this.count, info: "this is " + this.count + "/100"})
    this.count ++;
  }

  onClickUser(id: number){
    this.userContent = this.userTags.find(user => user.id === id).info
  }

  ngOnInit(): void {
  }

}
