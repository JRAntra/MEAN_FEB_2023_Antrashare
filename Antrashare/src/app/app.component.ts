import { Component, OnInit } from '@angular/core';
import { UserService } from './core/service/user.service';
import { User } from './shared/model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  currentUser: User|undefined;
  userLogedIn: boolean = false;
  
  constructor(private _userService : UserService){
  }

  ngOnInit(): void {
    this._userService.UserSubject.subscribe(
      (res) => {
        this.currentUser = res;
        console.log(res);
        if(res?.userRole) this.userLogedIn = true;
        console.log(this.userLogedIn);
      }
      
    )
  }
  title = 'Antrashare';
}
