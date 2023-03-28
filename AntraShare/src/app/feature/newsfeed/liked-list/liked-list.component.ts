import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LikeListService } from 'src/app/core/liked_list_service/like-list.service';

@Component({
  selector: 'app-liked-list',
  templateUrl: './liked-list.component.html',
  styleUrls: ['./liked-list.component.scss'],
})
export class LikedListComponent implements OnInit {
  hideListEmitter = new EventEmitter<boolean>();
  likes: any[] = [];
  hideForm = true;
  constructor(private likeService: LikeListService) {}

  toggleLikeList() {
    if (this.hideForm) {
      this.hideForm = false;
    } else {
      this.hideForm = true;
    }
  }
  ngOnInit(): void {
    this.likeService.likesListData.subscribe((data) => (this.likes = data));
  }
}
