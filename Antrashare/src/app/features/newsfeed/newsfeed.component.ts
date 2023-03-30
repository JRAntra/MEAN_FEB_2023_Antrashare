import { Component, OnInit } from '@angular/core';
import { LikelistService } from 'src/app/core/services/likelist/likelist.service';
import { NewsfeedService } from '../../core/services/newsfeed/newsfeed.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.sass'],
})
export class NewsfeedComponent implements OnInit {


  constructor(private likelistService: LikelistService, private newsfeedService: NewsfeedService) { }

  newsfeedData: any[] = [];

  ngOnInit() {
    this.newsfeedService.getNewsfeed().subscribe((data: any) => {
      this.newsfeedData = data;
    });
  }

  likeStory(item: any) {
    const story = item.content.text;
    this.likelistService.addToLikelist(story);
  }
}
