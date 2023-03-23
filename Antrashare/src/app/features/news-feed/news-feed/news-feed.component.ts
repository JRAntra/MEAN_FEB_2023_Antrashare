import { Component, OnInit, EventEmitter} from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import {MenuItem, Message} from 'primeng/api';
import { FormControl, FormGroup } from '@angular/forms';
import { PostboxPipe } from '../postbox.pipe';


@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.sass']
})
export class NewsFeedComponent implements OnInit {
  constructor(private postboxpipe: PostboxPipe) { }

  text1: string = 'Hello';
  inputbox: FormControl = new FormControl("");

  ngOnInit(): void {
    
  }

  onChangeFormControl(){
    this.inputbox.setValue(this.postboxpipe.transform(this.postboxpipe.transform(this.inputbox.value)))
    // this.inputbox.setValue(document.get)
    console.log(this.inputbox.value)
  }

  post_story(){
    this.inputbox.setValue("");
  }

}
