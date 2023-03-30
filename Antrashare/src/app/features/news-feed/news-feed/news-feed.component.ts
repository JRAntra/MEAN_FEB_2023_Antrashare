import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

//Import service
import { NewsfeedGetdataService } from 'src/app/features/news-feed/newsfeed-getdata.service';




@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.sass']
})
export class NewsFeedComponent implements OnInit {
  constructor(private newsfeedService: NewsfeedGetdataService) { }

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
}
