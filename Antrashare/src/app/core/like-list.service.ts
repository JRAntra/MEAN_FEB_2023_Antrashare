import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LikeListService {

  constructor() { }
  private storySubject = new Subject<string[]>()
  likeList : string[] = [];

  getStorySubject(){
    return this.storySubject
  }

  addNewStory(str: string){
    this.likeList.push(str)
    this.storySubject.next(this.likeList)
    // console.log(str)
  }
}
