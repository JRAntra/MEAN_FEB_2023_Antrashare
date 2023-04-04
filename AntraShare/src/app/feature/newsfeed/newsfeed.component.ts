import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsfeedServiceService } from 'src/app/feature/newsfeed/newsfeed_service/newsfeed-service.service';
import { Story } from './interface/story';
import { MatButton } from '@angular/material/button';
import { FormBuilder, Validators } from '@angular/forms';
import { LikeListService } from './likeList_service/like-list.service';

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
  constructor(
    private newService: NewsfeedServiceService,
    private likeList: LikeListService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.newService.getAllNews().subscribe((news) => {
      this.news = news;
      // console.log(this.news);
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
    // this.likes.push(story);
    // this.likeList.updateLikeList(this.likes);
    btn._elementRef.nativeElement.disabled = true;
    this.likeList.addLikeStory(story);
  }
}
