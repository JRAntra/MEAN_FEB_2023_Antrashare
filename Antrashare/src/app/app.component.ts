import { Component, OnInit } from '@angular/core';
import {  Router} from '@angular/router';
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
  }

  onCall(){
    console.log("here")
    this.testService.getDateUseObservable().subscribe(
        res=> {
          this.data = res;
          console.log(this.data)
        }
      
    )
    // this.data = this.testService.ObservableFromServer
 
  }


  onClickAdmin(){
   
    this.router.navigate(["admin"])
  }
}
