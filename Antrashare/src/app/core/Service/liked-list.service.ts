import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikedListService {
  likedList :any[] = [];
  likedListSubject = new BehaviorSubject<any>([]);

  constructor(private apiService : HttpClient) { 
  }

  

  likedStory(story : any){
    this.likedList.push(story);
    this.likedListSubject.next(this.likedList);
  }

  unLikedStory(story :any){
    this.likedList = this.likedList.filter(s => s._id != story._id);
    this.likedListSubject.next(this.likedList);
  }
}
