import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LikeList } from 'src/app/feature/newsfeed/interface/likeList';
import { Story } from 'src/app/feature/newsfeed/interface/story';

@Injectable({
  providedIn: 'root',
})
export class LikeListService {
  likeListContent = new BehaviorSubject<Story[]>([]);
  likes: Story[] = [];
  constructor() {}

  updateLikeList(LikedContent: Story[]) {
    this.likeListContent.next(LikedContent);
  }

  addLikeStory(story: Story) {
    this.likes.push(story);
    //this.updateLikeList(this.likes)
    this.likeListContent.next(this.likes);
    console.log(this.likes);
  }
}
