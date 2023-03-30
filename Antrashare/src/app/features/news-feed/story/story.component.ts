import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostboxPipe } from '../postbox.pipe';
import { story } from 'src/app/shared/model/story_interface';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {

  @Input() story?: any
  @Input() if_likelist_story: boolean = false
  @Output() likeButtonClick = new EventEmitter<string>();

  Story!: story;
  
  constructor() {   
    
  }

  ngOnInit(): void {
    this.Story = {
      if_contain_content: (this.story.content)? true: false,
      publisherName: (this.story.publisherName)? this.story.publisherName: "",
      publishedTime: (this.story.publishedTime)? this.story.publishedTime: "",
      text: (this.story.content)? this.story.content.text: "",
      image: (this.story.content)? this.story.content.image: "",
      video: (this.story.content)? this.story.content.video: "",
      if_likelist_story: this.if_likelist_story
    }
  }

  like_story(): void{
    this.likeButtonClick.emit(this.story)
  }
}
