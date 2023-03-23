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
    {
      id: 1,
      title: 'Day1',
      content: "#School's out. Headed to New York.",
    },
    {
      id: 2,
      title: 'Day2',
      content: '#Playing Soccer.',
    },
    {
      id: 3,
      title: 'Day3',
      content: '#Reading Great Gatsby.',
    },
    {
      id: 4,
      title: 'Day4',
      content: '#Enjoying live music.',
    },
  ];

  hideForm = true;
  toggleLikeList() {
    if (this.hideForm) {
      this.hideForm = false;
    } else {
      this.hideForm = true;
    }
  }
}
