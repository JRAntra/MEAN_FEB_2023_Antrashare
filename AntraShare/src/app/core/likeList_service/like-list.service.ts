import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeListService {

  likeListContent = new Subject<any[]>();
  constructor() { }

  updateLikeList(a: any[]) {
    this.likeListContent.next(a);
  }
}
