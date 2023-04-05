
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from "@angular/material/menu";
import { MatSnackBar } from "@angular/material/snack-bar";
// import {LikeSnackBarComponent} from "./like-snack-bar/like-snack-bar.component";


@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.sass'],
  providers: [MatMenuTrigger]

})

export class NewsfeedComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar) { }

  // newsfeedData: any[] = [];

  ngOnInit() {
    // this.newsfeedService.getNewsfeed().subscribe((data: any) => {
    //   this.newsfeedData = data;
    // });
  }

  // AddToLikeList(event: Event, story: string): void {
  //   // @ts-ignore
  //   // for (let like of this.likeList){
  //   //   if (like === story){
  //   //     this._snackBar.open("Already has the element in like list", "Done",{duration:3000});
  //   //     return
  //   //   }
  //   // }
  //   this.likeListService.addNewStory(story);
  // }

}
