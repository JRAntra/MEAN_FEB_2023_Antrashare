import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Newsfeed } from 'src/app/feature/newsfeed/newsfeed';
@Injectable({
  providedIn: 'root',
})
export class NewsfeedServiceService {

  private _likedFeed = new Subject<any[]>();
  private _likedFeedList: any[] = [];

  private likedFeedList_Sub = new Observable<Newsfeed[]>( observer => {
    observer.next(this._likedFeedList)
    this._likedFeed.subscribe(value => {
      this._likedFeedList = value;
      observer.next(value);
    });
  });

  constructor(private http: HttpClient) { }

  addToLikeList(news: any) {
    this._likedFeedList.push(news)
    this._likedFeed.next(this._likedFeedList);
  }

  getLikedFeedList(): Observable<any[]> {
    return this.likedFeedList_Sub
  }

  getAllNews(): Observable<any> {
    return this.http.get('http://localhost:4231/api/news');
  }

  getNewById(id: any): Observable<any> {
    return this.http.get('http://localhost:4231/api/news/' + id);
  }

  getLikeUser(id: any): Observable<any> {
    return this.http.get(
      'http://localhost:4231/api/register/getUserById/' + id
    );
  }
}
