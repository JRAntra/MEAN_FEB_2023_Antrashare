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

  story1 = 'This is 1st long story which should be longer than 20 characters.';
  story2 = 'This is 2nd long story which should be longer than 20 characters.';
  story3 = 'This is 3rd long story which should be longer than 20 characters.';


  likeStory(story: string) {
    // const transformedChar = this.displayChar.transform(story);
    // this.likelistService.addToLikelist(transformedChar);
    this.likelistService.addToLikelist(story);
  }

  newsfeedData: any[] = [];

  ngOnInit() {
    this.newsfeedService.getNewsfeed().subscribe((data: any) => {
      this.newsfeedData = data;
    });

  }


}
