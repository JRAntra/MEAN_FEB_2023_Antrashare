import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, of, from, ReplaySubject, Subject, Subscription, interval, Observable, forkJoin, filter, tap, debounceTime, throttle, throttleTime, delay, take, takeUntil, map, switchMap } from 'rxjs';
import { TestService } from './core/services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Antrashare';
  data: any
  subscriptions: Subscription[] = []

  constructor(private router: Router,
    private testService: TestService
  ) {

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
    // const subjectB = new BehaviorSubject<boolean>(true)
    // const subjectC = new ReplaySubject(1)

    // subjectC.next("1")
    // subjectC.next("2")
    // subjectC.next("3")

    // this.subscriptions.push(
    //   subjectC.subscribe(
    //   res=> console.log(res),
    //   err=> console.log(err),
    //   ()=> console.log("complete")
    // )
    // )

    // Creation Operator
    // const newObs = of(1,2,3)

    // const newObs1 = new Observable(
    //   a =>{
    //     a.next(1);

    //     setTimeout(() => {
    //       a.next(2);

    //     }, 100000);
    //     a.next(3);
    //     a.error("err")
    //   }
    // )

    // // from([1,2,3])
    // fromEvent(HTMLtarget,"eventName").subscribe( 
    //   res => console.log(res),
    //   err => console.log("this is the err message" + err)
    // )
    // interval(1000).subscribe(
    //   res=> console.log(res)
    // )


    //forkJoin([hr1,hr2,hr3,hr4])  

    of(1, 2, 3, 4, 5,6 ,7 ,8).pipe(
      // tap(res=> console.log(res)),
      // filter(value => { return (value%2 === 0)}),
      // map(res => Math.pow(res,2))
      // take(5)
      // takeUntil()
      // switchMap
      // concatMap
      // mergeMap

    ).subscribe(
      res => console.log(res)
    )


    // const btn: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>("#btn_listener")
    // if (btn) {
    //   fromEvent(btn, "click").pipe(
    //     // debounceTime(1000)
    //     // throttleTime(1000),
    //     // delay(1000)
    //     //operators...

    //   ).subscribe(
    //     res => console.log(res)
    //   )
    // }






    // const btn: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>("#btn_listener")
    // if(btn){
    //   this.subscriptions.push(fromEvent(btn,"click").subscribe(
    //     res=> console.log("the button has been clicked")
    //   ))


    // }

  }

  onCall() {
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


  onClickAdmin() {

    this.router.navigate(["admin"])
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(
      subscription => subscription.unsubscribe()
    )

  }
}
