import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class LikeListService {

  constructor(private _snackBar: MatSnackBar) { }
  private storySubject = new Subject<string[]>()
  likeList : string[] = [];

  getStorySubject(){
    return this.storySubject
  }

  addNewStory(str: string){
    // for (let like of this.likeList){
      if (this.likeList.includes(str)){
        this._snackBar.open("Already has the element in like list", "Done",{duration:3000});
        return
      }
    // }
    this.likeList.push(str)
    this.storySubject.next([...this.likeList])
    this._snackBar.open("Add to like list successfully", "Done",{duration:3000});

    // console.log(str)
  }
}
