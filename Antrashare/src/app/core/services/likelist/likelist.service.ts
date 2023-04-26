import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class LikelistService {

  likelistSubject = new BehaviorSubject<string[]>([]);
  likes: string[] = [];

  constructor(private _snackBar: MatSnackBar) { }

  addToLikelist(story: any) {
    const index = this.likes.indexOf(`${story.content._id}:   ${story.content.text}`);
    if (index < 0) {
      this.likes.push(`${story.content._id}:   ${story.content.text}`);
      this.likelistSubject.next([...this.likes]);
      this._snackBar.open("Story is added to like list.", "Done", { duration: 2000 });
      story.isLiked = true;
      return
    } else {
      this.likes.splice(index, 1);
      this.likelistSubject.next([...this.likes]);
      this._snackBar.open("Story is removed from like list.", "Done", { duration: 2000 });
      story.isLiked = false;
    }
  }
}
