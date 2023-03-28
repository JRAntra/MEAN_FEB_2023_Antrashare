import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LikeListService {
  likesListData = new Subject<any[]>();
  constructor() {}

  onLikeListDataChange(likes: any[]) {
    this.likesListData.next(likes);
  }
}
