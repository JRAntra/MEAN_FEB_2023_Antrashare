import { Component, OnInit } from '@angular/core';
import { Newsfeed } from './newsfeed';
@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  newsfeed: Newsfeed[] = [
    {
      id: 1,
      title: 'title1',
      content: 'sadfjshadfkjhdsajkfkasdfnkasdnlkfsdajkfh',
    },
    {
      id: 2,
      title: 'title2',
      content: 'sadfjshadfkjhdsajkfkasdfnkasdnlkfsdajkfh',
    },
    {
      id: 3,
      title: 'title3',
      content: 'sadfjshadfkjhdsajkfkasdfnkasdnlkfsdajkfh',
    },
    {
      id: 4,
      title: 'title4',
      content: 'sadfjshadfkjhdsajkfkasdfnkasdnlkfsdajkfh',
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
