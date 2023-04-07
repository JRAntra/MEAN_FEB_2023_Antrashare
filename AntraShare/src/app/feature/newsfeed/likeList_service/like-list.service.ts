import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Story } from 'src/app/feature/newsfeed/interface/story';

@Injectable({
  providedIn: 'root'
})
export class LikeListService {

  likeListContent = new BehaviorSubject<Story[]>([]);
  likes: Story[] = []
  constructor() { }

  addLikeStory(story: Story) {
    this.likes.push(story)
    this.likeListContent.next(this.likes);
    console.log(this.likes);
  }
}
