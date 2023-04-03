import { Component, OnInit } from '@angular/core';
//import services
import { Router, NavigationStart} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  hideNavbar: boolean = true;
  constructor(private router: Router){
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if(event.url === '/login' || event.url === '/register')
        this.hideNavbar = true;
        else
        this.hideNavbar = false;
      }
    });
  }

  title = 'Antrashare';
}
