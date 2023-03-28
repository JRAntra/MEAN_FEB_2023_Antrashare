import { Component, OnInit } from '@angular/core';
import {  Router} from '@angular/router';
import { BehaviorSubject, fromEvent, ReplaySubject, Subject, Subscription } from 'rxjs';
import { TestService } from './core/services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Antrashare';
  data: any 
  subscriptions : Subscription[] = []  

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
    const subjectB = new BehaviorSubject<boolean>(true)
    const subjectC = new ReplaySubject(1)

    subjectC.next("1")
    subjectC.next("2")
    subjectC.next("3")

    this.subscriptions.push(
      subjectC.subscribe(
      res=> console.log(res),
      err=> console.log(err),
      ()=> console.log("complete")
    )
    )
  


    

    const btn: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>("#btn_listener")
    if(btn){
      this.subscriptions.push(fromEvent(btn,"click").subscribe(
        res=> console.log("the button has been clicked")
      ))

      
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

  ngOnDestroy(): void {
    this.subscriptions.forEach(
      subscription => subscription.unsubscribe()
    )
    
  }
}
