import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeListService {

  likeListContent = new BehaviorSubject<any[]>([]);
  likes: any[] = []
  constructor() { }

  updateLikeList(a: any[]) {
    this.likeListContent.next(a);
  }

  addLikeStory(story: any[]) {
    this.likes.push(story)
    //this.updateLikeList(this.likes)
    this.likeListContent.next(this.likes);
    console.log(this.likes);
  }
}
