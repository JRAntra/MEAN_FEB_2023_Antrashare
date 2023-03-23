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
    { id: 1, title: 'title1', content: 'Use pipes to transform strings, currency amounts, dates, and other data for display. Pipes are simple functions to use in template expressions to accept an input value and return a transformed value. Pipes are useful because you can use them throughout your application, while only declaring each pipe once. For example, you would use a pipe to show a date as April 15, 1988 rather than the raw string format.' },
    { id: 2, title: 'title2', content: 'These Angular docs help you learn and use the Angular framework and development platform, from your first application to optimizing complex single-page applications for enterprises. Tutorials and guides include downloadable examples to help you start your projects.' },
    { id: 3, title: 'title3', content: 'Standalone components provide a simplified way to build Angular applications. Standalone components, directives, and pipes aim to streamline the authoring experience by reducing the need for NgModules. Existing applications can optionally and incrementally adopt the new standalone style without any breaking changes.' },
    { id: 4, title: 'title4', content: 'Many applications need to solve the same general problems, such as presenting a unified user interface, presenting data, and allowing data entry. Developers can create general solutions for particular domains that can be adapted for re-use in different applications. Such a solution can be built as Angular libraries and these libraries can be published and shared as npm packages.' },
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
