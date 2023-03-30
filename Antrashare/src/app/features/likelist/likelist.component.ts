import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { StoryComponent } from '../news-feed/story/story.component';
import { LikeService } from 'src/app/core/like.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-likelist',
  templateUrl: './likelist.component.html',
  styleUrls: ['./likelist.component.sass']
})
export class LikelistComponent implements OnInit, OnDestroy{

  if_likelist_story = true;
  likelist: any[] = [];
  private subscription: Subscription = new Subscription;

  constructor(private likeservice: LikeService){}

  ngOnInit(): void {
    this.subscription = this.likeservice.likelistsubject.subscribe(
      likelist => {
        this.likelist = likelist
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
