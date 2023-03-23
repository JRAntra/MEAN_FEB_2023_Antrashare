import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  dataFromServer: Promise<any> = new Promise<any>(()=>{})

  constructor() { }

  foo():number{
    return Math.floor(Math.random()*10)
  }

  getData(): Promise<any>{
    return fetch('https://jsonplaceholder.typicode.com/posts')
  }


}
