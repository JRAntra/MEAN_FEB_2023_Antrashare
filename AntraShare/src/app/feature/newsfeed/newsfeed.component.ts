import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsfeedServiceService } from 'src/app/feature/newsfeed/newsfeed_service/newsfeed-service.service';
import { LikeListService } from 'src/app/feature/newsfeed/likeList_service/like-list.service';
import { Story } from './interface/story';
import { MatButton } from '@angular/material/button';
import { FormBuilder, Validators } from '@angular/forms';
import { IdleDialogService } from './IdleDialog_service/idle-dialog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit {
  news: Story[] = [];
  isWelcomeMessage = environment.isWelcomeMessage;
  isSubmitted = false;
  newsfeedForm = this.fb.group({
    imgUrl: ['', Validators.required],
    content: ['', Validators.required],
  });
  isIdling: boolean = false;

  constructor(
    private newService: NewsfeedServiceService,
    private likeList: LikeListService,
    private fb: FormBuilder,
    private idleDialogService: IdleDialogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newService.getAllNews().subscribe((news) => {
      this.news = news;
    });

    this.idleDialogService.startTimer();

    document.addEventListener('mousemove', () => {
      this.idleDialogService.onMouseMove();
    });

    document.addEventListener('keydown', () => {
      this.idleDialogService.onKeyDown();
    });

    document.addEventListener('click', () => {
      this.idleDialogService.onClick();
    });

    this.idleDialogService.dialogObservable.subscribe((showDialog: boolean) => {
      if (showDialog) {
        this.isIdling = true;
        setTimeout(() => {
          this.isIdling = false;
          console.log("This window is idling for 5s");
          this.router.navigate(['']);
        }, 5000);
      } else {
        this.isIdling = false;
      }
    });
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

  onThumbUpBtn(story: Story, btn: MatButton) {
    btn._elementRef.nativeElement.disabled = true;//use event target,instead elementref
    this.likeList.addLikeStory(story);
  }

  onDialogCancelBtn() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  onDialogConfirmBtn() {
    this.isIdling = false;
  }
}
