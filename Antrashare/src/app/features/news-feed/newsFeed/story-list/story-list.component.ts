import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.sass']
})
export class StoryListComponent implements OnInit {

  @Input() inputString: String = "this is the placeholder"
  @Output() customEvent :EventEmitter<string> = new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {
  }

  emitValue(str: string){
    this.customEvent.emit(str)
  }
  

}
