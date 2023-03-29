import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.sass'],
  providers: [MatMenuTrigger]
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
  @ViewChild(MatMenuTrigger) trigger?: MatMenuTrigger;
  longText = `CS 2`;
  story = 'This is a long story which should be longer than 20 characters.';
  openMenu() {
    // @ts-ignore
    this.trigger.openMenu();
  }
  // closeMenu() {
  //   // @ts-ignore
  //   this.trigger.closeMenu();
  // }
}
