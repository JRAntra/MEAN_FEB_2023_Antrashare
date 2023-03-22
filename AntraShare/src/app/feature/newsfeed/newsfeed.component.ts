import { Component, OnInit } from '@angular/core';
import { Newsfeed } from './newsfeed';
@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  newsfeed: Newsfeed[] = [
    { id: 1, title: 'title1', content: 'content1.............' },
    { id: 2, title: 'title2', content: 'content2.............' },
    { id: 3, title: 'title3', content: 'content3..............' },
    { id: 4, title: 'title4', content: 'content4..............' },
  ];
}
