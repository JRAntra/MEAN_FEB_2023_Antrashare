import { Component, OnInit,  ElementRef } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.sass']
})
export class NewsfeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mockStrings = [
    "fgnaergarg aer",
    "fhajkfhaaewrohforaegfurheg",
    "faehoifhoraengurbguitheg",
    "fhaewuirghaeruhgoierahgrehaogihaerghaeroigheroiatgnioreag",
    "fjalkdehfoeraungforjeioawrnweoaingforueahgoiratoinawmeoirgfjreipjuie5rjtoi",
    "213432y47345743895yhge5898u5367uh2j3485y3498",
    "faewr",
    "fajeio",
    "1",
    " ",
  ]
  longText = `CS 2`;
  story = 'This is a long story which should be longer than 20 characters.';

}
