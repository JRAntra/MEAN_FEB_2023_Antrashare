import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.sass']
})
export class MyProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isExpanded: boolean = false; // define isExpanded property as false by default
}
