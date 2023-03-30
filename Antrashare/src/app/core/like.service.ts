import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
// import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  // likesubject = new Subject<any>();
  likelist: any = [];
  likelistsubject = new BehaviorSubject<any>([]);
  
  constructor() {
   }
  emitLike(story: any){
    //
    if(!this.likelist.includes(story)){
      this.likelist.push(story)
    }
    this.likelistsubject.next(this.likelist)
  }
}
