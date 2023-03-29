import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikelistService {

  likelistSubject = new BehaviorSubject<string[]>([]);
  likes: string[] = [];

  constructor() { }

  addToLikelist(story: string) {
    if (!this.likes.includes(story)) {
      this.likes.push(story);
      this.likelistSubject.next([...this.likes]);
    }
  }
}