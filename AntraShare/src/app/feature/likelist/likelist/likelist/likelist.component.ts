import { Component, OnInit } from '@angular/core';
import { NewsfeedServiceService } from 'src/app/core/newsfeed_service/newsfeed-service.service';
import { Newsfeed } from 'src/app/feature/newsfeed/newsfeed';

@Component({
  selector: 'app-likelist',
  templateUrl: './likelist.component.html',
  styleUrls: ['./likelist.component.scss']
})
export class LikelistComponent implements OnInit {

  likedFeedList: any[] = []

  constructor(private newsfeedService: NewsfeedServiceService)  { }

  ngOnInit(): void {
    this.newsfeedService.getLikedFeedList().subscribe((list) => {
      this.likedFeedList = list;
      console.log(this.likedFeedList)
    })
  }
}
