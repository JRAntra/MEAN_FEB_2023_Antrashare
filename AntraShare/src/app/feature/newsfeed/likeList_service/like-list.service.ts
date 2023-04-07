import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Story } from 'src/app/feature/newsfeed/interface/story';

@Injectable({
  providedIn: 'root',
})
export class LikeListService {
  id: number[] = new Array().fill(-1);
  likeListContent = new BehaviorSubject<Story[]>([]);
  likes: Story[] = [];
  constructor() {}

  updateLikeList(LikedContent: Story[]) {
    this.likeListContent.next(LikedContent);
  }

  addLikeStory(story: Story): void {
    this.likes.push(story);
    //this.updateLikeList(this.likes)
    this.likeListContent.next(this.likes);
    // console.log(this.likes);
  }

  removeLikeStory(story: Story): void {
    this.likes = this.likes.filter((s) => s._id !== story._id);
    this.likeListContent.next(this.likes);
  }
}
