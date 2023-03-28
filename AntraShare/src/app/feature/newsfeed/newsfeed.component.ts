import { Component, OnDestroy, OnInit } from '@angular/core';
import { Newsfeed } from './newsfeed';
import { environment } from 'src/environments/environment';
import { NewsfeedServiceService } from 'src/app/core/newsfeed_service/newsfeed-service.service';
import { LikeListService } from 'src/app/core/liked_list_service/like-list.service';
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit, OnDestroy {
  news: any[] = [];
  isWelcomeMessage = environment.isWelcomeMessage;
  likes: any[] = [];
  constructor(
    private newService: NewsfeedServiceService,
    private likeService: LikeListService
  ) {}

  ngOnInit(): void {
    this.newService.getAllNews().subscribe((news) => {
      this.news = news;
      // console.log(this.news);
    });
  }
  addLike(story: any, btn: MatButton) {
    btn._elementRef.nativeElement.disabled = true;
    this.likes.push(story);
    this.likeService.onLikeListDataChange(this.likes);
  }
  ngOnDestroy(): void {}
}
