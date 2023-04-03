import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  pageOptions:any[] = [
    {name: 'My Profile', path: 'my-profile'},
    {name: 'News Feed', path: 'news-feed'},
    {name: 'Settings', path: 'settings'},
    {name: 'Administrator', path: 'admin'},
];

  selectedPage: any;

  constructor(private router:Router) {
    
   }

  onClick(selectedPage:any,){
    console.log(selectedPage);
    this.router.navigate([selectedPage.path]);
  }
  
  ngOnInit(): void {
  }

}
