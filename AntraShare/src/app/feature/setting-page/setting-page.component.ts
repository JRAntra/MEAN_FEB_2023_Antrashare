import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.scss']
})
export class SettingPageComponent implements OnInit {

  Name: string = "";
  
  constructor(private router: Router) { }

  logOut() {
    this.router.navigate(['/logIn'])
  }
  ngOnInit(): void {
  }

}
