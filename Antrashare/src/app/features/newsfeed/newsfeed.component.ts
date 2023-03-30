
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from "@angular/material/menu";
import {LikeListService} from "../../core/services/like-list/like-list.service";
import { LikelistService } from 'src/app/core/services/likelist/likelist.service';
import { NewsfeedService } from '../../core/services/newsfeed/newsfeed.service';
import {MatSnackBar} from "@angular/material/snack-bar";
// import {LikeSnackBarComponent} from "./like-snack-bar/like-snack-bar.component";


@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.sass'],
  providers: [MatMenuTrigger]

})

export class NewsfeedComponent implements OnInit {

  constructor(private likeListService:LikeListService,
              private likelistService: LikelistService,
              private _snackBar: MatSnackBar,
              private newsfeedService: NewsfeedService) { }
  @ViewChild(MatMenuTrigger) trigger?: MatMenuTrigger;
  longText = `CS 2`;
  storys = [
    '1.This is a long story which should be longer than 20 characters.',
    '2.This is a long story which should be longer than 20 characters.',
    '3.This is a long story which should be longer than 20 characters.',
    '4.This is a long story which should be longer than 20 characters.',
    '5.This is a long story which should be longer than 20 characters.',
    '6.This is a long story which should be longer than 20 characters.',
    '7.This is a long story which should be longer than 20 characters.',
    '8.This is a long story which should be longer than 20 characters.',
    '9.This is a long story which should be longer than 20 characters.',
    '10.This is a long story which should be longer than 20 characters.',

  ];

  newsfeedData: any[] = [];

  ngOnInit() {
    this.newsfeedService.getNewsfeed().subscribe((data: any) => {
      this.newsfeedData = data;
    });
  }

  likeStory(item: any) {
    const story = item.content.text;
    this.likelistService.addToLikelist(story);
  }

  AddToLikeList(event: Event, story: string): void {
    // @ts-ignore
    // for (let like of this.likeList){
    //   if (like === story){
    //     this._snackBar.open("Already has the element in like list", "Done",{duration:3000});
    //     return
    //   }
    // }
    this.likeListService.addNewStory(story);
  }

}
