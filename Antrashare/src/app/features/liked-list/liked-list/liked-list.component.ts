import { Component, OnInit } from '@angular/core';
import { NewsfeedGetdataService } from 'src/app/features/news-feed/newsfeed-getdata.service';
import { LikedListService} from 'src/app/core/Service/liked-list.service';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-liked-list',
  templateUrl: './liked-list.component.html',
  styleUrls: ['./liked-list.component.sass']
})
export class LikedListComponent implements OnInit {
  currentUser?:User;
  userid:String = "";
  selectedStory: any;
  likedList : any[] = [];

  constructor(private apiService : NewsfeedGetdataService, private _likedListService :LikedListService) { 
  }

  ngOnInit(): void {
    //get the change of story
    this._likedListService.likedListSubject.subscribe((res) => {
      this.likedList = res;
    })
  }

  

  removeStory(){
    console.log("remove this story")
  }

  onClick(){
    console.log("go to the story detail")
  }

}
