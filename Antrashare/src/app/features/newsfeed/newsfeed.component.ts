import {Component, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from "@angular/material/menu";
import {LikeListService} from "../../core/like-list.service";
import {MatSnackBar} from "@angular/material/snack-bar";
// import {LikeSnackBarComponent} from "./like-snack-bar/like-snack-bar.component";

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.sass'],
  providers: [MatMenuTrigger]
})
export class NewsfeedComponent implements OnInit {

  constructor(private likeListService:LikeListService, private _snackBar: MatSnackBar) { }
  likeList :string[] = []
  ngOnInit(): void {
    this.likeListService.getStorySubject().subscribe({
      next: value => {
        this.likeList = value
      },
      error: err => console.log(err)
    })
  }
  mockStrings = [
    "fgnaergarg aer",
    "fhajkfhaaewrohforaegfurheg",
    "faehoifhoraengurbguitheg",
    "fhaewuirghaeruhgoierahgrehaogihaerghaeroigheroiatgnioreag",
    "fjalkdehfoeraungforjeioawrnweoaingforueahgoiratoinawmeoirgfjreipjuie5rjtoi",
    "213432y47345743895yhge5898u5367uh2j3485y3498",
    "faewr",
    "fajeio",
    "1",
    " ",
  ]
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
  openMenu() {
    // @ts-ignore
    this.trigger.openMenu();
  }
  // @ViewChild('myStory', { static: false }) storyElement?: ElementRef;


  AddToLikeList(event:Event, story:string): void{
    // @ts-ignore
    for (let like of this.likeList){
      if (like === story){
        this._snackBar.open("Already has the element in like list", "Done",{duration:3000});
        return
      }
    }
    this.likeListService.addNewStory(story);

    this._snackBar.open("Add to like list successfully", "Done",{duration:3000});


  }
  // closeMenu() {
  //   // @ts-ignore
  //   this.trigger.closeMenu();
  // }
}
