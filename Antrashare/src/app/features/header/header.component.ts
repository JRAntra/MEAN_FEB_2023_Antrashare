import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/service/userinfo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  userRole: String = "";


  constructor(private _userService : UserService, private router :Router) { }

  ngOnInit(): void {
    this._userService.UserSubject.subscribe(
      (res) => {
        console.log("head");
        console.log(res.userRole);
        this.userRole = res.userRole;
      }
    )
  }

  goToAdmin(){
    this.router.navigate(['admin']);
  }

}
