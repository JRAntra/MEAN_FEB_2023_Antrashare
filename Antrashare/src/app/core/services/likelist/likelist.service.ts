import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikelistService {

  likelistSubject = new BehaviorSubject<any[]>([]);
  likes: any[] = [];

  constructor() { }

  addToLikelist(story: any) {
    if (!this.likes.includes(story)) {
      this.likes.push(story);
      this.likelistSubject.next([...this.likes]);
    }
  }
}