import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  constructor() {}

  myString = 'test string';

  valueChange(e: any) {
    this.myString = e.target.value;
  }

  ngOnInit(): void {}
}
