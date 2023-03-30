import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  if_login: boolean = true;
  constructor(){

  }
  title = 'Antrashare';
}
