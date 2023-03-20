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
    { title: 'title1', content: 'content1.............' },
    { title: 'title2', content: 'content2.............' },
    { title: 'title3', content: 'content3..............' },
    { title: 'title4', content: 'content4..............' },
  ];
}
