import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {

  @Input() publisherName: string = ""
  @Input() publishedTime: string = ""
  @Input() content: any
  constructor() { }

  ngOnInit(): void {
  }

}
