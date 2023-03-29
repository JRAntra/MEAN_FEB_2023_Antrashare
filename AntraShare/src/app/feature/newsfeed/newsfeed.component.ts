import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsfeedServiceService } from 'src/app/feature/newsfeed/newsfeed_service/newsfeed-service.service';
import { LikeListService } from 'src/app/feature/newsfeed/likeList_service/like-list.service';
import { Story } from './interface/story';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit {
  news: Story[] = [];
  isWelcomeMessage = environment.isWelcomeMessage;

  constructor(
    private newService: NewsfeedServiceService,
    private likeList: LikeListService
    ) {}

  ngOnInit(): void {
    this.newService.getAllNews().subscribe((news) => {
      this.news = news;
      console.log(this.news);
    });

    // this.likeList.likeListContent.subscribe((observer) => {
    //   this.likes = observer;
    //   console.log(this.likes);
    // }
    // )
  }

  onThumbUpBtn(story: Story, btn: MatButton) {
    // this.likes.push(story);
    // this.likeList.updateLikeList(this.likes);
    btn._elementRef.nativeElement.disabled = true;
    this.likeList.addLikeStory(story);
  }

}
