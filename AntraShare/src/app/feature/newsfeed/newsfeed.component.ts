import { Component, OnDestroy, OnInit } from '@angular/core';
import { Newsfeed } from './newsfeed';
import { environment } from 'src/environments/environment';
import { NewsfeedServiceService } from 'src/app/core/newsfeed_service/newsfeed-service.service';
import { LikeListService } from 'src/app/core/liked_list_service/like-list.service';
@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit, OnDestroy {
  hideForm = true;
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
  toggleLikeList() {
    this.hideForm = false;
  }
  hideListEvent(value: boolean) {
    this.hideForm = value;
  }
  addLike(story: any) {
    this.likes.push(story);
    this.likeService.onLikeListDataChange(this.likes);
  }
  ngOnDestroy(): void {}
}
