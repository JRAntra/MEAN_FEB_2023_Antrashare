import { Component, OnInit } from '@angular/core';
import {  Router} from '@angular/router';
import { fromEvent, Subject } from 'rxjs';
import { TestService } from './core/services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Antrashare';
  data: any 

  constructor(private router : Router,
    private testService: TestService
    ){

  }

  ngOnInit(): void {
    this.testService.getData();
    // this.testService.getDateUseObservable()
    // this.testService.createNewObservable().subscribe(
    //   (res)=> console.log(res),
    //   (err)=>console.log(err),
    //   ()=>console.log('complete')

    // )
    const subjectA = new Subject<any>()

    subjectA.subscribe(
      res=> console.log(res),
      err=> console.log(err),
      ()=> console.log("complete")
    )
    
    subjectA.next("1")
    // subjectA.error('error message here')
    subjectA.complete()
    subjectA.next("2")

    

    const btn: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>("#btn_listener")
    if(btn){
      fromEvent(btn,"click").subscribe(
        res=> console.log("the button has been clicked")
      )

      
    }

  }

  onCall(){
    // console.log("here")
    // this.testService.getDateUseObservable().subscribe(
    //     (res)=> {
    //       this.data = res;
    //       console.log(this.data)
    //     }
      
    // )
    // Promise

    // this.data = this.testService.ObservableFromServer

    
 
  }


  onClickAdmin(){
   
    this.router.navigate(["admin"])
  }
}
