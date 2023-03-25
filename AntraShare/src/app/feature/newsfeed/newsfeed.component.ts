import { Component, OnInit } from '@angular/core';
import { Newsfeed } from './newsfeed';
import { environment } from 'src/environments/environment';
import { NewsfeedServiceService } from 'src/app/core/newsfeed-service.service';
@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit {
  constructor(private newService: NewsfeedServiceService) {}
  news: any[] = [];
  ngOnInit(): void {
    this.newService.getAllNews().subscribe((news) => {
      this.news = news;
      // console.log(this.news);
    });
  }
  isWelcomeMessage = environment.isWelcomeMessage;

  hideForm = true;
  toggleLikeList() {
    if (this.hideForm) {
      this.hideForm = false;
    } else {
      this.hideForm = true;
    }
  }
}
