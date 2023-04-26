
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from "@angular/material/menu";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TimerService } from 'src/app/core/services/timer/timer.service';


@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.sass'],
  providers: [
    MatMenuTrigger,
    TimerService
  ]
})

export class NewsfeedComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar,
    private timerService: TimerService
  ) { }

  // newsfeedData: any[] = [];

  ngOnInit() {
    this.timerService.startTimer();
  }
  // reset timer on mousemove or on click
  @HostListener('window:mousemove')
  @HostListener('window:click')
  @HostListener('window:keydown')
  resetTimer() {
    this.timerService.resetTimer();
  }

  logout() {
    this.timerService.logoutConfirm();
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
