import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  dataFromServer: Promise<any> = new Promise<any>(()=>{})
  ObservableFromServer : any
  constructor(private http: HttpClient) { }

  foo():number{
    return Math.floor(Math.random()*10)
  }

  getData(): Promise<any>{
  return fetch('https://jsonplaceholder.typicode.com/posts')

  }

  // Promise      single value        Eager- excuted once been invoked
  // Observable   stream of data      lazy-need to subscribe

  // getDateUseObservable():Observable<any>{
    getDateUseObservable():Observable<any>{

    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
    // .subscribe(
    //   (data)=>{ 
    //     this.ObservableFromServer = data
    //   }
    // )

  }

  createNewObservable(){

    // const subjectA = new Subject<any>()

    // subjectA.subscribe(
    //   res=> console.log(res)
    // )

    // subjectA.next("1")

    return new Observable<any>((subscriber)=>{
      const obj = {}
      subscriber.next(obj)
      subscriber.complete()
      subscriber.error("error here")

    })

    // set up subscription between likedlistComponent and Subject(of latest likeList)


  }

}
