import { Component, OnInit, EventEmitter} from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import {MenuItem, Message} from 'primeng/api';
import { FormControl, FormGroup } from '@angular/forms';
import { PostboxPipe } from '../postbox.pipe';
import { Observable } from 'rxjs';
import { LikelistComponent } from '../../likelist/likelist.component';
//Import service
import { NewsfeedGetdataService } from 'src/app/core/newsfeed-getdata.service';
import { LikeService } from 'src/app/core/like.service';
import { StoryComponent } from '../story/story.component';



@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.sass']
})
export class NewsFeedComponent implements OnInit {
  constructor(private postboxpipe: PostboxPipe, private newsfeedService: NewsfeedGetdataService, private likeservice: LikeService) { }

  // news_feed_data:
  // This is an array of stories
  news_feed_data: any;
  if_likelist_story: boolean = false;
  likelist: [] = [];
  text1: string = 'Hello';
  inputbox: FormControl = new FormControl("");

  ngOnInit(): void {
    this.newsfeedService.getData().subscribe(data =>{
      this.news_feed_data = data

    })
  }

  onChangeFormControl(){
    // this.inputbox.setValue(this.postboxpipe.transform(this.postboxpipe.transform(this.inputbox.value)))
    // // this.inputbox.setValue(document.get)
    // console.log(this.inputbox.value)
  }

  post_story(){
    this.inputbox.setValue("");
  }

  onlikeButtonClick(story: any){
    this.likeservice.emitLike(story)
    // console.log(story)
  }

}
