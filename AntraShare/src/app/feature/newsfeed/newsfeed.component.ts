import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsfeedServiceService } from 'src/app/feature/newsfeed/newsfeed_service/newsfeed-service.service';
import { Story } from './interface/story';
import { FormBuilder, Validators } from '@angular/forms';
import { LikeListService } from './likeList_service/like-list.service';
import {
  Observable,
  Subscription,
  debounceTime,
  fromEvent,
  map,
  pipe,
  tap,
} from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SessionTimeoutDialogComponent } from './session-timeout-dialog/session-timeout-dialog.component';
import { DialogTimerService } from './dialog-service/dialog-timer.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit, OnDestroy {
  // @HostListener('document:keypress', ['$event'])
  // onKeyPress(e: any) {
  //   this.closeDialog();
  //   this.timerDialog.resetTimer(true);
  // }
  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(e: any) {
  //   this.closeDialog();
  //   this.timerDialog.resetTimer(true);
  // }
  // @HostListener('document:scroll', ['$event'])
  // onScroll(e: any) {
  //   this.closeDialog();
  //   this.timerDialog.resetTimer(true);
  // }
  timeOutDialog$: Subscription = new Subscription();
  id: number[] = [];
  news$: Observable<Story[]> = new Observable();
  isWelcomeMessage = environment.isWelcomeMessage;
  isSubmitted = false;
  newsfeedForm = this.fb.group({
    imgUrl: ['', Validators.required],
    content: ['', Validators.required],
  });
  constructor(
    private newService: NewsfeedServiceService,
    private likeList: LikeListService,
    private fb: FormBuilder,
    private sessionTimeoutDialog: MatDialog,
    private timerDialog: DialogTimerService
  ) {
    this.id = likeList.id;
  }
  ngOnInit(): void {
    // this.newService.getAllNews().subscribe((news) => {
    //   this.news = news;
    //   // console.log(this.news);
    // });
    this.news$ = this.newService.getAllNews().pipe(map((res) => res.reverse()));
    this.timerDialog.startTimer();
    this.timeOutDialog$ = this.timerDialog.timeUp.subscribe((res) => {
      if (res) {
        this.openDialog();
        // this.timerDialog.resetTimer(false);
      }
    });
  }

  ngAfterViewInit() {
    const keypress$ = fromEvent(document, 'keypress').pipe(
      debounceTime(300),
      tap(() => {
        this.timerDialog.resetTimer(true);
        // console.log('scrolling!');
      })
    );
    const scroll$ = fromEvent(document, 'scroll').pipe(
      debounceTime(300),
      tap(() => {
        this.timerDialog.resetTimer(true);
        // console.log('scrolling!');
      })
    );
    const click$ = fromEvent(document, 'click').pipe(
      debounceTime(300),
      tap(() => {
        this.timerDialog.resetTimer(true);
        // console.log('scrolling!');
      })
    );
    click$.subscribe();
    keypress$.subscribe();
    scroll$.subscribe();
  }
  closeDialog() {
    this.sessionTimeoutDialog.closeAll();
  }
  openDialog() {
    const sessionDialogRef = this.sessionTimeoutDialog.open(
      SessionTimeoutDialogComponent,
      {
        width: '25%',
        height: '15%',
      }
    );
    // sessionDialogRef.disableClose = true;
    sessionDialogRef.afterClosed().subscribe((done) => {
      if (!done) this.timerDialog.resetTimer(true);
    });
  }

  resetTimer() {
    this.timerDialog.resetTimer(true);
  }

  onError(name: string): boolean | undefined {
    return (
      this.newsfeedForm.get(name)?.invalid &&
      (this.newsfeedForm.get(name)?.dirty ||
        this.newsfeedForm.get(name)?.touched ||
        this.isSubmitted)
    );
  }

  onSubmit(): void {
    console.log(this.newsfeedForm);
    this.isSubmitted = true;
  }
  onThumbUpBtn(story: Story, btnId: number) {
    if (this.id[btnId] === btnId) {
      this.id[btnId] = -1;
      this.likeList.removeLikeStory(story);
    } else {
      this.id[btnId] = btnId;
      this.likeList.addLikeStory(story);
    }
  }
  ngOnDestroy() {
    this.timeOutDialog$.unsubscribe();
  }
}
