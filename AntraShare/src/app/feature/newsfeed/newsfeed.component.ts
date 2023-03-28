import { Component, OnInit } from '@angular/core';
import { Newsfeed } from './newsfeed';
import { environment } from 'src/environments/environment';
import { NewsfeedServiceService } from 'src/app/core/newsfeed_service/newsfeed-service.service';
import { LikelistComponent } from '../likelist/likelist/likelist/likelist.component';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit {
  constructor(private newService: NewsfeedServiceService) {}
  news: any[] = [];
  isWelcomeMessage = environment.isWelcomeMessage;

  ngOnInit(): void {
    this.newService.getAllNews().subscribe((news) => {
      this.news = news;
      // console.log(this.news);
    });
  }

  hideForm = true;
  toggleLikeList() {
    if (this.hideForm) {
      this.hideForm = false;
    } else {
      this.hideForm = true;
    }
  }

  addToLikeList(news: any) {this.newService.addToLikeList(news)}
}
