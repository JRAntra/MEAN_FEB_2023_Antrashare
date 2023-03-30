import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LikedListService } from 'src/app/core/service/liked-list.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {
  isLiked: boolean = false;

  @Input() story:any;
  constructor(private _likedListService : LikedListService) { 

  }

  ngOnInit(): void {
  }

  thumbsUp(){
    this.isLiked = true;
    console.log(`thumbs up the ${this.story.name}`);
    this._likedListService.likedStory(this.story);
  }
  thumbsDown(){
    this.isLiked = false;
    console.log(`thumbs down the ${this.story.name}`);
    this._likedListService.unLikedStory(this.story);
  }

  goToStoryDetail(){
    console.log("go to story detail" );
    console.log(this.story);

  }

}
