import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class LikelistService {

  likelistSubject = new BehaviorSubject<string[]>([]);
  likes: string[] = [];

  constructor(private _snackBar: MatSnackBar) { }

  addToLikelist(story: any) {
    if (!this.likes.includes(story)) {
      this.likes.push(story);
      this.likelistSubject.next([...this.likes]);
      this._snackBar.open("Add to like list successfully", "Done",{duration:3000});
      return
    }
    this._snackBar.open("Already has the element in like list", "Done",{duration:3000});
  }
}
